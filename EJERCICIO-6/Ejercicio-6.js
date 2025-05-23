document.getElementById("botonDeEnviar").addEventListener("click", function () {
            const nombre = document.getElementById("nombre").value.trim();
            const apellido = document.getElementById("apellido").value.trim();
            const edad = parseInt(document.getElementById("edad").value);
            const altura = Number(document.getElementById("altura").value);
            const correo = document.getElementById("correo").value.trim();
            const mensaje = document.getElementById("mensaje");
            const resultado = document.getElementById("resultado");
            mensaje.innerHTML = "";
            resultado.innerHTML = "";

            const incorrectos = [];

            // Validaciones
            if (nombre === "" || nombre.length > 50){
                 incorrectos.push("Nombre inválido o demasiado largo.");}
            if (apellido === "" || apellido.length > 50){
                 incorrectos.push("Apellido inválido o demasiado largo.");}
            if (isNaN(edad) || edad < 18){
                incorrectos.push("Edad inválida o menor de edad.");
            }
            if (isNaN (altura) || altura < 0 || altura > 230){
                 incorrectos.push("Altura fuera de rango.");}
            if (correo === "" || !correo.includes("@")){
                 incorrectos.push("Correo inválido.");}

            const correctos = [];

            if (nombre != "" && nombre.length < 50){
                correctos.push("Nombre valido.");}
            if (apellido != "" && apellido.length < 50){
                 correctos.push("Apellido valido.");}
            if (!isNaN (edad) && edad >= 18){
                correctos.push("Edad valida.");}
            if (!isNaN (altura) && altura > 0 && altura < 230){
                 correctos.push("Altura valido.");}
            if (correo != "" && correo.includes("@")){
                 correctos.push("Correo valido.");}


            // Mostrar resultado
            if (incorrectos.length > 0) {
                resultado.innerHTML = incorrectos.join("<br>");
                
            } 
            if (correctos.length > 0) {
                mensaje.innerHTML = correctos.join("<br>");
                
            }
        });