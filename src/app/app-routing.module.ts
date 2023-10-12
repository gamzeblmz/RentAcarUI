import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './pages/car/car.component';
import { RentalComponent } from './pages/rental/rental.component';
import { AddCarComponent } from './features/carProcess/components/add-car/add-car.component';
import { ModelComponent } from './features/modelProcess/components/model/model.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:id', component: CarComponent },
  { path: 'rental/:plate', component: RentalComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'model-process', component: ModelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
