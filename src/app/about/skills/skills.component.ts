import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../service/skills.service';
import { Skill } from '../../models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.getSkills().subscribe(
      (data) => {
        this.skills = data["skills"];
        console.log(this.skills);
      }
    )
  }

}
