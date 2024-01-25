let last = 0
const tickRate = 3000

const r = (min, max) => {
	// Random roll between min and max inclusive
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hueRotate(tick) {
	if (!last || tick - last >= tickRate) {
		last = tick
		step = r(40,50) * (Math.random() < 0.5 ? -1 : 1)
		let degree = document.documentElement.style.getPropertyValue('--hue-rotate') || '0deg'
		degree = degree.substring(0, degree.length - 3);
		//if (+degree >= (359 - 22.5) && step > 1) {
		//	degree = (+degree + step) - 359
		//} else if (+degree <= 22.5 && step < 1) {
		//	degree = 359 + (+degree + step)
		//} else {
			degree = +degree + step
		//}
		
		document.documentElement.style.setProperty('--hue-rotate', degree + 'deg')
	}
	requestAnimationFrame(hueRotate)
}

requestAnimationFrame(hueRotate)
