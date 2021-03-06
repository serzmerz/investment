function initMap() {
    // Styles a map in night mode.
    // {lat: 49.599337, lng: 34.505983}
    var uluru = {lat: 49.598972, lng: 34.532536};
    var map = new google.maps.Map(document.getElementById('map'), {
        center: uluru,
        zoom: 14,
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#0a3743"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#092a3f"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#0a3743"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#0a3743"},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#0a3743"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#0a172f"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"color":"#0a172f"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#051638"}]}]
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
