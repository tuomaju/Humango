import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

    openModal() {
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(10px)';
        (<HTMLElement>document.querySelector('app-logo-box ')).style.filter = 'blur(10px)';
        (<HTMLElement>document.querySelector('app-modal')).style.top = '0';
        (<HTMLElement>document.querySelector('app-modal')).style.backgroundColor = 'rgba(0, 0, 0, 0.20)';
        (<HTMLElement>document.querySelector('#modal')).style.opacity = '1';


        if (localStorage.getItem('accepted') ) {
            this.router.navigate([{outlets: {modalOutlet: ['acceptedChallenge']}}], {skipLocationChange: true, relativeTo: this.route});
        } else {
            this.router.navigate([{outlets: {modalOutlet: ['newChallenge']}}], {skipLocationChange: true, relativeTo: this.route});
        }
    }

}
