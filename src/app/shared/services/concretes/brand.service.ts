import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../../models/brand';
import { BrandAbstractService } from '../abstracts/brand-abstract.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService implements BrandAbstractService   {

   private readonly apiUrl = 'http://localhost:8080/api/brands';
   constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<Brand[]> {
     return this.httpClient.get<Brand[]>(this.apiUrl+'/getAll');
   }
  
}
