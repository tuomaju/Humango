import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    apiKey = 'AIzaSyAtogVRkf6njZxzyKSCUa17nx6wUDNYfg8';
    mapSource: any;
    lat: any;
    lon: any;
    dangerousMapSource: any;
    x = document.getElementById('demo');

    constructor(private sanitizer: DomSanitizer) {
    }

    updateMapUrl(apiKey: string, lat: string, lon: string) {
        this.dangerousMapSource = 'https://www.google.com/maps/embed/v1/view?key=' + this.apiKey + '&center=' + this.lat + '+' + this.lon + '&zoom=13';
        this.mapSource = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousMapSource);
    }


    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition, this.errorCallback);
            // console.log('geolocation');
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

    ngOnInit() {

        this.lat = localStorage.getItem('latitude');
        this.lon = localStorage.getItem('longitude');
       // console.log(Math.floor((Math.random() * 10) + 1));

        this.getLocation();

       // console.log(this.lat);
        if (!this.lat) {
            this.lat = 60.186332588;
            this.lon = 24.93749625;
        }
        this.updateMapUrl(this.apiKey, this.lat, this.lon);
        localStorage.removeItem('latitude');
        localStorage.removeItem('longitude');

    }

}
