document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form-contacto");
  const respuesta = document.getElementById("form-respuesta");

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    // Limpieza y validación simple
    for (let [key, value] of data.entries()) {
      if (!value.trim()) {
        respuesta.textContent = "Por favor, completa todos los campos.";
        respuesta.style.color = "red";
        return;
      }
    }

    try {
      const resp = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (resp.ok) {
        respuesta.textContent = "✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.";
        respuesta.style.color = "#00bfa6";
        form.reset();
      } else {
        respuesta.textContent = "⚠️ Ocurrió un error al enviar el mensaje.";
        respuesta.style.color = "red";
      }
    } catch (error) {
      respuesta.textContent = "❌ Error de conexión. Inténtalo nuevamente.";
      respuesta.style.color = "red";
    }
  });
});
