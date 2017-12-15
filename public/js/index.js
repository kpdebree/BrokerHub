var comps;

function getData() {
    $.get("/api/comps", function(data) {
        comps = data;
        initMap(data)
        console.log(comps)
        
    })
    // placeMarkers();
};

function initMap(locations) {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(33.830834,-117.927206),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    console.log(locations);

    for (i = 0; i < locations.length; i++) { 
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i].building_name);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}


// function placeMarkers() {
//     // Place each marker on the map  
//     for( i = 0; i < comps.length; i++ ) {
//         console.log(comps[i])
//         var position = new google.maps.LatLng(comps[i].latitude, comps[i].longitude);
//         bounds.extend(position);
//         var marker = new google.maps.Marker({
//             position: position,
//             map: map,
//             title: comps[i].building_name
//         });

//          google.maps.event.addListener(marker, 'click', (function(marker, i) {
//             return function() {

                

//                 infoWindow.setContent('<div class="info_content"><h3>' + comps[i].building_name + '</h3></div>');


//                 infoWindow.open(map, marker);
//             }
//         })(marker, i));

//         // Center the map to fit all markers on the screen
//         map.fitBounds(bounds);
//     }
// }



// function initMap(){

//     var map;
//     var bounds = new google.maps.LatLngBounds();
//     var mapOptions = {
//         mapTypeId: 'terrain'
//     };
                    
//     // Display a map on the web page
//     map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
//     map.setTilt(50);
        
//     var infoWindow = new google.maps.InfoWindow(), marker, i;

//     getData();


//      var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
//         this.setZoom(8);
//         google.maps.event.removeListener(boundsListener);
//     });
//   // Load initialize function
// google.maps.event.addDomListener(window, 'load', initMap);  
// }


$(document).ready(function() { 


    getData();
  
});