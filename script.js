function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    document.getElementById('datetime').textContent = now.toLocaleString('es-ES', options);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        document.getElementById('location').textContent = "La geolocalización no está soportada en este navegador.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById('location').textContent = `Ubicación: Latitud ${lat}, Longitud ${lon}`;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('location').textContent = "Permiso denegado para acceder a la ubicación.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('location').textContent = "Información de ubicación no disponible.";
            break;
        case error.TIMEOUT:
            document.getElementById('location').textContent = "La solicitud para obtener la ubicación ha caducado.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('location').textContent = "Error desconocido.";
            break;
    }
}

// Actualiza la hora y la fecha cada segundo
setInterval(updateDateTime, 1000);
getLocation();
