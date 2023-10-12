import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RentalComponent } from '../rental/rental.component';
import { Car } from 'src/app/features/carProcess/models/car';
import { CarAbstractService } from 'src/app/features/carProcess/services/abstract/car-abstract.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  dataLoaded = false;
  selectedCar: Car;
  showDetailCar: Car;
  filterText: string = '';
  filteredCount = { count: 0 };
  constructor(
    private carService: CarAbstractService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarsByBrand(params['id']);
      } else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
      this.cars=response;
      this.dataLoaded = true;
    });
  }

  showDetails(car: Car) {
    if (this.selectedCar === car) {
      this.selectedCar = null;
    } else {
      this.selectedCar = car;
    }
  }

  rentCar(car: Car) {
    console.log(car.plate);
    const modalRef = this.modalService.open(RentalComponent, {
      centered: true,
    });
    modalRef.componentInstance.car = car;
  }
}
