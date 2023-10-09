import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit  {
  carForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cretaedRentalForm();
  }

  cretaedRentalForm(){
    this.carForm = this.fb.group({
      plate: ['', Validators.required],
      dailyPrice: [null, Validators.required],
      modelYear: [null, Validators.required],
      state: [null, Validators.required],
      modelName: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.carForm.valid) {
      // Form geçerli, burada yapılacak işlemi ekleyebilirsiniz.
    }
  }
}
