function hueRotate() {
	let step = 0.5
	let degree = document.documentElement.style.getPropertyValue('--hue-rotate') || '0deg';
	degree = degree.substring(0, degree.length - 3);
	if (+degree >= 358.5) {
		degree = 0;
	} else {
		degree = +degree + step;
	}
	
	document.documentElement.style.setProperty('--hue-rotate', degree + 'deg');
	requestAnimationFrame(hueRotate);
}

requestAnimationFrame(hueRotate);