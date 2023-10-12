
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CarComponent } from 'src/app/pages/car/car.component';
import { CarAbstractService } from './services/abstract/car-abstract.service';
import { CarMockService } from './services/concretes/car-mock.service';

@NgModule({
  declarations: [
    CarComponent
  ],
  exports: [
    CarComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: CarAbstractService,
      useClass: CarMockService,
    } // IoC Container'a müdahale etmiş oluyoruz.
  ]
})
export class CarModule { }
