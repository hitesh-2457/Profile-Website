import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private username: string = 'hitesh-2457';
  private baseUrl: string = 'https://api.github.com/';

  constructor(private http: Http) { }

  listAllRepos(){
    let url = this.baseUrl + "users/"+this.username+"/repos";
    return this.http.get(url).map((res: Response)=>(res.json()));
  }
}
