import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';
import { Repo } from '../models/github/repo';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  repos: Repo[] = [];
  loading: boolean;
  successLoading: boolean;

  constructor(private gitHubService: GithubService) { }

  ngOnInit() {
    this.loading = true;
    this.successLoading = false;
    this.repos = [];
    this.gitHubService.listAllRepos().subscribe(
      (data) => {
        for (let ele of data) {
          this.repos.push(new Repo(ele));
        }
        this.successLoading = true;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

}
