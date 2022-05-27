import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit {

  @Output() updated = new EventEmitter();
  @ViewChild('updateEducationModal', { static: false }) modalEducationContent: any;
  form: FormGroup;

  constructor(private portfolioService: PortfolioService, public modal: NgbModal, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      id: [''],
      institution: ['', [Validators.required]],
      dateEnd: [''],
      description: [''],
      urlImg: ['']
    });
  }

  ngOnInit(): void {
  }

  showModal(education: any) {
    this.form = this.formBuilder.group({
      id: [education.id],
      institution: [education.institution, [Validators.required]],
      dateEnd: [education.dateEnd],
      description: [education.description],
      urlImg: [education.urlImg]
    });

    this.modal.open(this.modalEducationContent, { size: 'md', centered: true });
  }

  onSubmit(event: Event) {
    event.preventDefault;
    this.portfolioService.updateEducation(this.form.value).subscribe(data => {
      this.updated.emit(data);
    });

    this.modal.dismissAll(this.modalEducationContent);
  }

  get Id() {
    return this.form.get('id');
  }
  get Institution() {
    return this.form.get('institution');
  }
  get dateEnd() {
    return this.form.get('dateEnd');
  }
  get Description() {
    return this.form.get('description');
  }
  get urlImg() {
    return this.form.get('urlImg');
  }
}
