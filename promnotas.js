document.addEventListener("DOMContentLoaded", () => {
	const $formulario = document.querySelector("#formulario");
	const $notaexamen1 = document.querySelector("#notaexamen1"),
		$notaexamen2 = document.querySelector("#notaexamen2"),
		$notaLaboratorio = document.querySelector("#notaLaboratorio"),
		$notaexamenf = document.querySelector("#notaexamenf");
	$formulario.onsubmit = function (evento) {
		// Prevenir envío de formulario
		evento.preventDefault();
		// Recorrer elementos input y si alguno está vacío detenernos
		const elementos = $formulario.elements;
		for (const elemento of elementos) {
			if (elemento.tagName === "INPUT" && elemento.value === "") {
				return;
			}
		}

		// Hasta aquí todos los campos están llenos
		for (const $nota of [$notaexamen1, $notaexamen2, $notaLaboratorio, $notaexamenf]) {
			const valor = parseFloat($nota.value);
			if (valor < 1 || valor > 7) {
				return alert(`El valor de ${$nota.placeholder} debe estar entre 1 y 7`);
			}
		}

		// Hasta aquí las notas son correctas
		const datos = {};
		for (const elemento of elementos) {
			if (elemento.tagName === "INPUT") {
				let valor = elemento.value;
				if (elemento.type === "number") {
					valor = parseFloat(elemento.value);
				}
				datos[elemento.id] = valor;
			}
		}
		sessionStorage.setItem("datosEstudiante", JSON.stringify(datos));
		window.location.href = "./imprimir.html";
	}
});