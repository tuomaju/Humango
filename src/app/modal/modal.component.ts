import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    tulos = '';
    randomi: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
       // this.otaHaaste();
    }
/*
    otaHaaste() {
        this.randomi = Math.floor((Math.random() * 9) + 1);

        interface Myinterface {
            haaste: any;
        }

        this.http.get<Myinterface>('assets/data.json').subscribe(data => {
            console.log(data);
            this.tulos = data.haaste[this.randomi].h;
        });
    }
*/
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
