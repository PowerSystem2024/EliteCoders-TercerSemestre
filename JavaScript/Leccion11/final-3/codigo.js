document.addEventListener("DOMContentLoaded", function () {
const form = document.querySelector("form");
const usernameInput = form.querySelector("input[type='text']");
const passwordInput = form.querySelector("input[type='password']");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
    alert("Por favor completá todos los campos. Predeterminado: admin/1234");
    return;
    }

    // Simulación de login exitoso
    if (username === "admin" && password === "1234") {
    alert("¡Login exitoso!");
    } else {
    alert("Credenciales incorrectas. Predeterminado: admin/1234");
    }

    // Resetear los campos siempre después del intento
    usernameInput.value = "";
    passwordInput.value = "";
});
});
