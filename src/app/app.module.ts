//import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { AppRoutingModule } from './app-routing.module';
 import { AppComponent } from './app.component';
 import { SimpleModalModule } from 'ngx-simple-modal';
// import { CalenderComponent } from './components/calender/calender.component';
 import { CompComponent } from './components/comp/comp.component';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderComponent } from './components/calender/calender.component';
import {NgxPrintModule} from 'ngx-print';
import { ModalModule } from 'ngb-modal';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    CompComponent
  ],
  imports: [ReactiveFormsModule,SimpleModalModule.forRoot({container:document.body}),NgxPrintModule,
    ModalModule ,
  CommonModule,
    FormsModule,
    NgbModalModule,
   FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
 
}), BrowserModule,
AppRoutingModule,NgbModule,ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
