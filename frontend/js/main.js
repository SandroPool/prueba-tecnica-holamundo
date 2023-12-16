const map = L.map('map').setView([51.505, -0.09], 13);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

(async _ => {
    const query = `http://127.0.0.1:5000/address`;
    const response = await fetch(query);
    const data = await response.json();

    if (data.length === 0) {
        L.marker([-8.115225394522103, -79.0262524161061]).addTo(map)
            .bindPopup(`<b>Hello world!</b><br />1 Agust 2018`).openPopup();
        return
    }

    data.forEach(({ lat, long, tiempo }) => {
        console.log(lat, long, tiempo);

        let tiempoNuevo = new Date(tiempo).toLocaleDateString('en-us', { day: "numeric", month: "short", year: "numeric", });

        L.marker([lat, long]).addTo(map)
            .bindPopup(`<b>Hello world!</b><br /> ${tiempoNuevo}`).openPopup();
    });
})();


const popup = L.popup()
    .setLatLng([51.516, -0.09])
    .setContent('I am a standalone popup.')
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.toString()}`)
        .openOn(map);
}

map.on('click', onMapClick);
