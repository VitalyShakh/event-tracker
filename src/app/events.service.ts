import { Injectable } from '@angular/core';
import { Dictionary } from './common/entities/Dictionary';
import { TrackingEvent } from './common/entities/TrackingEvent';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: Dictionary<TrackingEvent> = {};

  constructor() {
    for(let key in Object.keys(localStorage)) {
      this.events[key] = JSON.parse(localStorage.getItem(key)) as TrackingEvent;
    }
  }

  public getAll() {
    var keys = Object.keys(this.events);
    return keys.map((key) => this.events[key]);
  }

  public get(key: string) {
    return this.events[key];
  }

  public save(event: TrackingEvent) {
    if (event.id == null) {
      event.id = this.generateGuid();
    }
    this.events[event.id] = event;
    localStorage.setItem(event.id, JSON.stringify(event));
    return event.id;
  }

  private generateGuid() {
    return 'x';
  }
}
