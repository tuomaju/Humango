import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logo-box',
  templateUrl: './logo-box.component.html',
  styleUrls: ['./logo-box.component.scss']
})
export class LogoBoxComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
    openTop() {
        (<HTMLElement>document.querySelector('app-top-bar')).style.top = '0';
        (<HTMLElement>document.querySelector('app-main')).style.filter = 'blur(10px)';
        this.router.navigate([{ outlets: { topOutlet: ['topContent'] } }], { skipLocationChange: true });

    }

}
