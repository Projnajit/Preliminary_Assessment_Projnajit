<script>
    import 'ol/ol.css'; // Import OpenLayers CSS
    import Map from 'ol/Map';
    import View from 'ol/View';
    import VectorLayer from 'ol/layer/Vector';
    import VectorSource from 'ol/source/Vector';
    import GeoJSON from 'ol/format/GeoJSON';
    import Style from 'ol/style/Style';
    import Fill from 'ol/style/Fill';
    import Stroke from 'ol/style/Stroke';
    import Text from 'ol/style/Text';

    let map;

    import { onMount } from 'svelte';

    onMount(() => {
        // Initialize an OpenLayers map with full-screen width and height
        map = new Map({
            target: 'map',
            layers: [
                // Create a GeoJSON layer and add it to the map
                new VectorLayer({
                    source: new VectorSource({
                        url: 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson',
                        format: new GeoJSON(),
                    }),
                    style: function (feature) {
                        return new Style({
                            stroke: new Stroke({
                                color: '#006a4e', // Set the color to #006a4e
                                width: 2,
                            }),
                            fill: new Fill({
                                color: 'rgba(0, 106, 78, 0.75)', // Set the opacity to 0.75
                            }),
                            text: new Text({
                                text: feature.get('ADMIN'), // Display the 'ADMIN' property as text
                                fill: new Fill({
                                    color: '#000', // Text color
                                }),
                                stroke: new Stroke({
                                    color: '#fff', // Text outline color
                                    width: 2,
                                }),
                            }),
                        });
                    },
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 1,
            }),
        });
    });
</script>


<div id="map"></div>


<style>
    #map {
        width: 100%;
        height: 500px; 
    }
</style>

