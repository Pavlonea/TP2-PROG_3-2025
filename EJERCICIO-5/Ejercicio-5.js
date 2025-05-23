const boton = document.getElementById('boton');

boton.addEventListener('click', () => {

	const base = Number(document.getElementById('base').value);
	const altura1 = Number(document.getElementById('alturaA').value);
	const altura2 = Number(document.getElementById('alturaC').value);
	const resultado = document.getElementById('resultado');

	const areaRectangulo = (base * altura2);
	const areaTriangulo = (base * (altura1 - altura2)) / 2;
	const areaResultado = areaRectangulo + areaTriangulo;
	resultado.innerHTML = `El área total es: ${areaResultado}`;
});
