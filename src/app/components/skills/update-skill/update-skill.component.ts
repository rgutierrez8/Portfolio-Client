import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {

  @ViewChild('updateSkillModal', { static: false }) modalSkillContent: any;
  @Input() skill: any;
  @Output() updated = new EventEmitter();
  form: FormGroup;

  constructor(private portfolioService: PortfolioService, public modal: NgbModal, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      average: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      urlImg: ['']
    });
   }

  ngOnInit(): void {
  }

  showModal(skill: any) {
    this.form = this.formBuilder.group({
      id: [skill.id],
      name: [skill.name, [Validators.required]],
      average: [skill.average, [Validators.required, Validators.min(0), Validators.max(100)]],
      urlImg: [skill.urlImg]
    });

    this.modal.open(this.modalSkillContent, { size: 'md', centered: true });
  }

  onSubmit(event: Event) {
    this.portfolioService.updateSkill(this.form.value).subscribe(data => {
      this.updated.emit(data);
    })
    
    this.modal.dismissAll(this.modalSkillContent);
  }

    // GETTERS
  get Id() {
    return this.form.get('id');
  }
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
