import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-cars-detail',
  styleUrl: './cars-detail.css',
  templateUrl: './cars-detail.html',
})
export class CarsDetail {

  CarId : string | null = null;
  constructor(private route : ActivatedRoute)
  {
    this.CarId = this.route.snapshot.paramMap.get('id');
  }
}
