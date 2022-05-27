import { Component, OnInit, Input } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  @Input() log: any;
  practiaLogo: String = "https://argentina.practia.global/wp-content/uploads/2021/01/logo-practia-original.svg";
  faPen = faPen;
  personalData: any = [];

  constructor(private portfolioService: PortfolioService) {
   }

  ngOnInit(): void {
    this.portfolioService.getPersonalData().subscribe(data => {
      this.personalData = data;
    })
  }

  refreshData(data: any) {
    this.personalData = data;
  }
}
