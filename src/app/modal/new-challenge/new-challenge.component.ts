import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {MapService} from '../../map.service';
import {logging} from 'selenium-webdriver';
import getLevel = logging.getLevel;
import {HaasteetService} from '../../haasteet.service';

@Component({
    selector: 'app-new-challenge',
    templateUrl: './new-challenge.component.html',
    styleUrls: ['./new-challenge.component.scss']
})
export class NewChallengeComponent implements OnInit {


    haasteId: any;
    tulos = '';
    randomi: any;
    level: number;
    challengeNumber = 0;

    constructor(private http: HttpClient,
                private router: Router,
                private route: ActivatedRoute,
                private mapService: MapService,
                private haasteet: HaasteetService) {
    }

    ngOnInit() {
        this.haasteId = localStorage.getItem('haasteId');
        if (!this.haasteId) {
            this.newChallenge();
            console.log('get');
        } else {
            this.getChallenge();
            console.log('new');
        }

    }

    getChallenge() {
        interface Myinterface {
            haaste: any;
        }

        this.http.get<Myinterface>('assets/data.json').subscribe(data => {
            console.log(data);
            this.tulos = data.haaste[this.haasteId].h;
            // this.haasteId = data.haaste[this.randomi].id;
            //  localStorage.setItem('infoId', this.haasteId);
        });
    }

    getLevel(number) {
        if (localStorage.getItem('growth') === '1') {
            this.level = 1;
        } else if (localStorage.getItem('growth') === '2') {
            this.level = 2;
        } else if (localStorage.getItem('growth') === '3') {
            this.level = 3;
        } else {
            this.level = 4;
        }
        while (this.level !== number) {
            this.challengeNumber = Math.floor((Math.random() * 9) + 1);
        }
        // return this.challengeNumber;
    }

    newChallenge() {

        this.randomi = Math.floor((Math.random() * 9) + 1);

        interface Myinterface {
            haaste: any;
        }

        this.http.get<Myinterface>('assets/data.json').subscribe(data => {
            for (this.randomi = Math.floor((Math.random() * 9) + 1); data.haaste[this.randomi].aste !== Number(localStorage.getItem('growth')); this.randomi = Math.floor((Math.random() * 9) + 1)) {
                if (data.haaste[this.randomi].aste === localStorage.getItem('growth')) {
                    break;
                }
            }
            console.log(data);
            console.log(data.haaste[this.randomi].aste);
            this.tulos = data.haaste[this.randomi].h;
            this.haasteId = data.haaste[this.randomi].id;
            const place = data.haaste[this.randomi].place;
            this.haasteet.haasteetObj = data.haaste;
            localStorage.setItem('haasteId', this.haasteId);
            if (place !== '') {
                localStorage.setItem('placeType', place);
            }

        });
    }

    acceptChallenge() {
        localStorage.setItem('accepted', 'accepted');
        this.closeModal();
        this.navigateAccepted();
        if (localStorage.getItem('placeType') !== '') {
            this.mapService.refresh(15, 2000);
        }
    }

    navigateInfo() {
        this.router.navigate([{outlets: {modalOutlet: ['info']}}], {skipLocationChange: true});
    }

    navigateAccepted() {
        setTimeout(() => {
            this.router.navigate([{outlets: {modalOutlet: ['acceptedChallenge']}}], {skipLocationChange: true});
        }, 500);

    }


    closeModal() {
        (<HTMLElement>document.querySelector('app-logo-box')).style.filter = 'blur(0px)';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(0px)';
        (<HTMLElement>document.querySelector('#modal')).style.opacity = '0';
        (<HTMLElement>document.querySelector('app-modal')).style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
        setTimeout(() => {
            (<HTMLElement>document.querySelector('app-modal')).style.top = '-100%';
        }, 500);

    }

}
