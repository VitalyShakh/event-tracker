import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events/events.component';
import {EditEventComponent} from './edit-event/edit-event.component';
import {EventDetailsComponent} from './event-details/event-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full'},
  { path: 'events', component: EventsComponent },
  { path: 'edit-event/{id}', component: EditEventComponent },
  { path: 'event-details/{id}', component: EventDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
