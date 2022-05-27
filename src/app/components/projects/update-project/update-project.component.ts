import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  @Input() porject: any;
  @Output() updated = new EventEmitter;
  @ViewChild('updateProjectModal', { static: false }) modalProjectContent: any;
  form: FormGroup;

  constructor(private portfolioService: PortfolioService, public modal: NgbModal, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      urlGit: [''],
      urlImg: ['']
    });
   }

  ngOnInit(): void {
  }

  showModal(project: any) {
    this.form = this.formBuilder.group({
      id: [project.id],
      name: [project.name, [Validators.required]],
      description: [project.description, [Validators.required]],
      urlGit: [project.urlGit],
      urlImg: [project.urlImg]
    });

    this.modal.open(this.modalProjectContent, { size: 'md', centered: true });
  }

  onSubmit(event: Event) {
    event.preventDefault;
    this.portfolioService.updateProject(this.form.value).subscribe(data => {
      this.updated.emit(data);
    })

    this.modal.dismissAll(this.modalProjectContent);
  }

    //GETTERS
  get Id() {
    return this.form.get('id');
  }
  get Name() {
    return this.form.get('name');
  }
  get Description() {
    return this.form.get('description');
  }
  get urlGit() {
    return this.form.get('urlGit');
  }
  get urlImg() {
    return this.form.get('urlImg');
  }
}
