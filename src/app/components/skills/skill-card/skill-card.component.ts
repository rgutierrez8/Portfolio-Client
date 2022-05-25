import { Component, OnInit, Input } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  faPencil = faPencil;
  @Input() skill: any;
  @Input() skills: any;

  constructor() { }

  ngOnInit(): void {
    this.showAverages();
  }
  
  showAverages() {
    const fills = Array.from(document.getElementsByClassName("fill f"));
    const fulls = Array.from(document.getElementsByClassName("mask full"));
    let averages = [];
    let i = 0;
    for (let skill of this.skills) {
      averages.push((skill.average * 180) / 100);
    }
    for (var fill of fills) {
      fill.setAttribute("style", `--var-degree:${averages[i]}deg`);
      i += 1;
    }
    i = 0;
    for (var full of fulls) {
      full.setAttribute("style", `--var-degree:${averages[i]}deg`);
      i += 1;
    }
  }
}
