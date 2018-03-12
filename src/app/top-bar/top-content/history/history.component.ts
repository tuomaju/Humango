import { HaasteetService } from './../../../haasteet.service';
import { CommentComponent } from './../../../comment/comment.component';
import { Component, OnInit } from '@angular/core';

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
