let map, routingControl;

function initMap() {
    map = L.map('office-map').setView([56.743, 37.17], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
}

function buildRoute() {
    const startCoords = document.getElementById('start-point').value.split(',');
    const endCoords = document.getElementById('end-point').value.split(',');

    if (routingControl) {
    map.removeControl(routingControl);
    }

    routingControl = L.Routing.control({
    waypoints: [
        L.latLng(parseFloat(startCoords[0]), parseFloat(startCoords[1])),
        L.latLng(parseFloat(endCoords[0]), parseFloat(endCoords[1]))
    ],
    routeWhileDragging: false
    }).addTo(map);
}