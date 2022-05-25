import { Component, OnInit, Input } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {

  faPen = faPen;
  @Input() ed: any;

  constructor() { }

  ngOnInit(): void {
  }

}
