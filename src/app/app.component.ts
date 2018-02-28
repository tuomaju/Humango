import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    open: Boolean;

    openTop() {
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = '0';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(10px)';
        this.open = true;

    }

    closeTop() {
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = 'calc(-100%)';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(0px)';
        this.open = false;
    }

    slideTopBar() {
        if (this.open === true) {
            console.log(this.open);
            this.closeTop();
        } else {
            console.log(this.open);
            this.openTop();
        }

    }
}
