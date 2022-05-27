import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  faPen = faPencil;
  delete = faXmark;
  @Input() job: any;
  @Input() log: any;
  @Output() deleted = new EventEmitter

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  refreshData(data: any) {
    this.job = data;
  }

  deleteData(id: any) {
    this.portfolioService.deleteExperience(id).subscribe(data => {
      this.deleted.emit(data);
    });

  }
}
