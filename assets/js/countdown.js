// Cuenta regresiva hacia la fecha del evento.
// Evento: 26 de marzo de 2026 a las 09:00 (hora local)
const eventDate = new Date('2026-03-26T09:00:00');

function pad(v) {
	return String(v).padStart(2, '0');
}

function updateCountdown() {
	const now = new Date();
	let diff = eventDate - now;

	const daysEl = document.getElementById('countdown-days');
	const hoursEl = document.getElementById('countdown-hours');
	const minutesEl = document.getElementById('countdown-minutes');
	const secondsEl = document.getElementById('countdown-seconds');

	if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

	if (diff <= 0) {
		daysEl.textContent = '00';
		hoursEl.textContent = '00';
		minutesEl.textContent = '00';
		secondsEl.textContent = '00';
		clearInterval(window._ccgCountdownInterval);
		return;
	}

	const seconds = Math.floor(diff / 1000) % 60;
	const minutes = Math.floor(diff / (1000 * 60)) % 60;
	const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	daysEl.textContent = pad(days);
	hoursEl.textContent = pad(hours);
	minutesEl.textContent = pad(minutes);
	secondsEl.textContent = pad(seconds);
}

document.addEventListener('DOMContentLoaded', () => {
	updateCountdown();
	window._ccgCountdownInterval = setInterval(updateCountdown, 1000);
});

