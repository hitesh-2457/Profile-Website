import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'app/service/skills.service';
import { Achievement } from 'app/models/achievement';

@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.component.html',
  styleUrls: ['./achivements.component.css']
})
export class AchivementsComponent implements OnInit {
  achievements: Achievement[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.getAchievements().subscribe(
      (data) => {
        this.achievements = data["achievements"];
      }
    )
  }

}
