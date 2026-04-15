// script.js
let map, directionsService, directionsRenderer;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { DirectionsService, DirectionsRenderer } = await google.maps.importLibrary("routes");
  await google.maps.importLibrary("geometry");

  map = new Map(document.getElementById("map"), {
    center: { lat: -19.9, lng: -44.0 },
    zoom: 8
  });

  directionsService = new DirectionsService();
  directionsRenderer = new DirectionsRenderer({ map });
}

initMap();
