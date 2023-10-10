import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/concretes/car.service';
import { Car } from '../models/car';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RentalComponent } from '../rental/rental.component';
import { CarAbstractService } from '../services/abstracts/car-abstract.service';
import { CarMockService } from '../services/concretes/car-mock.service';
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
  constructor(
    private carService: CarMockService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
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
    console.log("getall")
    console.log(response)
      this.cars = response;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(id: number) {
    this.carService.getCarsByBrand(id).subscribe((response) => {
      console.log("response")
      console.log(response)
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
