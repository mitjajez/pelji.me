var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'ciwi3woz1000z2tpgf1rw61ln',
    accessToken: 'pk.eyJ1IjoibWl0amFqZXoiLCJhIjoiY2l3aTJ4ZmZqMDA1ajJ6bnlwbnVjbDR4MyJ9.0NQls3xnaGsI7NBXHvxULA'
}).addTo(mymap);

var marker = L.marker([51.5, -0.09]).addTo(mymap);
