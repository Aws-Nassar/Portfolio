const map = L.map('map').setView([32.1797, 34.9664], 14); // الإحداثيات المعدلة

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 19,
   attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
