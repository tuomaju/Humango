import {Component, OnInit} from '@angular/core';
import {ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import {MapService} from '../../map.service';

@Component({
    selector: 'app-new-map',
    templateUrl: './new-map.component.html',
    styleUrls: ['./new-map.component.scss']
})
export class NewMapComponent implements OnInit {


    name = 'asd';

    @ViewChild('gmap') gmapElement: any;

    x = document.querySelector('#gmap');

    constructor(public mapService: MapService) {
    }

    ngOnInit() {

        this.mapService.lat = localStorage.getItem('latitude');
        this.mapService.lng = localStorage.getItem('longitude');

        if (!this.mapService.lat) {
            this.mapService.lat = 60.186332588;
            this.mapService.lng = 24.93749625;
        }


        this.getLocation();


        this.mapService.mapElement = this.gmapElement.nativeElement;

        this.mapService.location = new google.maps.LatLng(this.mapService.lat, this.mapService.lng);

        const location = new google.maps.LatLng(this.mapService.lat, this.mapService.lng);


        // this.initMap(location, 15);


        this.mapService.initMap(this.mapService.location, 15, this.mapService.mapElement);

        this.mapService.createMarker(this.mapService.location, this.mapService.map);

        this.mapService.searchNearby(this.mapService.map, this.mapService.location, 2000, localStorage.getItem('placeType'), this.mapService.destinationMarker);


        // this.searchNearby(this.mapService.map, location, 700, localStorage.getItem('placeType'), destinationMarker);


    }

    refresh() {
        this.mapService.setPlaceStype(this.name);
        this.mapService.refresh(15, 2000);

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
