

import { Component, OnInit } from '@angular/core';
import {HaasteetService} from '../../../haasteet.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    listaElementti: string;

    constructor(public haasteet: HaasteetService) { }

    ngOnInit() {
    }

}