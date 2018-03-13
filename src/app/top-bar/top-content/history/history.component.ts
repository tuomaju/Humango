import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {HaasteetService} from '../../../haasteet.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

    listaElementti: string;
    historyClicked = false;
kommentit: any;

    constructor(public haasteet: HaasteetService, private http: HttpClient) {
    }


    ngOnInit() {
this.getComments();
        this.nextElement();


    }

    getComments() {
        interface Myinterface {
            haaste: any;
        }
        this.http.get<Myinterface>('assets/palaute.json').subscribe(data => {
           /* for (i = 0; i < data.length; i++ ) {
                data[i].palaute;
            }
            */
           this.kommentit = data;
        });
    }


    nextElement() {
        function next(elem) {
            do {
                elem = elem.nextSibling;
            } while (elem && elem.nodeType !== 1);
            return elem;
        }

        setTimeout(() => {
            const list = Array.from(document.querySelectorAll('li .haasteNimi'));
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
        }, 500);
    }
}
