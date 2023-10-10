import { Brand } from './../models/brand';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../services/concretes/brand.service';
import { BrandAbstractService } from '../services/abstracts/brand-abstract.service';
import { BrandMockService } from '../services/concretes/brand-mock.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  dataLoaded = false;
  constructor(private brandService: BrandMockService) { }

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
    console.log()
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
