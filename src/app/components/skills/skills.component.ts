import { Component, OnInit, Input } from '@angular/core';
import { faChrome } from '@fortawesome/free-brands-svg-icons';
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  @Input() log: any;
  faPlus = faPlus;
  faPencil = faPencil;
  skills: any = [];

  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getSkills().subscribe(data => {
      this.skills = data;
    })
  }

  refreshData(data: any) {
    this.skills = data;
  }
}
