import { Injectable } from '@angular/core';
import { Model } from '../../models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ModelAbstractService {
  abstract getModels() : Observable<Model[]>;
  abstract getModelsByBrand(brandId: number):Observable<Model[]>;
}
