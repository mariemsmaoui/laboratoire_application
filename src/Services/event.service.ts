import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Evenement } from 'src/Modals/Evenement';
import { GLOBAL } from 'src/app/app-config';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  tab_event: any[] = GLOBAL._DB.events;
  saveEvent(eventNew: any): Observable<Evenement> {
    const Eventcreate = {
      ...eventNew,
      id: Math.ceil(Math.random() * 10000).toString(),
    };
    this.tab_event = [
      eventNew,
      ...this.tab_event.filter((event) => event.id !== eventNew.id),
    ];
    return new Observable((observer) => {
      observer.next();
    });
  }
  getEventByID(id: string): Observable<Event> {
    return new Observable<Event>((observer) =>
      observer.next(this.tab_event.filter((item) => item.id == id)[0] ?? null)
    );
  }
}

/*{
 return 
 this.httpClient.post<Event>
('http://localhost:7016-api/Events',EventToSave)};

}*/
