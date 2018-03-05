import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-top-content',
    templateUrl: './top-content.component.html',
    styleUrls: ['./top-content.component.scss']
})
export class TopContentComponent implements OnInit {


    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    showVideo() {
        (<HTMLElement>document.querySelector('video')).style.display = 'inline-block';
    }

    navigateHistory() {
        this.router.navigate([{outlets: {historyOutlet: ['history']}}], {skipLocationChange: true, relativeTo: this.route});
    }

    navigateSettings() {
        this.router.navigate([{outlets: {historyOutlet: ['settings']}}], {skipLocationChange: true, relativeTo: this.route});
    }

    navigateMangotree() {
        this.router.navigate([{outlets: {topOutlet: ['mangotree']}}], {skipLocationChange: true});
    }
}