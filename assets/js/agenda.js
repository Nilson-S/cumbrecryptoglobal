document.addEventListener('DOMContentLoaded', () => {
  const schedule = {
    jueves: [
      { time: '09:00', speaker: 'ANTONIETA COBO', title: 'INAUGURACION · PALABRAS DE BIENVENIDA' },
      { time: '09:30', speaker: 'LIC. RICHARD UJUETA (PRESIDENTE CAVECOM)', title: 'EVOLUCIÓN DE LA ECONOMÍA DIGITAL 2020 – 2025' },
      { time: '10:30', speaker: 'DR. BENITO HEMIDIAN', title: 'DISRUPCIÓN TECNOLÓGICA Y SU USO EN LA ECONOMÍA' },
      { time: '11:30', speaker: 'LIC. YUSEPP RODRÍGUEZ (BUNKER DIGITAL)', title: 'DÓNDE LA BLOCKCHAIN SE ENCUENTRA CON LA...' },
      { time: '12:30', speaker: '', title: 'ALMUERZO (12:30 - 14:00)' },
      { time: '14:30', speaker: 'LIC. ORLANDO GUZMÁN (INBOUND VZLA)', title: '¿QUÉ BENEFICIOS TIENEN USAR CRIPTOMONEDAS?' },
      { time: '15:30', speaker: 'LIC. DANY COLMENARES', title: 'ADMINISTRACIÓN DE RIESGOS DE LA LEGITIMACIÓN DE CAPITALES' },
      { time: '16:30', speaker: 'LIC. MARÍA CAROLINA VALERA (INBOUND VZLA)', title: 'BUENAS PRÁCTICAS EMPRESARIALES PARA LA ADOPCIÓN SEGURA DE CRIPTOACTIVOS' },
      { time: '17:30', speaker: 'LIC. JHON MONTESINOS (RECRIPTO)', title: 'MANUAL DE PROCEDIMIENTO CONTABLE PARA EL USO RESPONSABLE CRIPTO' },
      { time: '18:30', speaker: 'LIC. LEONEL BARRETO (SEC. ECONOMÍA DIGITAL, MIRANDA)', title: 'ESTRATEGIAS PARA EL CRECIMIENTO Y ESTABILIDAD DE TUS FINANZAS' }
    ],
    viernes: [
      { time: '09:30', speaker: 'ECON. AARON OLMOS (IESA / UNIMET)', title: 'EDUCACIÓN EN BLOCKCHAIN Y CRIPTOACTIVOS EN VENEZUELA' },
      { time: '10:30', speaker: 'ING. CARLOS MORENO (DIRECTOR NACIONAL CRIPTOACTIVOS CAVECOM)', title: 'EL CEREBRO Y EL CONTRATO: IA Y BLOCKCHAIN' },
      { time: '11:30', speaker: 'LIC. ELEAZAR COLMENARES', title: 'USABILIDAD CRIPTO EN VENEZUELA' },
      { time: '12:30', speaker: '', title: 'BREAK (12:30 - 14:30)' },
      { time: '14:30', speaker: 'LIC. FABIOLA BALZA (EDUKATIVA)', title: 'CRIPTOMONEDAS: SOLUCIÓN ESTRATÉGICA Y LEGAL PARA EMPRESAS' },
      { time: '15:30', speaker: 'LIC. IVÁN BOHORQUEZ (DIR. NACIONAL IA CAVECOM)', title: 'CÓMO AGENTES AUTÓNOMOS IA TRANSFORMAN LAS FINANZAS DESCENTRALIZADAS (DeFi)' },
      { time: '16:30', speaker: 'LIC. ANÍBAL GARRIDO (MIEMBRO CAVECOM)', title: 'MODELOS DE TESORERÍA: BITCOIN Y STABLECOINS' },
      { time: '17:30', speaker: 'JAN DOMÍNGUEZ (CO-FOUND. COINTABLE.APP)', title: 'IMPLICACIONES CONTABLES Y FISCALES P2P EN VENEZUELA' }
    ],
    sabado: [
      { time: '09:30', speaker: 'LIC. ORLANDO ABREU / LIC. JOSÉ ORLANDO TREJO ABREU (FUNDICES)', title: 'TOKENIZACIÓN DE ACTIVOS: PRÓXIMO RETO' },
      { time: '10:30', speaker: 'DR. ERNESTO PORTILLO (CRIPTO JURIS)', title: 'CLAVES DE LA TRAZABILIDAD EN OPERACIONES DE CRIPTOMONEDAS' },
      { time: '11:30', speaker: 'DRA. ELBA BOADA (CRIPTO JURIS)', title: 'INVESTIGACIÓN PENAL Y DELITOS CON CRIPTOACTIVOS' },
      { time: '12:30', speaker: '', title: 'BREAK (12:30 - 14:30)' },
      { time: '14:30', speaker: 'LIC. FÉLIX RUBIO', title: 'PREVENCIÓN DE LAVADO DE ACTIVOS Y COMPLIANCE EN CRIPTOACTIVOS' },
      { time: '15:30', speaker: 'MIEMBRO UNIVERSIDAD NUEVA ESPARTA', title: 'PONENCIA ACADÉMICA' },
      { time: '16:30', speaker: 'JAN DOMÍNGUEZ (CO-FOUND. COINTABLE.APP)', title: 'IMPLICACIONES CONTABLES Y FISCALES P2P EN VENEZUELA' },
      { time: '17:30', speaker: 'TIM STERN (CRYPTO CITY)', title: 'LA EVOLUCIÓN DE LAS CIUDADES INTELIGENTES' }
    ]
  };

  const dayButtons = document.querySelectorAll('.day-btn');
  const list = document.getElementById('agenda-list');

  function renderAgenda(day) {
    const items = schedule[day] || [];
    list.innerHTML = '';
    items.forEach((it, i) => {
      const card = document.createElement('div');
      const border = (i % 2 === 0) ? 'border-l-primary' : 'border-l-accent-purple';
      card.className = `glass-card p-6 rounded-2xl flex items-center gap-8 border-l-4 ${border} hover:bg-white/5 transition-colors`;
      card.innerHTML = `
        <div class="w-28 flex-none text-center">
          <span class="text-xl font-bold text-white">${it.time}</span>
          <p class="text-[10px] text-white/40 uppercase">Horario</p>
        </div>
        <div>
          <h4 class="text-lg font-bold text-white mb-1">${it.title}</h4>
          <p class="text-sm text-white/60">${it.speaker}</p>
        </div>
      `;
      list.appendChild(card);
    });
  }

  function setActive(day) {
    dayButtons.forEach(btn => {
      if (btn.dataset.day === day) btn.classList.add('bg-primary');
      else btn.classList.remove('bg-primary');
    });
  }

  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const day = btn.dataset.day;
      setActive(day);
      renderAgenda(day);
    });
  });

  // Set default
  setActive('jueves');
  renderAgenda('jueves');
});
