mapboxgl.accessToken =
    'pk.eyJ1IjoiYXRyYW4wMjMiLCJhIjoiY21reGhuaGJ2MGE5MzNsbmJkZjV0cWVvOCJ9.AXQlCqhl_yS9Uw4N6amrNg';
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 3,
    minZoom: 3,
    center: [-98, 39]
});
const grades = [1000, 5000, 20000],
    colors = ['rgb(255,204,204)', 'rgb(255,102,102)', 'rgb(153,0,0)'],
    radii = [5, 15, 25];
map.on('load', () => {
    map.addSource('covid-counts', {
        type: 'geojson',
        data: 'assets/us-covid-2020-counts.geojson'
    });
    map.addLayer({
        id: 'covid-points',
        type: 'circle',
        source: 'covid-counts',
        paint: {
            'circle-radius': {
                property: 'cases',
                stops: [
                    [grades[0], radii[0]],
                    [grades[1], radii[1]],
                    [grades[2], radii[2]]
                ]
            },
            'circle-color': {
                property: 'cases',
                stops: [
                    [grades[0], colors[0]],
                    [grades[1], colors[1]],
                    [grades[2], colors[2]]
                ]
            },
            'circle-stroke-color': 'white',
            'circle-stroke-width': 1,
            'circle-opacity': 0.6
        }
    });
    map.on('click', 'covid-points', (event) => {
        new mapboxgl.Popup()
            .setLngLat(event.features[0].geometry.coordinates)
            .setHTML(`<strong>Cases:</strong> ${event.features[0].properties.cases}`)
            .addTo(map);
    });
});
const legend = document.getElementById('legend');
var labels = ['<strong>COVID-19 Cases</strong>'], vbreak;
for (var i = 0; i < grades.length; i++) {
    vbreak = grades[i];
    dot_radii = 2 * radii[i];
    labels.push(
        '<p class="break"><i class="dot" style="background:' + colors[i] + '; width: ' + dot_radii +
        'px; height: ' + dot_radii + 'px;"></i> <span class="dot-label" style="top: ' + dot_radii / 2 + 'px;">' + vbreak +
        '</span></p>'
    );
}
const source = 
    '<p style="text-align: right; font-size:10pt">Source: <a href="https://github.com/nytimes/covid-19-data">NY Times</a></p>';
legend.innerHTML = labels.join('') + source;
