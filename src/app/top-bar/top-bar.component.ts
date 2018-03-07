import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {


    constructor(private router: Router,
                private route: ActivatedRoute) {
    }


    ngOnInit() {

    }

    closeTop() {
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = 'calc(-100%)';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(0px)';
        setTimeout(() => {
            this.router.navigate(['../']);
        }, 500);

    }


}
