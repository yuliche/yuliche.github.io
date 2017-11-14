window.addEventListener("load", function(){
    getPosition();
            
                    function getPosition() {

                        var position = new google.maps.LatLng(37.777516,  -122.438016);
                        
                        var options = {
                            zoom: 15,
                            center: position,
                            mapTypeId: google.maps.MapTypeId.RoadMap
                        };
            
                        var map = new google.maps.Map(document.getElementById("map"), options);

                        var marker = new google.maps.Marker({
                            position: position,
                            map: map,
                            title: "Bamboo Vegetarian Restaurant"
                        });
                        var infowindow = new google.maps.InfoWindow({
                content: "Bamboo Vegetarian Restaurant, 834 Divisadero St"
            });

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
                    }
})