import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../models/github/repo';
import { GithubService } from 'app/service/github.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  project: Repo;

  constructor(private gitHubService: GithubService) { }

  ngOnInit() {
    this.gitHubService.listAllLang(this.project.languages_url).subscribe(
      (data)=>{
        for(let lang in data)
          this.project.languages.push(lang);
      }
    );
  }

}
