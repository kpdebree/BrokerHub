<!DOCTYPE html>
<html>

<head>
    <style>
    #map {
        height: 600px;
        width: 100%;
    }
    </style>
</head>

<body>
<div class="container"> 
    <?php require('marker-data.php'); ?>

    <h3>Broker Hub

    </h3>
    <div id="map"></div>
   
   <script type="text/javascript">

<?php require ('initMap.js'); ?>
  </script>
  </div>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD34NDc2PvrDfDA2TbZAUizRJGR1g9jWOs&callback=initMap">
    </script>
</body>

</html>