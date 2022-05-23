import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  banner: String = "https://idimad360.com/wp-content/uploads/2021/08/Inteligencia-Artificial-Programadores-del-futuro-Idimad-360.jpg";
  practiaLogo: String = "https://argentina.practia.global/wp-content/uploads/2021/01/logo-practia-original.svg";
  faPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

}
