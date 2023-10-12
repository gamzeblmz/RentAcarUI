import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaviComponent } from './components/navi/navi.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { BrandService } from './services/concretes/brand.service';
import { BrandMockService } from './services/concretes/brand-mock.service';
import { ModelMockService } from '../features/modelProcess/services/concretes/model-mock.service';
import { CarService } from '../features/carProcess/services/concretes/car.service';
import { CarMockService } from '../features/carProcess/services/concretes/car-mock.service';

@NgModule({
  declarations: [NaviComponent, FilterPipe],
  imports: [CommonModule, RouterModule],
  exports: [NaviComponent, FilterPipe],
  providers: [
    CarService,
    BrandService,
    BrandMockService,
    CarMockService,
    ModelMockService,
  ],
})
export class SharedModule {}
