import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoAP = "../../../assets/images/APLog.png";
  myBanner = "../../assets/images/rg.png";
  @Input() log: any;
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setLog(value: any){
    this.log = value;
    this.logout.emit(this.log);
  }

}
