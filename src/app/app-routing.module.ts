import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindFlightComponent} from "./components/find-flight/find-flight.component";
import {DisplayFlightComponent} from "./components/display-flight/display-flight.component";
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";
import {ConfirmReservationComponent} from "./components/confirm-reservation/confirm-reservation.component";

const routes: Routes = [
  {path:'', redirectTo:'',pathMatch:'full'},
  {
    path:'findFlights',
    component:FindFlightComponent
  },
  {
    path:'displayFlights',
    component:DisplayFlightComponent
  },
  {
    path:'passengerDetails/:id',
    component:PassengerDetailComponent
  },
  {
    path:'confirm/:id',
    component:ConfirmReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
