import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-challenge',
  templateUrl: './new-challenge.component.html',
  styleUrls: ['./new-challenge.component.scss']
})
export class NewChallengeComponent implements OnInit {



    tulos = '';
    randomi: any;

    constructor(private http: HttpClient,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.otaHaaste();
    }

    otaHaaste() {
        this.randomi = Math.floor((Math.random() * 9) + 1);

        interface Myinterface {
            haaste: any;
        }

        this.http.get<Myinterface>('assets/data.json').subscribe(data => {
            console.log(data);
            this.tulos = data.haaste[this.randomi];
        });
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
