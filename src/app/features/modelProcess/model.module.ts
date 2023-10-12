import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { RouterModule } from '@angular/router';
import { ModelComponent } from './components/model/model.component';
import { ModelAbstractService } from 'src/app/features/modelProcess/services/abstract/model-abstract.service';
import { ModelMockService } from 'src/app/features/modelProcess/services/concretes/model-mock.service';
@NgModule({
  declarations: [
    ModelComponent
  ],
  exports: [
    ModelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: ModelAbstractService,
      useClass: ModelMockService,
    } // IoC Container'a müdahale etmiş oluyoruz.
  ]
})
export class ModelModule { }