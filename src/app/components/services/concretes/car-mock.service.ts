import { Car } from './../../models/car';
import { Model } from './../../models/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
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

  getCarsByBrand(id: number): Observable<Car[]> {
    //let newPath = `${this.apiUrl}+'/_expand=model&_expand=brand/brandId/'+id';
    let newPath = this.apiUrl + '/_expand=model&_expand=brand/brandId/'+id;
    return this.httpClient
      .get<Car[]>(newPath)
      .pipe(map((response: any) => [response]));
  }

  private getModelById(id: number): Observable<Model> {
    let newPath = 'http://localhost:3000/models/${id}';
    return this.httpClient.get<Model>(newPath);
  }
}
