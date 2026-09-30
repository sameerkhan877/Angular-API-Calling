import { Component } from '@angular/core';
import { Car } from '../../Models/car.model';
import { CarService } from '../../services/car';
@Component({
  imports: [],
  selector: 'app-cars',
  styleUrl: './cars.css',
  templateUrl: './cars.html',
})
export class Cars {

 
   Post: any[] = [];
   constructor(private carService : CarService ) {}
   LoadPost(){
    this.carService.getPosts().subscribe(data =>{
      console.log(data);
      this.Post = data as any[];
    })
   }
  


}
