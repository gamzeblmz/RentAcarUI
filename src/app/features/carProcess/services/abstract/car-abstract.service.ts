import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../../models/car';

@Injectable({
  providedIn: 'root'
})
export abstract class CarAbstractService {
  abstract getCars(): Observable<Car[]>;

  abstract  getCarsByBrand(id: number): Observable<Car[]>;
}
