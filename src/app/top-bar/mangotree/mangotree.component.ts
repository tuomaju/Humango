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
    videosrc: any;

    ngOnInit() {
        this.pointsService.previousPoints();
        this.getPoints('yes');
        this.pointsBar();
        this.growButton();
        this.whatVideo();
        this.playVideo();

        document.querySelector('video').addEventListener('onended', () => {
            this.video2();
        });
    }

    whatVideo() {
        if (localStorage.getItem('growth') === '2') {
            this.videosrc = './assets/img/puupaikallaan2_2.mp4';
        } else if (localStorage.getItem('growth') === '3') {
            this.videosrc = './assets/img/puupaikallaan3_1.mp4';
        } else if (localStorage.getItem('growth') === '4') {
            this.videosrc = './assets/img/puupaikallaan4_1.mp4';
        } else {
            this.videosrc = './assets/img/puupaikallaan1_4.mp4';
        }
    }

    pointsBar() {
        document.getElementById('progressBar').style.width = this.currentPoints / this.targetPoints * 85 + '%';
        console.log(document.getElementById('progressBar').style.width = this.currentPoints / this.targetPoints * 85 + '%');
    }

    getPoints(service) {
        if (service === 'yes') {
            this.currentPoints = this.pointsService.getPoints();
        }
        if (localStorage.getItem('growth') === '2') {
            this.targetPoints = 20;
        } else if (localStorage.getItem('growth') === '3') {
            this.targetPoints = 30;
        } else if (localStorage.getItem('growth') === '4') {
            this.targetPoints = 40;
        } else {
            this.targetPoints = 10;
        }
    }

    growButton() {
        console.log(this.currentPoints);
        if (this.currentPoints === this.targetPoints || this.currentPoints > this.targetPoints) {
            console.log(this.currentPoints);
            document.getElementById('progressBox').style.backgroundColor = '#FFC82C';
            document.getElementById('kasva').style.display = 'block';
            document.getElementById('progressNumbers').style.display = 'none';
            document.getElementById('progressBar').style.display = 'none';
            // this.currentPoints = this.currentPoints - this.targetPoints;
            // localStorage.setItem('points', this.currentPoints);
        }

    }

    playVideo() {
        (<HTMLElement>document.querySelector('video')).style.display = 'inline-block';
        // document.querySelector('video').play;
    }


    video2() {
        if (localStorage.getItem('growth') === '2') {
            document.querySelector('video').src = './assets/img/puupaikallaan2_2.mp4';
        } else if (localStorage.getItem('growth') === '3') {
            document.querySelector('video').src = './assets/img/puupaikallaan3_1.mp4';
        } else if (localStorage.getItem('growth') === '4') {
            document.querySelector('video').src = './assets/img/puupaikallaan4_1.mp4';
        }
        document.querySelector('video').loop = true;
    }


    grow() {
        if (this.currentPoints === this.targetPoints || this.currentPoints > this.targetPoints) {
            console.log(this.currentPoints);
            if (localStorage.getItem('growth') === '2') {
                document.querySelector('video').src = './assets/img/puukasvaa2.mp4';
            } else if (localStorage.getItem('growth') === '3') {
                document.querySelector('video').src = './assets/img/puukasvaa3.mp4';
            } else if (localStorage.getItem('growth') === '4') {
                document.querySelector('video').src = './assets/img/puupaikallaan4_1.mp4';
            } else {
                document.querySelector('video').src = './assets/img/puukasvaa1.mp4';
            }
            document.querySelector('video').loop = false;
            setTimeout(() => {
                this.video2();
            }, 4000);
            this.currentPoints = this.currentPoints - this.targetPoints;
            localStorage.setItem('points', this.currentPoints);
            console.log(this.currentPoints);
            if (localStorage.getItem('growth') === '2') {
                localStorage.setItem('growth', '3');
            } else if (localStorage.getItem('growth') === '3') {
                localStorage.setItem('growth', '4');
            } else if (localStorage.getItem('growth') === '4') {
                localStorage.setItem('growth', '4');
            } else {
                localStorage.setItem('growth', '2');
            }
            document.getElementById('progressBox').style.backgroundColor = '#E7E5DF';
            document.getElementById('kasva').style.display = 'none';
            document.getElementById('progressNumbers').style.display = 'flex';
            document.getElementById('progressBar').style.display = 'block';
            //  this.targetPoints = 20;
            this.getPoints('no');
            this.pointsBar();
            this.growButton();
        }
    }


    navigateTopContent() {
        //   (<HTMLElement>document.querySelector('app-top-bar')).style.backgroundColor = '#54C27B';
        this.router.navigate([{outlets: {topOutlet: ['topContent']}}], {skipLocationChange: true});
    }
}