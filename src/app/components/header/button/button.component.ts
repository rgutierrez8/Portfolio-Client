import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  user: User = {
    name: "Ramón",
    lastName: "Gutierrez",
    email: "ramongutierrez523@gmail.com",
    password: "123456",
    address: "Concepción - Tucumán",
    phone: "+5493865348279",
    description: "Técnico en desarrollo de software, apasionado por la programación",
    img: "imagen"
  };
   

  constructor() {
    
   }

  logged: boolean = false;
  
  ngOnInit(): void {
  }

}
