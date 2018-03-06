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
    lon: any;
    x = document.querySelector('#gmap');

    ngOnInit() {

        this.lat = localStorage.getItem('latitude');
        this.lon = localStorage.getItem('longitude');
        // console.log(Math.floor((Math.random() * 10) + 1));

        if (!this.lat) {
            this.lat = 60.186332588;
            this.lon = 24.93749625;
        }

        this.getLocation();


        setTimeout(() => {
            const mapProp = {
                disableDefaultUI: true,
                center: new google.maps.LatLng(this.lat, this.lon),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

        }, 250);
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
