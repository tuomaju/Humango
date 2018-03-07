import {Injectable} from '@angular/core';


@Injectable()
export class PointsService {

    constructor() {
    }

    points = 0;

    previousPoints () {
        this.points = Number(localStorage.getItem('points'));
        console.log('prev points' + this.points);
    }

    addPoints(amount: number) {
        this.points = this.points + amount;
        console.log(this.points);
        localStorage.setItem('points', this.points.toString());
    }

    getPoints () {
        return this.points;
    }
}
