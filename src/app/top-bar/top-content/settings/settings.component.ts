import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor( private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {
  }
    navigateMotivation() {
        this.router.navigate([{outlets: {topOutlet: ['motivation']}}], {skipLocationChange: true});
    }
}
