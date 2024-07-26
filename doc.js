function calcular() {
    const valor1 = +document.getElementById("1num").value;
    const sinal = document.getElementById("sinal").value;
    const valor2 = +document.getElementById("2num").value;
    var resultado;

    if (sinal === "x") {
      resultado = valor1 * valor2;
    } else if (sinal === "/") {
      resultado = valor1 / valor2;
    } else if (sinal === "+") {
      resultado = valor1 + valor2;
    } else if (sinal === "-") {
      resultado = valor1 - valor2;
    } else {
      resultado = "";
      Swal.fire("Digite um sinal de operação válido!");
    }
    document.getElementById("result").innerHTML = resultado;
  }