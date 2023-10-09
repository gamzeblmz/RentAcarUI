import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'http://localhost:8080/api/cars';

  constructor(private httpClient: HttpClient) {}
  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl + '/getAll');
  }

  getCarsByBrand(id: number): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.apiUrl + '/brandId/' + id);
  }
}
