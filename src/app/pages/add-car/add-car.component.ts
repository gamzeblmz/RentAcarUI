import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/shared/models/brand';
import { BrandAbstractService } from 'src/app/shared/services/abstracts/brand-abstract.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit  {
  carForm: FormGroup;
  brands: Brand[] = [];
  selectedBrand: Brand;
  constructor(
    private fb: FormBuilder,
    private brandService: BrandAbstractService
  ) {}

  ngOnInit(): void {
    this.cretaedRentalForm();
    this.getBrands();
  }

  cretaedRentalForm(){
    this.carForm = this.fb.group({
      plate: ['', Validators.required],
      dailyPrice: [null, Validators.required],
      modelYear: [null, Validators.required],
      state: [null],
      modelName: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  submitForm() {
    console.log("this.carForm.value")
    console.log(this.carForm.value)
    if (this.carForm.valid) {
     
      // Form geçerli, burada yapılacak işlemi ekleyebilirsiniz.
    }
  }

  setInitialState(stateValue: number) {
    this.carForm.get('state').setValue(stateValue);
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response;
    });
  }
  selectBrand(){
    console.log("brand")
    console.log(this.selectBrand)
  }
  
}
