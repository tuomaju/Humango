import {Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
    selector: 'app-new-map',
    templateUrl: './new-map.component.html',
    styleUrls: ['./new-map.component.scss']
})
export class NewMapComponent implements OnInit {


    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;

    lat: any;
    lng: any;
    x = document.querySelector('#gmap');


    ngOnInit() {

        this.lat = localStorage.getItem('latitude');
        this.lng = localStorage.getItem('longitude');

        if (!this.lat) {
            this.lat = 60.186332588;
            this.lng = 24.93749625;
        }


        this.getLocation();


        setTimeout(() => {

            const location = new google.maps.LatLng(this.lat, this.lng);


            const destinationMarker = {
                url: './assets/img/logo.svg',
                scaledSize: new google.maps.Size(42, 42),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(20, 46)

            };

            this.initMap(location, 15);

            this.searchNearby(this.map, location, 700, localStorage.getItem('placeType'), destinationMarker);

        }, 250);

    }

    setPlaceStype(type) {
        localStorage.setItem('placeType', type);
    }

    initMap(position, zoom) {
        this.map = new google.maps.Map(this.gmapElement.nativeElement, {
            disableDefaultUI: true,
            center: position,
            zoom: zoom,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{}]
        });

        const userMarker = {
            url: './assets/img/loc.png',
            scaledSize: new google.maps.Size(26, 42),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(13, 42)
        };

        this.createMarker(new google.maps.LatLng(this.lat, this.lng), this.map);

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


    createMarker(position, map, icon?) {
        const marker = new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: icon
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

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.errorCallback);
            console.log('geolocation');
        } else {
            this.x.innerHTML = 'Geolocation is not supported by this browser.';
            console.log('no geolocation');
        }
    }

    showPosition(position) {
        // console.log(position);
        // console.log(position.coords.latitude);
        localStorage.setItem('latitude', position.coords.latitude);
        localStorage.setItem('longitude', position.coords.longitude);
    }

    errorCallback() {
        console.log('error');
    }


}
