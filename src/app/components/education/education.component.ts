import { Component, OnInit } from '@angular/core';
import { faPlus, faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  faPlus = faPlus;
  faPen = faPen;

  constructor() { }

  ngOnInit(): void {
  }

}
