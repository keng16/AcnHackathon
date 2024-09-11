import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{
  
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: [
      { title: 'Battery 1', date: '2024-09-10' },
      { title: 'Battery 2', date: '2024-09-15' },
      { title: 'Battery 3', date: '2024-09-20' },
      { title: 'Battery 2', date: '2024-09-23' },
      { title: 'Battery 1', date: '2024-09-28' }
    ],
    themeSystem: 'bootstrap',
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: 'dayGridMonth'
    },
    eventColor: 'black',
  };

  constructor() { }

  ngOnInit(): void {
  }
}