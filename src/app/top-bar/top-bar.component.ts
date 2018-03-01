import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

    open = true;

    constructor() {
    }


    ngOnInit() {
    }

/*
    openTop() {
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = '0';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(10px)';
        this.open = true;

    }
    */

    closeTop() {
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = 'calc(-100%)';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(0px)';
        this.open = false;
    }
/*
    slideTopBar() {
        if (this.open === true) {
            console.log(this.open);
            this.closeTop();
        } else {
            console.log(this.open);
            this.openTop();
        }

    }
    */

}
