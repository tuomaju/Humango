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
    haasteetData = this.haasteet.haasteetObj;





    constructor(public haasteet: HaasteetService, private http: HttpClient) {
    }


    ngOnInit() {

        this.getHaasteet();
        this.getComments();
        this.nextElement();
    }

    getComments() {
        interface Myinterface {
            haaste: any;
        }

        this.http.get<Myinterface>('assets/palaute.json').subscribe(data => {
            // console.log(data);
            this.kommentit = data;
            console.log(this.kommentit);



        });
    }

    getHaasteet() {
        interface Myinterface {
            haaste: any;
        }

        this.http.get<Myinterface>('assets/data.json').subscribe(data => {

            this.haasteet.haasteetObj = data.haaste;

            // console.log(this.haasteetData);
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
            const list = Array.from(document.querySelectorAll('li .haasteTopContainer'));
            for (const haaste of list) {
                // console.log(haaste);
                haaste.addEventListener('click', (e) => {
                    // console.log(haaste.nextSibling.normalize());
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
