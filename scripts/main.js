"use strict";function showGoogleMaps(){var o=new google.maps.LatLng(position[0],position[1]),e={zoom:17,streetViewControl:!1,scaleControl:!1,draggable:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,center:o},a=new google.maps.Map(document.getElementById("googlemaps"),e),n=new google.maps.InfoWindow({content:"<h4>Universidad San Sebastián</h4><p>Bellavista 7, Recoleta, Santiago.</p>"}),t=new google.maps.Marker({position:o,map:a,draggable:!1,animation:google.maps.Animation.DROP});n.open(a,t)}var position=[-33.4345063,-70.6358538];google.maps.event.addDomListener(window,"load",showGoogleMaps);