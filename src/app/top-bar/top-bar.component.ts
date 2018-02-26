import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    constructor() {
    }


    ngOnInit() {
    }

    slideTop() {
        console.log('asd');
        console.log(document.querySelector('app-top-bar'));
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = '0';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(4px)';

    }
    closeTop () {
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = 'calc(-100% + 3em)';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(0px)';
    }

}
