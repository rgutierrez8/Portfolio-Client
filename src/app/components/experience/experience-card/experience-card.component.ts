import { Component, OnInit, Input } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  faPen = faPencil;
  @Input() job: any;

  constructor() { }

  ngOnInit(): void {
  }

}
