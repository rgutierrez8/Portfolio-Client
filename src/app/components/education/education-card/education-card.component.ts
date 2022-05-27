import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faPen, faXmark } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {

  faPen = faPen;
  delete = faXmark;
  @Input() ed: any;
  @Input() log: any;
  @Output() deleted = new EventEmitter();

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }

  refreshData(data: any){
    this.ed = data;
  }

  deleteEducation(id: any) {
    this.portfolioService.deleteEducation(id).subscribe(data => {
      this.deleted.emit(data);
    });
  }

}
