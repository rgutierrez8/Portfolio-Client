import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  @Output() addNewEducation = new EventEmitter();
  @ViewChild('addEducationModal', { static: false }) modalEducationContent: any;
  form: FormGroup;

  constructor(private portfolioService: PortfolioService, public modal: NgbModal, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      institution: ['', [Validators.required]],
      dateEnd: [''],
      description: [''],
      urlImg: ['']
    });
   }

  ngOnInit(): void {
  }

  showModal() {
    this.form = this.formBuilder.group({
      institution: ['', [Validators.required]],
      dateEnd: [''],
      description: [''],
      urlImg: ['']
    });
    this.modal.open(this.modalEducationContent, { size: 'md', centered: true });
  }

  onSubmit(event: Event) {
    event.preventDefault;
    this.portfolioService.addEducation(this.form.value).subscribe(data => {
      this.addNewEducation.emit(data);
    });

    this.modal.dismissAll(this.modalEducationContent);
  }

    // GETTERS
    get Institution() {
      return this.form.get('institution');
    }
  
    get Description() {
      return this.form.get('description');
    }
  
    get dateEnd() {
      return this.form.get('dateEnd');
    }
  
    get urlImg() {
      return this.form.get('urlImg');
    }

}
