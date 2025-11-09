// main.js — interacción básica

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("button");
  const seccion = document.querySelector(".evento");

  // Crear un mensaje dinámico
  const mensaje = document.createElement("p");
  mensaje.className = "mensaje";
  mensaje.textContent = "✅ ¡Entrada reservada con éxito!";
  seccion.appendChild(mensaje);

  boton.addEventListener("click", () => {
    // Mostrar el mensaje con animación
    mensaje.classList.add("visible");

    // Desactivar el botón temporalmente
    boton.disabled = true;
    boton.textContent = "🎟️ Reservada";

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
      mensaje.classList.remove("visible");
      boton.disabled = false;
      boton.textContent = "🎟️ Reservar entrada";
    }, 3000);
  });
});
