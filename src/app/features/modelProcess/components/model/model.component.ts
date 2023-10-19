import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';
import { ModelAbstractService } from '../../services/abstract/model-abstract.service';
import { Brand } from 'src/app/shared/models/brand';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrandAbstractService } from 'src/app/shared/services/abstracts/brand-abstract.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  brands: Brand[] = [];
  models: Model[] = [];
  modelForm:FormGroup;
  filterText: string;
  selectedBrand: Brand;
  constructor(private modelService: ModelAbstractService,
    private fb: FormBuilder,
    private brandService: BrandAbstractService,) {
      this.modelForm=this.fb.group({
        selectedBrand: ['', Validators.required],
        modelName:['', Validators.required]
      })
       // modelName form kontrolünün değerini dinle
       this.modelForm.get('modelName').valueChanges.subscribe((value) => {
        // Değer her değiştiğinde, value değişkeni içerisinde yeni değer bulunur.
        // Bu değeri kullanarak tabloyu filtreleyebilirsiniz.
        this.filterText = value; // Bu, tabloyu filtrelemek için kullandığınız değişken olmalı
      });
    }

  ngOnInit(): void {
    this.getModels();
    this.getBrands();
  }

  getModels() {
    this.modelService.getModels().subscribe((response) => {
      this.models = response;
    });
  }
  deleteModel(modelId: number) {
    // Burada modeli silme işlemini gerçekleştirin
  }
  updateModel(modelId: number) {
    // Burada modeli güncelleme işlemini gerçekleştirin
  }

  submitForm() {
    console.log('this.modelForm.value');
    console.log(this.modelForm.value);
    if (this.modelForm.valid) {
      // Form geçerli, burada yapılacak işlemi ekleyebilirsiniz.
    }
  }

 getBrands() {
  this.brandService.getBrands().subscribe((response) => {
    this.brands = response;
  });
}
onBrandSelect() {
  const selectedBrand = this.modelForm.get('selectedBrand').value; 
 if (selectedBrand) {
    const brandId = selectedBrand.id;
    this.modelService.getModelsByBrand(brandId).subscribe((models) => {
      this.models = models;
    });
  } else {
    this.getModels(); // Marka seçimi yapılmamışsa bütün modelleri göster
  }
}
}
