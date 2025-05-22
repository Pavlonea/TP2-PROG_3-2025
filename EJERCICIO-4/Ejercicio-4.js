const calcular = document.getElementById("calcular");
document.getElementById("calcular").onclick = () => {
      const peso = parseFloat(document.getElementById("peso").value);
      let estatura = parseFloat(document.getElementById("estatura").value);

      if (!peso || !estatura) return alert("Ingrese peso y estatura validos");

      if (estatura > 3) estatura /= 100;

      const imc = peso / (estatura ** 2);
      alert("Su IMC es: " + imc.toFixed(2));
    };