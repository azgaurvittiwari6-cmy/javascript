window.onload = () => {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(success, error);
    } else {
        alert("Geolocation is not supported by this browser.");
    }

    function success(position) {
        const coords = position.coords;
        document.getElementById('latitude').textContent = `Latitude: ${coords.latitude}`;
        document.getElementById('longitude').textContent = `Longitude: ${coords.longitude}`;
        document.getElementById('accuracy').textContent = `Accuracy: ${coords.accuracy}m`;
        document.getElementById('altitude').textContent = `Altitude: ${coords.altitude || 'N/A'}`;
        document.getElementById('altitudeAccuracy').textContent = `Altitude Accuracy: ${coords.altitudeAccuracy || 'N/A'}`;
        document.getElementById('heading').textContent = `Heading: ${coords.heading || 'N/A'}°`;
        document.getElementById('speed').textContent = `Speed: ${coords.speed || 'N/A'} m/s`;
        document.getElementById('timestamp').textContent = `Last Updated: ${new Date(position.timestamp).toLocaleTimeString()}`;
        
        console.log(coords);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        let message = "Unable to retrieve your location";
        if (err.code === 1) message = "Location access denied.";
        else if (err.code === 2) message = "Location unavailable.";
        else if (err.code === 3) message = "Location request timed out.";
        
        document.getElementById('latitude').textContent = message;
    }
};