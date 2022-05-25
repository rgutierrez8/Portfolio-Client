import { Component, OnInit, Input } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  faPencil = faPencil;
  github = faGithub;
  @Input() project: any;

  constructor() { }

  ngOnInit(): void {
  }

}
