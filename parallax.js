let root = document.documentElement;
root.addEventListener('mousemove', e => {
	root.style.setProperty('--x', (e.clientX / 100) + 'px');
});