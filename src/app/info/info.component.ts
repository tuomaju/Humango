import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

    constructor(private http: HttpClient,
                private router: Router,
                private route: ActivatedRoute) {
    }

    tulos = '';
    id = '';

    ngOnInit() {
        this.id = localStorage.getItem('haasteId');
        this.getInfo();
        // console.log(this.id);
    }

    getInfo() {

        interface Myinterface {
            haaste: any;
        }

        this.http.get<Myinterface>('assets/data.json').subscribe(data => {
            // console.log(data);
            this.tulos = data.haaste[this.id].i;
        });
    }
    navigateModal() {
       if (localStorage.getItem('accepted') ) {
           this.router.navigate([{outlets: {modalOutlet: ['acceptedChallenge']}}], {skipLocationChange: true});
       } else {
           this.router.navigate([{outlets: {modalOutlet: ['newChallenge']}}], {skipLocationChange: true});
       }
    }
}
