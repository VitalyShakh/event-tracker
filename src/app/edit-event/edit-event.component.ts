import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TrackingEvent} from '../common/entities/TrackingEvent';
import {EventsService} from '../events.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.less']
})
export class EditEventComponent implements OnInit {
  event: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private eventsService: EventsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get("id") !== "0") {
        this.event = this.eventsService.get(params.get("id"));
      }
    });
  }

  save() {
    this.eventsService.save(this.event);
    this.router.navigate(["/events"]);
  }
}
