import { Injectable } from '@angular/core';
import { ModelAbstractService } from '../abstract/model-abstract.service';
import { Observable } from 'rxjs';
import { Model } from '../../models/model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ModelMockService implements ModelAbstractService {
  private readonly apiUrl = 'http://localhost:3000/models';
  constructor(private httpClient: HttpClient) {}

  getModels(): Observable<Model[]> {
    return this.httpClient.get<Model[]>(this.apiUrl);
  }
  getModelsByBrand(brandId: number): Observable<Model[]> {
    return this.httpClient.get<Model[]>(`${this.apiUrl}?brand.id=${brandId}`);
  }
}
