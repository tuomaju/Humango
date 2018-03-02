import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mangotree',
  templateUrl: './mangotree.component.html',
  styleUrls: ['./mangotree.component.scss']
})
export class MangotreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     this.playVideo();
  }

  playVideo () {
      (<HTMLElement>document.querySelector('video')).style.display = 'inline-block';
      //document.querySelector('video').play;
  }

}
