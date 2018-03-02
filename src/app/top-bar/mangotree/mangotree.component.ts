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
      document.querySelector('video').addEventListener('onended', () => {
          this.video2();
      });
  }

  playVideo() {
      (<HTMLElement>document.querySelector('video')).style.display = 'inline-block';
      //document.querySelector('video').play;
  }

  grow() {
      document.querySelector('video').src = '../../../assets/img/mangopuu1tausta.mp4';
      document.querySelector('video').loop = false;
      setTimeout(() => {
          this.video2();
      }, 4000);
  }


    video2 () {
        document.querySelector('video').src = '../../../assets/img/mangopuu2tausta.mp4';
        document.querySelector('video').loop = true;
    }
}
