import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {HaasteetService} from '../../../haasteet.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    listaElementti: string;
    historyClicked = false;

    constructor(public haasteet: HaasteetService) {
    }


    ngOnInit() {

        this.nextElement();


    }


    nextElement() {
        function next(elem) {
            do {
                elem = elem.nextSibling;
            } while (elem && elem.nodeType !== 1);
            return elem;
        }

        const list = Array.from(document.getElementsByClassName('haasteNimi'));

        for (const haaste of list) {
            console.log(haaste);

            haaste.addEventListener('click', (e) => {
                console.log(haaste.nextSibling.normalize());
                const nextElem = next(haaste);

                if (nextElem) {
                    if (nextElem.style.display !== 'flex') {
                        nextElem.style.display = 'flex';
                    } else {
                        nextElem.style.display = 'none';
                    }

                }


            });

        }

    }

}
