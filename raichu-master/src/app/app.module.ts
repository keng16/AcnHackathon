import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SideNavigatorComponent } from './side-navigator/side-navigator.component';
import { HomeComponent } from './home/home.component';
import { TabComponent } from './tab/tab.component';
import { BatteryStatusComponent } from './battery-status/battery-status.component';
import { BatteryChartsComponent } from './battery-charts/battery-charts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { BatteryService } from './battery.service'; // Import the service

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideNavigatorComponent,
    HomeComponent,
    TabComponent,
    BatteryStatusComponent,
    BatteryChartsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
