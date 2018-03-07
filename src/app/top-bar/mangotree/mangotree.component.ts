import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PointsService} from '../../points.service';

@Component({
    selector: 'app-mangotree',
    templateUrl: './mangotree.component.html',
    styleUrls: ['./mangotree.component.scss']
})
export class MangotreeComponent implements OnInit {

    constructor(private router: Router,
                private route: ActivatedRoute,
                private pointsService: PointsService) {
    }

    currentPoints: any;
    targetPoints: any;

    ngOnInit() {
        this.pointsService.previousPoints();
        this.getPoints();
        this.pointsBar();
        this.growButton();

        this.playVideo();
        document.querySelector('video').addEventListener('onended', () => {
            this.video2();
        });

    }

    pointsBar() {
        document.getElementById('progressBar').style.width = this.currentPoints / this.targetPoints * 100 + '%';
        console.log(document.getElementById('progressBar').style.width = this.currentPoints / this.targetPoints * 100 + '%');
    }

    getPoints() {
        this.currentPoints = this.pointsService.getPoints();
        this.targetPoints = 10;

    }

    growButton() {
        console.log(this.currentPoints);
        if (this.currentPoints === this.targetPoints || this.currentPoints > this.targetPoints) {
            console.log(this.currentPoints);
            document.getElementById('progressBox').style.backgroundColor = '#FFC82C';
            document.getElementById('kasva').style.display = 'block';
            document.getElementById('progressNumbers').style.display = 'none';
            // this.currentPoints = this.currentPoints - this.targetPoints;
            // localStorage.setItem('points', this.currentPoints);
        }
    }

    playVideo() {
        (<HTMLElement>document.querySelector('video')).style.display = 'inline-block';
        // document.querySelector('video').play;
    }

    video2() {
        document.querySelector('video').src = './assets/img/mangopuu2tausta.mp4';
        document.querySelector('video').loop = true;
    }


    grow() {
        if (this.currentPoints === this.targetPoints || this.currentPoints > this.targetPoints) {
            console.log(this.currentPoints);
            document.querySelector('video').src = './assets/img/mangopuu1tausta.mp4';
            document.querySelector('video').loop = false;
            setTimeout(() => {
                this.video2();
            }, 4000);
            this.currentPoints = this.currentPoints - this.targetPoints;
            localStorage.setItem('points', this.currentPoints);
            console.log(this.currentPoints);
        }
    }




    navigateTopContent() {
        this.router.navigate([{outlets: {topOutlet: ['topContent']}}], {skipLocationChange: true});
    }
}
