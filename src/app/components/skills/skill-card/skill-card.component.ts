import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  faPencil = faPencil;
  delete = faXmark;
  @Input() skill: any;
  @Input() skills: any;
  @Input() log: any;
  @Output() deleted = new EventEmitter();
  @Output() updated = new EventEmitter();

  constructor(private portfolioServer: PortfolioService) { }

  ngOnInit(): void {
    this.showAverages();
  }
  
  refreshData(data: any) {
    this.updated.emit(data);
  }

  deleteSkill(id: any) {
    this.portfolioServer.deleteSkill(id).subscribe(data => {
      this.deleted.emit(data);
    })
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
