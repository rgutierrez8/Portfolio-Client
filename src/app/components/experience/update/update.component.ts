import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @ViewChild('updateModalExperience', { static: false }) modalExperienceContent: any;
  @Output() updateDataExperience = new EventEmitter();
  form: FormGroup;

  constructor(private portfolioService: PortfolioService, public modal: NgbModal, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [''],
      company: ['', [Validators.required]],
      description: [''],
      dateStart: [''],
      dateEnd: [''],
      urlImg: ['']
    });
   }

  ngOnInit(): void { }

  showModal(job: any) {
    this.form = this.formBuilder.group({
      id: [job.id],
      company: [job.company, [Validators.required]],
      description: [job.description],
      dateStart: [job.dateStart],
      dateEnd: [job.dateEnd],
      urlImg: [job.urlImg]
    });
    this.modal.open(this.modalExperienceContent, { size: 'md', centered: true });
  }

  onSubmit(event: Event) {
    event.preventDefault;
    this.portfolioService.updateDataExperience(this.form.value).subscribe(data => {
      this.updateDataExperience.emit(data);
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
