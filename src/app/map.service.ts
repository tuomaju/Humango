import {Injectable} from '@angular/core';
import {} from '@types/googlemaps';

@Injectable()
export class MapService {

    map: google.maps.Map;
    lat: any;
    lng: any;
    location: any;
    mapElement: any;

    constructor() {
    }

    userMarker = {
        url: './assets/img/loc.png',
       scaledSize: new google.maps.Size(26, 42),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(13, 42)
    };

    destinationMarker = {
        url: './assets/img/logo.svg',
        scaledSize: new google.maps.Size(42, 42),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 46)

    };


    initMap(position, zoom, mapElement) {
        this.map = new google.maps.Map(mapElement, {
            disableDefaultUI: true,
            center: position,
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{}]
        });

    }


    createMarker(position, map, icon?) {
        const marker = new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: icon
        });
    }

    createRadius(map, position, radius) {
        const cityCircle = new google.maps.Circle({
            strokeColor: '#283F3B',
            strokeOpacity: 0.1,
            strokeWeight: 0,
            fillColor: '#54C27B',
            fillOpacity: 0.15,
            map: map,
            center: position,
            radius: radius
        });
    }


    searchNearby(map, location, radius, type, markerType) {

        const service = new google.maps.places.PlacesService(map);

        service.nearbySearch({
            location: location,
            radius: radius,
            type: type
        }, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    this.createMarker(new google.maps.LatLng(results[i].geometry.location.lat(), results[i].geometry.location.lng()),
                        map,
                        markerType);
                }
            }
        });
    }

    setPlaceStype(type) {
        localStorage.setItem('placeType', type);
    }

    refresh(zoom, radius) {
        this.initMap(this.location, zoom, this.mapElement);
        this.createMarker(this.location, this.map);
        this.searchNearby(this.map, this.location, radius, localStorage.getItem('placeType'), this.destinationMarker);
    }

}
