import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  schoolYear: string;
  puYear: string;
  engYear: string;
  msYear: string;
  shoretelYear: string;

  //the month index starts from 0:Jan so (actual month-1)
  schoolVal = new Date(2009, 3 - 1);
  puVal = new Date(2011, 3 - 1);
  engVal = new Date(2015, 6 - 1);
  msVal = new Date(2019, 6 - 1);
  shoretelVal = new Date(2017, 7 - 1);

  constructor() { }

  ngOnInit() {

    this.schoolYear = this.dateDiff(this.schoolVal);
    this.puYear = this.dateDiff(this.puVal);
    this.engYear = this.dateDiff(this.engVal);
    this.msYear = this.dateDiff(this.msVal);
    this.shoretelYear = this.dateDiff(this.shoretelVal, true);

  }

  public dateDiff(date: Date, work: boolean = false) {
    var str = "  ";
    var yy = date.getFullYear();
    var mm = date.getMonth();

    var strPostfix = work ? "" : " years ago. (" + yy + ")";

    if (new Date().getUTCFullYear() - yy > 0) {
      strPostfix = " years ago. (" + (mm + 1) + "/" + yy + ")";
      str += new Date().getUTCFullYear() - yy + strPostfix;
    }
    else if (new Date().getUTCFullYear() - yy == 0) {
      strPostfix = " months ago. (" + (mm + 1) + "/" + yy + ")";
      str += new Date().getMonth() - mm + strPostfix;
    }
    else {
      str += work ? "Currently Working." : "Yet to complete. (" + yy + ")";
    }

    return str;
  }
}
