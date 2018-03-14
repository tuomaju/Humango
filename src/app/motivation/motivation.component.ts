import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-motivation',
    templateUrl: './motivation.component.html',
    styleUrls: ['./motivation.component.scss']
})
export class MotivationComponent implements OnInit {


    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

    motto: string;
    tavoite: string;
    mottoE: boolean;

    ngOnInit() {
        this.mottoE = true;
        this.mottoContent();
        this.tavoiteContent();
        (<HTMLElement>document.getElementById('editMotto')).addEventListener('click', () => this.mottoEdit());
        (<HTMLElement>document.getElementById('editTavoite')).addEventListener('click', () => this.tavoiteEdit());
    }

    mottoContent() {
        if (!localStorage.getItem('motto')) {
            this.motto = '\'Se lepää.\'';
        } else {
            this.motto = localStorage.getItem('motto');
        }
    }

    tavoiteContent() {
        if (!localStorage.getItem('tavoite')) {
            this.tavoite = 'Haluan tulla paremmaksi sosiaalisissa tilanteissa:)';
        } else {
            this.tavoite = localStorage.getItem('tavoite');
        }
    }

    navigateTopContent() {
        this.router.navigate([{
            outlets: {
                topOutlet: ['topContent']
            }
        }], {
            skipLocationChange: true
        });
    }

    mottoEdit() {
        (<HTMLElement>document.getElementById('mottoEdited')).contentEditable = 'true';
        (<HTMLElement>document.getElementById('mottoEdited')).style.border = '1px solid #FFC82C';
        document.getElementById('editMotto').style.display = 'none';
        document.getElementById('editMotto2').style.display = 'block';
    }

    mottoEdit2() {
        console.log('mottosave');
        (<HTMLElement>document.getElementById('mottoEdited')).contentEditable = 'false';
        (<HTMLElement>document.getElementById('mottoEdited')).style.border = '1px solid transparent';
        let edited = document.getElementById('mottoEdited').innerHTML;
        localStorage.setItem('motto', edited);
        document.getElementById('editMotto2').style.display = 'none';
        document.getElementById('editMotto').style.display = 'block';
    }

    tavoiteEdit() {
        (<HTMLElement>document.getElementById('tavoiteEdited')).contentEditable = 'true';
        (<HTMLElement>document.getElementById('tavoiteEdited')).style.border = '1px solid #FFC82C';
        document.getElementById('editTavoite').style.display = 'none';
        document.getElementById('editTavoite2').style.display = 'block';
    }

    tavoiteEdit2() {
        console.log('tavoitesave');
        (<HTMLElement>document.getElementById('tavoiteEdited')).contentEditable = 'false';
        (<HTMLElement>document.getElementById('tavoiteEdited')).style.border = '1px solid transparent';
        let edited = document.getElementById('tavoiteEdited').innerHTML;
        localStorage.setItem('tavoite', edited);
        document.getElementById('editTavoite2').style.display = 'none';
        document.getElementById('editTavoite').style.display = 'block';
    }

    /*
        mottoEdit() {
            if (this.mottoE === true) {
                (<HTMLElement>document.getElementById('mottoEdited')).contentEditable = 'true';
                (<HTMLElement>document.getElementById('mottoEdited')).style.border = '1px solid #FFC82C';
                document.getElementById('mottoIcon').setAttribute('class', 'far fa-arrow-alt-circle-down');
                console.log(this.mottoE);
                this.mottoE = false;
                console.log(this.mottoE);
            } else  {
                console.log('mottosave');
                (<HTMLElement>document.getElementById('mottoEdited')).contentEditable = 'false';
                document.getElementById('mottoIcon').setAttribute('class', 'fas fa-pencil-alt');
                (<HTMLElement>document.getElementById('mottoEdited')).style.border = '1px solid transparent';
                let edited = document.getElementById('mottoEdited').innerHTML;
                localStorage.setItem('motto', edited);
                this.mottoE = true;
            }
        }

    */

    /*
        mottoEdit() {

            (<HTMLElement>document.getElementById('mottoEdited')).contentEditable = 'true';
            (<HTMLElement>document.getElementById('mottoEdited')).style.border = '1px solid #FFC82C';
            document.getElementById('mottoIcon').setAttribute('class', 'far fa-arrow-alt-circle-down');
            (<HTMLElement>document.getElementById('editMotto')).addEventListener('click', () => this.mottoSave());
        }

        mottoSave() {
            console.log('mottosave');
            (<HTMLElement>document.getElementById('mottoEdited')).contentEditable = 'false';
            document.getElementById('mottoIcon').setAttribute('class', 'fas fa-pencil-alt');
            (<HTMLElement>document.getElementById('mottoEdited')).style.border = '1px solid transparent';


            (<HTMLElement>document.getElementById('editMotto')).addEventListener('click', () => {
                let edited = document.getElementById('mottoEdited').innerHTML;
                localStorage.setItem('motto', edited);
                this.mottoEdit();
            });
        }

        tavoiteEdit() {
            (<HTMLElement>document.getElementById('tavoiteEdited')).contentEditable = 'true';
            (<HTMLElement>document.getElementById('tavoiteEdited')).style.border = '1px solid #FFC82C';
            document.getElementById('tavoiteIcon').setAttribute('class', 'far fa-arrow-alt-circle-down');
            (<HTMLElement>document.getElementById('editTavoite')).addEventListener('click', () => this.tavoiteSave());
        }

        tavoiteSave() {
            console.log('tavoitesave');
            (<HTMLElement>document.getElementById('tavoiteEdited')).contentEditable = 'false';
            document.getElementById('tavoiteIcon').setAttribute('class', 'fas fa-pencil-alt');
            (<HTMLElement>document.getElementById('tavoiteEdited')).style.border = '1px solid transparent';


            (<HTMLElement>document.getElementById('editTavoite')).addEventListener('click', () => {
                let edited = document.getElementById('tavoiteEdited').innerHTML;
                localStorage.setItem('tavoite', edited);
                this.tavoiteEdit();
            });
        }
        */
}
