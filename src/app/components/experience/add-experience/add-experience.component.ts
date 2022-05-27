import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  @ViewChild('addExperienceModal', { static: false }) modalExperienceContent: any;
  @Output() addDataExperience = new EventEmitter();
  form: FormGroup;

  constructor(private portfolioService: PortfolioService, public modal: NgbModal, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      company: ['', [Validators.required]],
      description: [''],
      dateStart: [''],
      dateEnd: [''],
      urlImg: ['']
    });
   }

  ngOnInit(): void {
  }

  showModal() {
    this.form = this.formBuilder.group({
      company: ['', [Validators.required]],
      description: [''],
      dateStart: [''],
      dateEnd: [''],
      urlImg: ['']
    });
    this.modal.open(this.modalExperienceContent, { size: 'md', centered: true });
  }

  onSubmit(event: Event) {
    event.preventDefault;
    this.portfolioService.addExperience(this.form.value).subscribe(data => {
      this.addDataExperience.emit(data);
    });

    this.modal.dismissAll(this.modalExperienceContent);
  }

  // GETTERS
  get Id() {
    return this.form.get('id');
  }

  get Company() {
    return this.form.get('company');
  }

  get Description() {
    return this.form.get('description');
  }

  get dateStart() {
    return this.form.get('dateStart');
  }

  get dateEnd() {
    return this.form.get('dateEnd');
  }

  get urlImg() {
    return this.form.get('urlImg');
  }
}
