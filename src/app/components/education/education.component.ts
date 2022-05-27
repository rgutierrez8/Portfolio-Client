import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Input() log: any;
  faPlus = faPlus;
  education: any;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getEducation().subscribe(data => {
      this.education = data;
    })
  }

  getData(data: any) {
    this.education = data;
  }

  refreshData(data: any) {
    this.education = data;
  }
}
