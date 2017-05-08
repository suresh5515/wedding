 /* ======= Google Map ======= */
    map = new GMaps({
        div: '#map',
        lat: 10.9636069, 
        lng: 78.07571411,
        scrollwheel: false,
        zoom: 10,
    });

    map.addMarker({
        lat: 10.960673, 
        lng: 78.078985,
        verticalAlign: 'top',
        title: 'Wedding Location',  
        infoWindow: {
            content: '<div class="note">Wedding</div><h4 class="map-title script">Arulmigu Kalyana Pasupatheswarar Temple</h4><div class="address"><span class="region">Karur</span></div>'
        }
        
        
    });
    

    map.addMarker({
        lat: 11.103623,
        lng: 78.008568,
        title: 'Reception Location',      
        infoWindow: {
            content: '<div class="note">Reception</div><h4 class="map-title script">Kokila Marriage Hall</h4><div class="address"><span class="region">Cavery River Rd, Paramathi Velur,</span><br><span class="postal-code">Namakkal</span></div>'
        } 
        
    });
	
	map.addMarker({
        lat: 10.961416,
        lng: 78.086095,
        title: 'Wedding Party',      
        infoWindow: {
            content: '<div class="note">Wedding Party</div><h4 class="map-title script">Archana Hotel</h4><div class="address"><span class="region">Karur</span></div>'
        } 
        
    });
    
    /*display marker 1 address on load */
    google.maps.event.trigger(map.markers[0], 'load');
    /*display marker 2 address on load */
    google.maps.event.trigger(map.markers[1], 'load');
	
	google.maps.event.trigger(map.markers[2], 'load');