import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  @ViewChild('addSkillModal', { static: false }) modalSkillContent: any;
  @Output() addSkill = new EventEmitter();
  form: FormGroup;

  constructor(private portfolioService: PortfolioService, public modal: NgbModal, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      average: ['', [Validators.required]],
      urlImg: ['']
    });
  }

  ngOnInit(): void {
  }

  showModal() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      average: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      urlImg: ['']
    });

    this.modal.open(this.modalSkillContent, { size: 'md', centered: true });
  }

  onSubmit(event: Event) {
    this.portfolioService.addSkill(this.form.value).subscribe(data => {
      this.addSkill.emit(data);
    })
    
    this.modal.dismissAll(this.modalSkillContent);
  }

  // GETTERS
  get Name() {
    return this.form.get('name');
  }
  get Average() {
    return this.form.get('average');
  }
  get urlImg() {
    return this.form.get('urlImg');
  }
}
