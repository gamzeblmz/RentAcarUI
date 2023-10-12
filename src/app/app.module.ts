
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { FilterPipe } from './shared/pipes/filter.pipe';
import { CarModule } from './pages/car/car.module';
import { ModelComponent } from './pages/model/model.component';
import { NaviComponent } from './shared/components/navi/navi.component';
import { RentalComponent } from './pages/rental/rental.component';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { BrandModule } from './pages/brand/brand.module';
@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    NaviComponent,
    RentalComponent,
    AddCarComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CarModule,
    BrandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
