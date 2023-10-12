import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from '../../pages/car/car.component';
import { CarAbstractService } from 'src/app/shared/services/abstracts/car-abstract.service';
import { CarMockService } from 'src/app/shared/services/concretes/car-mock.service';



@NgModule({
  declarations: [
    CarComponent
  ],
  exports: [
    CarComponent
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