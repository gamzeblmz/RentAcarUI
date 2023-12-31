import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from 'src/app/features/carProcess/models/car';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  @Input() car: Car;
  
  rentalDays: number;
  rentalForm: FormGroup;
  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {
    this.cretaedRentalForm();
  }

  cretaedRentalForm(){
    this.rentalForm = this.fb.group({
      rentalDays: ['', Validators.required]
    });
  }
  closeModal() {
    console.log("this.rentalForm.value")
    console.log(this.rentalForm.value)
    this.modal.close(); // Modal'ı kapat
  }

}
