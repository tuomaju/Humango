
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Http, Response, Headers} from '@angular/http';
import {HaasteetService} from '../haasteet.service';



@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, public haasteet: HaasteetService ) {
    }

    palauteOnnistui = 'Hyvää Työtä!';
    isAdded = false;
    palauteObj: object;
    placeholder: string;
    aika = new Date().toLocaleDateString();

    ngOnInit() {
        localStorage.removeItem('accepted');

        localStorage.setItem('done', 'done');
        this.changePlaceholder();
    }

    tallennaPalaute(palaute) {
        this.palauteObj = {
            'palaute': palaute.name,
            'haasteId': localStorage.getItem('haasteId'),
            'suoritettu': this.aika
        };

        this.haasteet.palauteObj.push(this.palauteObj);
        /* this.http.get('./palaute.php?json=' +
            JSON.stringify(this.palauteObj)).subscribe((res: Response) => {
            this.isAdded = true;
            console.log(this.palauteObj);
            console.log(res);
            this.haasteet.palauteObj.push(this.palauteObj);
        });
        */
        localStorage.removeItem('done');
        localStorage.removeItem('haasteId');
        this.closeModal();
    }

    changePlaceholder() {
        const number =  Math.floor((Math.random() * 7) + 1);
        switch (number) {
            case 1:
                this.placeholder = 'Miltä haasteen suorittaminen sinusta tuntui?';
                break;
            case 2:
                this.placeholder = 'Oliko haaste vaikea?';
                break;
            case 3:
                this.placeholder = 'Opitko jotain itsestäsi tai toisista ihmisistä?';
                break;
            case 4:
                this.placeholder = 'Etsisitkö haasteeseen liittyvää tietoa?';
                break;
            case 5:
                this.placeholder = 'Tekisitkö tämän uudestaan?';
                break;
            case 6:
                this.placeholder = 'Mikä oli helppoa ja mikä vaikeaa?';
                break;
            case 7:
                this.placeholder = 'Kadutko haasteen suorittamista? Entä katuisitko, jos et olisi suorittanut?';
                break;
        }
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