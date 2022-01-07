import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { SeatsComponent } from './seats/seats.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { AddmovieComponent } from './addmovie/addmovie.component';

import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { ShowbookingsComponent } from './showbookings/showbookings.component';
import { PagerefundComponent } from './pagerefund/pagerefund.component';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { NewuserComponent } from './newuser/newuser.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookinglistComponent,
    SeatsComponent,
    LoginadminComponent,
    PaymentComponent,
    TicketComponent,
    BookticketComponent,
    AddmovieComponent,
    UpdatemovieComponent,
    ShowbookingsComponent,
    PagerefundComponent,
    ListmovieComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
