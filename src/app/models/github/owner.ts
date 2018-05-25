export class Owner {
  login: string;
  id: number;
  // API Url : for further use if needed...
  url: string;
  html_url: string;

  constructor(data:any){
    this.login = data["login"];
    this.id = data["id"];
    this.url = data["url"];
    this.html_url = data["html_url"];
  }
}
