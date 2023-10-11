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
    return this.httpClient.get<Car[]>(this.apiUrl);
  }

  getCarsByBrand(brandId: number): Observable<Car[]> {
    let url = `${this.apiUrl}?model.brandId=${brandId}`;
    return this.httpClient.get<Car[]>(url);
  }

}
