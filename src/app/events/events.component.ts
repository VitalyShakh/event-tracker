import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.less']
})
export class EventsComponent implements OnInit {
  events = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events = this.eventsService.getAll();
  }
}
