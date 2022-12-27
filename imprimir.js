document.addEventListener("DOMContentLoaded", () => {
	const datosEstudianteCodificados = sessionStorage.getItem("datosEstudiante");
	// No hay datos
	if (!datosEstudianteCodificados) {
		return alert("No hay datos guardados. Asegúrate de enviar el formulario");
	}
	const datosEstudiante = JSON.parse(datosEstudianteCodificados);
	let notaPromexam = (datosEstudiante.notaexamen1 * 35 / 100) + (datosEstudiante.notaexamen2 * 35 / 100);
	var notaPromExamDecimal = notaPromexam.toFixed(1);
	console.log(notaPromExamDecimal);
	let notaPromLab = (datosEstudiante.notaLaboratorio * 30 / 100);
	console.log(notaPromLab);
	var notaPromasig = (notaPromexam + notaPromLab);
	let notaPromasigDecimal = notaPromasig.toFixed(1);
	console.log(notaPromasigDecimal);
	var notaUnidad = (notaPromasig * 40 / 100) + (datosEstudiante.notaexamenf * 60 / 100);
	var notaUnidadDecimal = notaUnidad.toFixed(1);
	console.log(notaUnidadDecimal);
	if (notaUnidadDecimal >= 6)
	calificacion = "Aprobado con Honores";
	else 
	if (notaUnidadDecimal >= 4)
	calificacion = "Aprobado";
	else
	calificacion = "Reprobado";
	console.log(calificacion);
	document.querySelector("#nombreEstudiante").textContent = datosEstudiante.nombreEstudiante;
	document.querySelector("#carnetEstudiante").textContent = datosEstudiante.carnetEstudiante;
	document.querySelector("#nombreAsignatura").textContent = datosEstudiante.nombreAsignatura;
	document.querySelector("#notaexamen1").textContent = datosEstudiante.notaexamen1;
	document.querySelector("#notaexamen2").textContent = datosEstudiante.notaexamen2;
	document.querySelector("#notaLaboratorio").textContent = datosEstudiante.notaLaboratorio;
	document.querySelector("#notaProm").textContent = notaPromasigDecimal;
	document.querySelector("#notaexamenf").textContent = datosEstudiante.notaexamenf;
	document.querySelector("#notaFinal").textContent = notaUnidadDecimal;
	document.querySelector("#estado").textContent = calificacion;
});