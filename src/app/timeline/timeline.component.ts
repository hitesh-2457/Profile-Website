import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/service/data.service';
import { CustEvent } from 'app/models/custevent';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  experiences: CustEvent[];
  degrees: CustEvent[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getExperiences().subscribe(
      (data) => {
        this.experiences = data["experiences"];
      }
    );

    this.dataService.getDegrees().subscribe(
      (data) => {
        this.degrees = data["degrees"];
      }
    );

  }
}
