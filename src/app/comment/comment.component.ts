import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';


@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, ) { }

    palauteOnnistui = 'Hyvää Työtä!';
    isAdded = false;
    palauteObj: object = {};

    tallennaPalaute(palaute) {
        this.palauteObj = {
            'palaute': palaute.name
        };
       this.http.get('http://users.metropolia.fi/~raouff/testi/palaute.php?json=' +
        JSON.stringify(this.palauteObj)).subscribe((res: Response) => {
           this.isAdded = true;
           console.log(this.palauteObj);
           console.log(res);
        });
    }

    ngOnInit() {
        localStorage.removeItem('accepted');
        localStorage.removeItem('haasteId');

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
    navigateModal() {
        this.router.navigate([{outlets: {modalOutlet: ['newChallenge']}}], {skipLocationChange: true});

    }
}
