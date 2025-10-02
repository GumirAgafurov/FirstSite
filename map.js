    var map = L.map('map').setView([43.817699, -79.185935], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([43.817699, -79.185935]).addTo(map)
            .bindPopup('Ontario Zoo')
            .openPopup();