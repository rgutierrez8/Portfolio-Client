import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {

  @ViewChild('updateModal', { static: false }) contenidoDelModal: any;
  @Output() updateData = new EventEmitter();

  form: FormGroup;

  constructor(private portfolioService: PortfolioService, public modal: NgbModal, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', []],
      title: ['', []],
      description: ['', []],
      address: ['', []],
      urlimg: ['', []],
      banner: ['', []]
    });
   }

  ngOnInit(): void {
  }

  showModal(user: any) {
    this.modal.open(this.contenidoDelModal, { size: 'md', centered: true });
    
    this.form = this.formBuilder.group({
      name: [user.name, [Validators.required]],
      lastName: [user.lastName, [Validators.required]],
      email: [user.email, [Validators.required, Validators.email]],
      username: [user.username, [Validators.required]],
      password: [user.password, [Validators.required, Validators.minLength(6)]],
      phone: [user.phone, []],
      title: [user.title, []],
      description: [user.description, []],
      address: [user.address, []],
      urlImg: [user.urlImg, []],
      banner: [user.banner, []]
    });
  }

  onSubmit(event: Event) {
    event.preventDefault;
    this.portfolioService.updateData(this.form.value).subscribe(data => {
      this.updateData.emit(data);
    });

    this.modal.dismissAll(this.contenidoDelModal);
  }

  get Name() {
    return this.form.get('name');
  }

  get lastname() {
    return this.form.get('lastname');
  }

  get Email() {
    return this.form.get('email');
  }

  get Username() {
    return this.form.get('username');
  }
  get Password() {
    return this.form.get('password');
  }
  get Phone() {
    return this.form.get('phone');
  }
  get Title() {
    return this.form.get('title');
  }
  get Description() {
    return this.form.get('description');
  }
  get Address() {
    return this.form.get('address');
  }
  get urlImg() {
    return this.form.get('urlimg');
  }
  get Banner() {
    return this.form.get('banner');
  }
}
