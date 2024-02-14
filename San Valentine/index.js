$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_send = $("#send"); // Seleccionamos el botón con el ID "send"

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    btn_send.click(function() { // Agregamos un manejador de eventos para el botón "send"
        redirectToPage(); // Llamamos a la función redirectToPage() cuando se hace clic en el botón "send"
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

    function redirectToPage() {
        window.location.href = "./radio/index.html"; // Reemplaza "otra_pagina.html" con la URL de la página a la que deseas redirigir
    }
});
