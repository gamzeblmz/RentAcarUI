import { Component, OnInit } from '@angular/core';
import { Model } from '../../models/model';
import { ModelAbstractService } from '../../services/abstract/model-abstract.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  models: Model[] = [];
  filterText: string;
  constructor(private modelService: ModelAbstractService) {}

  ngOnInit(): void {
    this.getModels();
  }

  getModels() {
    this.modelService.getModels().subscribe((response) => {
      this.models = response;
    });
  }
  deleteModel(modelId: number) {
    // Burada modeli silme işlemini gerçekleştirin
  }
  updateModel(modelId: number) {
    // Burada modeli güncelleme işlemini gerçekleştirin
  }
 saveModel(){

 }
}
