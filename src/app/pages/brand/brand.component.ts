
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/models/brand';
import { BrandAbstractService } from 'src/app/shared/services/abstracts/brand-abstract.service';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  dataLoaded = false;
  constructor(private brandService: BrandAbstractService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response;
      this.dataLoaded = true;
    });
  }
  getCurrenntBrand(brand: Brand) {
    if (brand == this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getAllBrandClass() {
    if (!this.currentBrand) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  clearCurrentBrand(){
    this.currentBrand=null;
  }
}
