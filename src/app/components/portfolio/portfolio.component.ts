import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  logged = false;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    if (this.auth.AuthUser && this.auth.AuthUser.accessToken) {
      this.logged = true;
    }
  }

  setLog(value: any) {
    this.logged = value;
    this.ngOnInit();
  }
}
