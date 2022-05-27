import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() log: any;
  @Output() logout = new EventEmitter();

  constructor(private route: Router, private auth: AuthService) {
    
   }

  logged: boolean = false;
  
  ngOnInit(): void {
  }

  goLogin() {
    this.route.navigate(["/login"]);
  }

  goLogout() {
    sessionStorage.clear();
    this.auth.logout();
    this.route.navigate(["/"])
    this.logout.emit(false);
  }
}
