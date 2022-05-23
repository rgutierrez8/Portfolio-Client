import { Component, OnInit } from '@angular/core';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  faPen = faPen;
  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
