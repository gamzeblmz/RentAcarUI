import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ModelComponent } from './components/model/model.component';
import { ModelAbstractService } from 'src/app/features/modelProcess/services/abstract/model-abstract.service';
import { ModelMockService } from 'src/app/features/modelProcess/services/concretes/model-mock.service';
import { FilterPipe } from './pipes/filter-model.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ModelComponent,
    FilterPipe
  ],
  exports: [
    ModelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: ModelAbstractService,
      useClass: ModelMockService,
    } // IoC Container'a müdahale etmiş oluyoruz.
  ]
})
export class ModelModule { }