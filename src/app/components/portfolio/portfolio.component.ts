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
    /*const length = window.location.href.split("/").length - 1;
    if (window.location.href.split("/")[length] === "portfolio") {
      this.logged = true
    }*/

    if (this.auth.AuthUser && this.auth.AuthUser.accessToken) {
      this.logged = true;
    }
    else { console.log("FALSE"); }
  }

  setLog(value: any) {
    this.logged = value;
    this.ngOnInit();
  }
}
