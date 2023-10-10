import { Car } from './../../models/car';
import { Model } from './../../models/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { CarAbstractService } from '../abstracts/car-abstract.service';

@Injectable({
  providedIn: 'root',
})
export class CarMockService implements CarAbstractService {
  apiUrl = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) {}
  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(
      this.apiUrl + '?_expand=model&_expand=brand/'
    );
  }

  getCarsByBrand(brandId: number): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl+ '?_expand=model&_expand=brand/').pipe(
      map(cars => 
        cars.reduce((filteredCars, car) => {
          if (car.model.brandId == brandId) {
            filteredCars.push(car);
          }
          return filteredCars;
        }, [])
      )
    );
  }
  
  private getModelById(id: number): Observable<Model> {
    let newPath = 'http://localhost:3000/models/${id}';
    return this.httpClient.get<Model>(newPath);
  }
}
