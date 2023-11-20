function hueRotate() {
	let degree = document.documentElement.style.getPropertyValue('--hue-rotate') || '0deg';
	degree = degree.substring(0, degree.length - 3);
	if (degree === 359) {
		degree = 0;
	} else {
		degree ++;
	}
	
	document.documentElement.style.setProperty('--hue-rotate', degree + 'deg');
	requestAnimationFrame(hueRotate);
}

requestAnimationFrame(hueRotate);