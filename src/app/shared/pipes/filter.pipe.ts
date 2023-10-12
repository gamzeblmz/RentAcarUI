import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Car[], filterText: string, filteredCount: { count: number }): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";

    const filteredCars = filterText ? 
      value.filter((c: Car) => c.model.name.toLocaleLowerCase().indexOf(filterText) !== -1) : 
      value;

    // Filtrelenmiş araç sayısını set ediyoruz.
    filteredCount.count = filteredCars.length;
    return filteredCars;
  }
}
