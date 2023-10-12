import { CarAbstractService } from 'src/app/shared/services/abstracts/car-abstract.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from '@angular/router';
import { BrandMockService } from 'src/app/shared/services/concretes/brand-mock.service';
import { BrandAbstractService } from 'src/app/shared/services/abstracts/brand-abstract.service';
import { BrandComponent } from './brand.component';
@NgModule({
  declarations: [
    BrandComponent
  ],
  exports: [
    BrandComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: BrandAbstractService,
      useClass: BrandMockService,
    } // IoC Container'a müdahale etmiş oluyoruz.
  ]
})
export class BrandModule { }
