import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-accepted-challenge',
    templateUrl: './accepted-challenge.component.html',
    styleUrls: ['./accepted-challenge.component.scss']
})
export class AcceptedChallengeComponent implements OnInit {

    constructor(private http: HttpClient,
                private router: Router,
                private route: ActivatedRoute) {
    }

    tulos: '';
    id: any;

    ngOnInit() {
        this.id = localStorage.getItem('haasteId');
        this.getChallenge();
    }


    getChallenge() {
        interface Myinterface {
            haaste: any;
        }

        this.http.get<Myinterface>('assets/data.json').subscribe(data => {
            console.log(data);
            this.tulos = data.haaste[this.id].h;
            // this.haasteId = data.haaste[this.randomi].id;
            //  localStorage.setItem('infoId', this.haasteId);
        });
    }

    navigateModal() {
        this.router.navigate([{outlets: {modalOutlet: ['newChallenge']}}], {skipLocationChange: true});

    }

    navigateComment() {
        this.router.navigate([{outlets: {modalOutlet: ['comment']}}], {skipLocationChange: true});
    }

    navigateInfo() {
        this.router.navigate([{outlets: {modalOutlet: ['info']}}], {skipLocationChange: true});
    }

    closeModal() {
        (<HTMLElement>document.querySelector('app-logo-box nav')).style.filter = 'blur(0px)';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(0px)';
        (<HTMLElement>document.querySelector('#modal')).style.opacity = '0';
        (<HTMLElement>document.querySelector('app-modal')).style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
        setTimeout(() => {
            (<HTMLElement>document.querySelector('app-modal')).style.top = '-100%';
        }, 500);

    }
}
