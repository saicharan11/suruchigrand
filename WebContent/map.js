function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function myMap() {
  var myCenter = new google.maps.LatLng( 16.737509, 78.008125 );
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter,animation: google.maps.Animation.BOUNCE});
  marker.setMap(map);


  var infowindow = new google.maps.InfoWindow({
    content: "SURUCHI GRAND MULTICUISINE RESTAURANT AND BANQUET HALL!"
  });
  infowindow.open(map,marker);
}