var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('http://b.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
