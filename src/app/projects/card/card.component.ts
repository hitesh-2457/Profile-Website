import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../models/github/repo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  project: Repo;

  constructor() { }

  ngOnInit() {
  }

}
