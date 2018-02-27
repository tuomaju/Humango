import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.scss']
})
export class TopContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    slideTop() {
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = '0';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(10px)';
    }
    closeTop () {
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = 'calc(-100% + 3em)';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(0px)';
    }
}
