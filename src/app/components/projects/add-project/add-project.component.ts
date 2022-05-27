import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  @Output() added = new EventEmitter();
  @ViewChild('addProjectModal', { static: false }) modalProjectContent: any;
  form: FormGroup;

  constructor(private portfolioService: PortfolioService, public modal: NgbModal, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      urlGit: [''],
      urlImg: ['']
    });
  }

  ngOnInit(): void {
  }

  showModal() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      urlGit: [''],
      urlImg: ['']
    });

    this.modal.open(this.modalProjectContent, { size: 'md', centered: true });
  }

  onSubmit(event: Event) {
    this.portfolioService.addProject(this.form.value).subscribe(data => {
      this.added.emit(data);
    })
    
    this.modal.dismissAll(this.modalProjectContent);
  }

  //GETTERS
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
