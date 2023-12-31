
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RentalComponent } from './pages/rental/rental.component';

import { BrandModule } from './pages/brand/brand.module';
import { SharedModule } from './shared/shared.module';
import { AddCarComponent } from './features/carProcess/components/add-car/add-car.component';
import { CarModule } from './features/carProcess/car.module';
import { ModelModule } from './features/modelProcess/model.module';

@NgModule({
  declarations: [
    AppComponent,
    RentalComponent,
    AddCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CarModule,
    BrandModule,
    SharedModule,
    ModelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
