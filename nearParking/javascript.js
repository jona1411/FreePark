var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 55.4038,
            lng: 10.4024
        },
        zoom: 12
    })
}
