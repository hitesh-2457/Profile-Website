import { Owner } from './owner';

export class Repo {
  public id: number;
  public name: string;

  public owner: Owner;

  public html_url: string;
  public description: string;
  // API Url : for further use if needed...
  public url: string;

  public created_at: Date;
  public updated_at: Date;
  public pushed_at: Date;
  public language: string;

  constructor(data:any){
    this.id = data["id"];
    this.name = data["name"];
    this.owner = new Owner(data["owner"]);
    this.html_url = data["html_url"];
    this.description = data["description"];
    this.url = data["url"];
    this.created_at = data["created_at"];
    this.updated_at = data["updated_at"];
    this.pushed_at = data["pushed_at"];
    this.language = data["language"];
  }
}
