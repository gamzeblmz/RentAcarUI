import { ModelAbstractService } from 'src/app/shared/services/abstracts/model-abstract.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/shared/models/brand';
import { BrandAbstractService } from 'src/app/shared/services/abstracts/brand-abstract.service';
import { Model } from 'src/app/shared/models/model';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit  {
  carForm: FormGroup;
  brands: Brand[] = [];
  selectedBrand: Brand;
  models: Model[] = [];
  constructor(
    private fb: FormBuilder,
    private brandService: BrandAbstractService,
    private modelAbstractService:ModelAbstractService
  ) {}

  ngOnInit(): void {
    this.cretaedRentalForm();
    this.getBrands();
    this.getModels();
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
    console.log(this.selectBrand)

  }

  getModels(){
    this.modelAbstractService.getModels().subscribe((response) => {
      this.models = response;
      console.log(response)
    });
  }
  selectModel(){
    console.log("brand")
    console.log(this.selectBrand)
  }
  
}
