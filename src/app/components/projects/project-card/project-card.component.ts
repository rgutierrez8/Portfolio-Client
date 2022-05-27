import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  faPencil = faPencil;
  github = faGithub;
  delete = faXmark;
  @Input() project: any;
  @Input() log: any;
  @Output() deleted = new EventEmitter();

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  refreshData(data: any) {
    this.project = data;
  }

  deleteProject(id: any) {
    this.portfolioService.deleteProject(id).subscribe(data => {
      this.deleted.emit(data);
    })
  }

}
