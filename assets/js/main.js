// Manejo del formulario de registro y funcionalidades de la web
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const ticketResult = document.getElementById('ticket-result');

    // URL de tu aplicación web de Google Apps Script
    const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbyAliR9TD8cw8am6mVxOAV1IpT5VcQL5f2UWJqiQFv--i4iyfu_FobwHLmRHYPOYEysGw/exec';

    if (!form) return;

    // Función para generar el código único del ticket
    function generateCode() {
        const part = Date.now().toString(36).slice(-6).toUpperCase();
        const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
        return `CCG-${part}-${rnd}`;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Captura de valores de los inputs
        const first = document.getElementById('firstName')?.value || '';
        const last = document.getElementById('lastName')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const phone = document.getElementById('phone')?.value || '';

        // Validación básica de campos requeridos
        if (!first.trim() || !last.trim() || !email.trim()) {
            ticketResult.classList.remove('hidden');
            ticketResult.innerHTML = `<p class="text-red-300 font-bold">Por favor completa los campos requeridos.</p>`;
            return;
        }

        const code = generateCode();

        // 1. Mostrar resultado visual al usuario
        ticketResult.classList.remove('hidden');
        ticketResult.innerHTML = `
            <p class="text-primary font-bold text-lg">¡Registro completado!</p>
            <p class="mt-2 text-white">Gracias <strong>${first} ${last}</strong>. Pronto recibira mas información sobre el evento.</p>
            <div class="mt-3 p-3 bg-white/5 border border-primary/20 rounded">
                <p class="font-mono font-bold text-primary">CÓDIGO: ${code}</p>
            </div>
            <p id="sending-status" class="mt-4 text-sm text-white/40 italic">Sincronizando con la base de datos...</p>
        `;

        // 2. Preparar los datos para enviar
        const params = new URLSearchParams();
        params.append('timestamp', new Date().toLocaleString());
        params.append('first', first);
        params.append('last', last);
        params.append('email', email);
        params.append('phone', phone);
        params.append('code', code);

        // 3. Enviar a Google Sheets
        fetch(SHEETS_WEBHOOK_URL, {
            method: 'POST',
            mode: 'no-cors', // Permite el envío aunque Google no devuelva cabeceras CORS
            body: params
        })
        .then(() => {
            const statusEl = document.getElementById('sending-status');
            if (statusEl) {
                statusEl.textContent = '✓ Datos guardados exitosamente en la nube.';
                statusEl.classList.replace('text-white/40', 'text-green-400');
            }
        })
        .catch(err => {
            console.error('Error al guardar:', err);
            const statusEl = document.getElementById('sending-status');
            if (statusEl) statusEl.textContent = 'Aviso: Registro local listo, pero falló la sincronización.';
        });

        form.reset();
    });

    // --- Funcionalidad del carrusel de Ponentes ---
    const speakersList = document.getElementById('speakers-list');
    const prevBtn = document.getElementById('speakers-prev');
    const nextBtn = document.getElementById('speakers-next');

    if (speakersList && prevBtn && nextBtn) {
        function getScrollStep() {
            const item = speakersList.querySelector('.flex-none');
            if (item) return item.getBoundingClientRect().width + 24; 
            return 320;
        }

        prevBtn.addEventListener('click', () => {
            speakersList.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            speakersList.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
        });
    }
});