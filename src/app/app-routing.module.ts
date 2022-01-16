import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { DetailDesComponent } from './detail-des/detail-des.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { LoginComponent } from './login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { NewuserComponent } from './newuser/newuser.component';
import { PagerefundComponent } from './pagerefund/pagerefund.component';
import { PaymentComponent } from './payment/payment.component';
import { SeatsComponent } from './seats/seats.component';
import { ShowScreenComponent } from './show-screen/show-screen.component';
import { TicketComponent } from './ticket/ticket.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:NewuserComponent},
  {path:'admin',component:LoginadminComponent},
  {path:'add',component:AddmovieComponent},
  {path:'list',component:ListmovieComponent},
  {path:'seat',component:SeatsComponent},
  {path:'book',component:BookticketComponent},
  {path:'home',component:HomeComponent},
  {path:'bookingList',component:BookinglistComponent},
  {path:'payment',component:PaymentComponent},
  {path:'ticket',component:TicketComponent},
  {path:'refund',component:PagerefundComponent},
  {path:'update',component:UpdatemovieComponent},
  {path:'detail',component:DetailComponent},
  {path:'show',component:ShowScreenComponent},
  {path:'des',component:DetailDesComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
