jQuery(function($) {
  function renderMap() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var myOptions = {
      zoom: 15,
      scrollwheel: false,
      mapTypeControl: false,
      streetViewControl: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map(document.getElementById('map'), myOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
	}
	window.renderMap = renderMap;

  var script = document.createElement('script');
  script.src =
    'https://maps.googleapis.com/maps/api/js?key=AIzaSyArtnERhFcemFd6xWTBfbjyJYRCK6fvgMw&callback=renderMap';
  document.body.appendChild(script);
});
