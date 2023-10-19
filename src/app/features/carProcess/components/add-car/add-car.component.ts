import { ModelAbstractService } from 'src/app/features/modelProcess/services/abstract/model-abstract.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/shared/models/brand';
import { BrandAbstractService } from 'src/app/shared/services/abstracts/brand-abstract.service';
import { Model } from 'src/app/features/modelProcess/models/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  carForm: FormGroup;
  brands: Brand[] = [];
  selectedBrand: Brand;
  models: Model[] = [];
  selectedModel: Model;
  constructor(
    private fb: FormBuilder,
    private brandService: BrandAbstractService,
    private modelService: ModelAbstractService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cretaedCarForm();
    this.getBrands();
    this.getModels();
  }

  cretaedCarForm() {
    this.carForm = this.fb.group({
      plate: ['', Validators.required],
      dailyPrice: [null, Validators.required],
      modelYear: [null, Validators.required],
      state: [null],
      selectedModel: ['', Validators.required],
      imageUrl: ['', Validators.required],
      selectedBrand: [''],
    });
  }

  submitForm() {
    console.log('this.carForm.value');
    console.log(this.carForm.value);
    if (this.carForm.valid) {
      // Form geçerli, burada yapılacak işlemi ekleyebilirsiniz.
    }
  }

  setInitialState(stateValue: number) {
    this.carForm.get('state').setValue(stateValue);
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response;
    });
  }
  onBrandSelect() {
    const selectedBrand = this.carForm.get('selectedBrand').value;
    if (selectedBrand) {
      const brandId = selectedBrand.id;
      this.modelService.getModelsByBrand(brandId).subscribe((models) => {
        this.models = models;
      });
    } else {
      this.getModels(); // Marka seçimi yapılmamışsa bütün modelleri göster
    }
  }

  getModels() {
    this.modelService.getModels().subscribe((response) => {
      this.models = response;
      console.log(response);
    });
  }
  goToModelComponent() {
    this.router.navigate(['/model-process']);
  }
}
