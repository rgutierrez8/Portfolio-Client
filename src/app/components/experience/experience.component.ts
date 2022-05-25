import { Component, OnInit } from '@angular/core';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  faPen = faPen;
  faPlus = faPlus;
  experience: any;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getExperience().subscribe(data => {
      this.experience = data;
    })
  }

}
