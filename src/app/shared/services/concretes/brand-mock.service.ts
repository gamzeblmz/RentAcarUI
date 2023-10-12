import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../../models/brand';
import { Observable } from 'rxjs';
import { BrandAbstractService } from '../abstracts/brand-abstract.service';


@Injectable({
  providedIn: 'root'
})
export class BrandMockService implements BrandAbstractService {

  private readonly apiUrl = 'http://localhost:3000/brands';
  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }
}

