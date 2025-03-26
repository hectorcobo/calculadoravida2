function calcularVida() {
  const edad = parseInt(document.getElementById('edad').value);
  const sexo = document.getElementById('sexo').value;
  const resultado = document.getElementById('resultado');

  if (isNaN(edad) || edad < 0 || edad > 120 || sexo === "") {
    resultado.innerHTML = "Por favor, introduce datos válidos.";
    return;
  }

  // Expectativa promedio en España
  let expectativa;
  if (sexo === 'hombre') {
    expectativa = 80;
  } else if (sexo === 'mujer') {
    expectativa = 85;
  }

  const añosRestantes = expectativa - edad;

  if (añosRestantes > 0) {
    resultado.innerHTML = `Te quedan aproximadamente <strong>${añosRestantes}</strong> años de vida según la media en España.`;
  } else {
    resultado.innerHTML = "¡Has superado la expectativa media de vida en España! ¡Felicidades!";
  }
}
