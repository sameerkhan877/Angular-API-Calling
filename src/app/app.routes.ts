import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Cars } from './features/cars/cars';
import { CarsDetail } from './features/cars-detail/cars-detail';
import { Login } from './features/login/login';

export const routes: Routes = [
    {path:'' , component:Home},
    {path:'cars' , component:Cars},
    {path:'cars/:id' , component:CarsDetail},
    {path:'login', component:Login}

];
