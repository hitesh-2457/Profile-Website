import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SkillsService {

  constructor(private http: Http) { }

  getSkills() {
    return this.http.get('assets/data/skills.json').map((res) => { return res.json() });
  }

  getAchievements() {
    return this.http.get('assets/data/achievements.json').map((res) => { return res.json() });
  }
}
