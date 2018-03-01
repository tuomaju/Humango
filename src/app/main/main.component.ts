import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    openModal() {
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(10px)';
        (<HTMLElement>document.querySelector('app-logo-box')).style.filter = 'blur(10px)';
        (<HTMLElement>document.querySelector('app-modal')).style.top = '0';
        (<HTMLElement>document.querySelector('app-modal')).style.backgroundColor = 'rgba(0, 0, 0, 0.20)';
        (<HTMLElement>document.querySelector('#modal')).style.opacity = '1';
    }

}
