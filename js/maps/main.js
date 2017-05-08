 /* ======= Google Map ======= */
    map = new GMaps({
        div: '#map',
        lat: 8.899519, 
        lng: 77.827547,
        scrollwheel: false,
        zoom: 9,
    });
    
    map.addMarker({
        lat: 8.948138, 
        lng: 77.275071,
        verticalAlign: 'top',
        title: 'Wedding Location',  
        infoWindow: {
            content: '<div class="note">Wedding</div><h4 class="map-title script">Thiru kumaran kovil</h4><div class="address"><span class="region">Ilanji</span><br/><span class="region">Tirunelveli</span></div>'
        }
        
        
    });
    

    map.addMarker({
        lat: 8.495749,
        lng: 78.128578,
        title: 'Reception Location',      
        infoWindow: {
            content: '<div class="note">Reception</div><h4 class="map-title script">Bhajana Mandapam</h4><div class="address"><span class="region">Thiruchendur</span><br><span class="postal-code">Tuticorin</span></div>'
        } 
        
    });
    
    map.addMarker({
         lat: 8.958522,
        lng: 77.280005,
        title: 'Wedding Party',      
        infoWindow: {
            content: '<div class="note">Wedding Party</div><h4 class="map-title script">Kuthalingam Bethammal Marriage Hall</h4><div class="address"><span class="region">Ilanji</span><br><span class="postal-code">Tirunelveli</span></div>'
        } 
        
    });
    
    /*display marker 1 address on load */
    google.maps.event.trigger(map.markers[0], 'click');
    /*display marker 2 address on load */
    google.maps.event.trigger(map.markers[1], 'click');
    
    google.maps.event.trigger(map.markers[2], 'click');