document.getElementById("product-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Producto registrado con éxito.");
    this.reset(); // Reinicia el formulario
});


function filterInventory() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const tableRows = document.querySelectorAll("#inventory-table tbody tr");

    tableRows.forEach((row) => {
        const rowText = row.innerText.toLowerCase();
        if (rowText.includes(searchInput)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}


function filterHistory() {
    const searchInput = document.getElementById("history-search-input").value.toLowerCase();
    const tableRows = document.querySelectorAll("#history-table tbody tr");

    tableRows.forEach((row) => {
        const rowText = row.innerText.toLowerCase();
        if (rowText.includes(searchInput)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}


document.getElementById("report-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const reportType = document.getElementById("report-type").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    alert(`Generando reporte de ${reportType} del ${startDate} al ${endDate}`);

    // Simulación de datos para el gráfico
    const labels = ["Producto A", "Producto B", "Producto C"];
    const data = [30, 20, 50];

    const ctx = document.getElementById("report-chart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Cantidad",
                data: data,
                backgroundColor: ["#007BFF", "#28A745", "#FFC107"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top" }
            }
        }
    });
});

document.getElementById("download-report").addEventListener("click", function () {
    alert("Descargando reporte en formato PDF (simulación)");
});


// Validar cambio de contraseña
document.getElementById("password-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
    } else {
        alert("Contraseña cambiada con éxito.");
        this.reset(); // Reinicia el formulario
    }
});

// Configurar alertas
document.getElementById("alert-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const minStock = document.getElementById("min-stock").value;
    const emailAlerts = document.getElementById("email-alerts").checked;

    alert(`Configuración guardada:\nNivel Mínimo: ${minStock}\nAlertas por Correo: ${emailAlerts ? "Sí" : "No"}`);
    this.reset();
});


document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Gracias por contactarnos, ${name}. Hemos recibido tu mensaje y te responderemos a ${email} pronto.`);
    this.reset(); // Reinicia el formulario
});


function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();
    if (message === "") return;

    // Mostrar mensaje del usuario
    const chatMessages = document.getElementById("chat-messages");
    const userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);

    // Respuesta automática del bot
    setTimeout(() => {
        const botMessage = document.createElement("p");
        botMessage.className = "bot-message";
        botMessage.textContent = getBotResponse(message);
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight; // Mantener scroll al final
    }, 500);

    userInput.value = ""; // Limpiar campo de entrada
}

function getBotResponse(message) {
    const responses = {
        "hola": "¡Hola! ¿En qué puedo ayudarte?",
        "inventario": "Puedes gestionar inventarios en la sección correspondiente.",
        "reporte": "Para generar reportes, ve a la sección de reportes.",
        "adiós": "¡Hasta luego! Vuelve cuando lo necesites."
    };

    const defaultResponse = "Lo siento, no entiendo tu consulta. Por favor, sé más específico.";
    return responses[message.toLowerCase()] || defaultResponse;
}


document.getElementById("product-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Validación de Nombre
    const name = document.getElementById("product-name").value.trim();
    if (name === "") {
        showError("name-error", "El nombre del producto es obligatorio.");
        isValid = false;
    } else {
        hideError("name-error");
    }

    // Validación de Código
    const code = document.getElementById("product-code").value.trim();
    if (code === "") {
        showError("code-error", "El código del producto es obligatorio.");
        isValid = false;
    } else {
        hideError("code-error");
    }

    // Validación de Cantidad
    const quantity = document.getElementById("product-quantity").value;
    if (quantity <= 0) {
        showError("quantity-error", "La cantidad debe ser un número positivo.");
        isValid = false;
    } else {
        hideError("quantity-error");
    }

    // Validación de Precio
    const price = document.getElementById("product-price").value;
    if (price <= 0) {
        showError("price-error", "El precio debe ser un número válido.");
        isValid = false;
    } else {
        hideError("price-error");
    }

    // Registro exitoso
    if (isValid) {
        document.getElementById("success-message").textContent = "Producto registrado con éxito.";
        document.getElementById("success-message").style.display = "block";
        this.reset();
    }
});

// Funciones auxiliares para mostrar y ocultar errores
function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = "none";
}


function filterInventory() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const tableRows = document.querySelectorAll("#inventory-table tbody tr");
    let hasResults = false;

    tableRows.forEach((row) => {
        const rowText = row.innerText.toLowerCase();
        if (rowText.includes(searchInput)) {
            row.style.display = ""; // Mostrar fila
            hasResults = true;
        } else {
            row.style.display = "none"; // Ocultar fila
        }
    });

    // Mostrar mensaje si no hay resultados
    const noResults = document.getElementById("no-results");
    noResults.style.display = hasResults ? "none" : "block";
}


function filterHistory() {
    const searchInput = document.getElementById("history-search-input").value.toLowerCase();
    const tableRows = document.querySelectorAll("#history-table tbody tr");
    let hasResults = false;

    tableRows.forEach((row) => {
        const rowText = row.innerText.toLowerCase();
        if (rowText.includes(searchInput)) {
            row.style.display = ""; // Mostrar fila
            hasResults = true;
        } else {
            row.style.display = "none"; // Ocultar fila
        }
    });

    // Mostrar mensaje si no hay resultados
    const noResults = document.getElementById("history-no-results");
    noResults.style.display = hasResults ? "none" : "block";
}
document.getElementById("report-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const reportType = document.getElementById("report-type").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    // Validar parámetros
    if (!reportType || !startDate || !endDate) {
        alert("Por favor, completa todos los campos para generar el reporte.");
        return;
    }

    // Generar mensaje de confirmación
    const reportMessage = document.getElementById("report-message");
    reportMessage.textContent = `Reporte de ${reportType} generado del ${startDate} al ${endDate}.`;
    reportMessage.style.display = "block";

    // Simulación de datos para el gráfico
    const labels = ["Producto A", "Producto B", "Producto C"];
    const data = [30, 20, 50];

    const ctx = document.getElementById("report-chart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Cantidad",
                data: data,
                backgroundColor: ["#007BFF", "#28A745", "#FFC107"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top" }
            }
        }
    });
});

// Descargar reporte como PDF (simulación)
document.getElementById("download-report").addEventListener("click", function () {
    alert("Descargando reporte en formato PDF...");
});
