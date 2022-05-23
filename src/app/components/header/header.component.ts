import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoAP = "../../../assets/images/APLog.png";
  myBanner = "../../assets/images/rg.png";

  constructor() { }

  ngOnInit(): void {
  }

}
