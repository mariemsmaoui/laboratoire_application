import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/Services/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {
  constructor(private ES : EventService,private router : Router){}
  range = new FormGroup({ //formulaire en group
    titre:new FormControl(null,[]),
    date_deb: new FormControl<Date | null>(null),
    date_fin: new FormControl<Date | null>(null),
  });
  OnSub():void{
    console.log(this.range.value);
    const EventNew=this.range.value;
    this.ES.saveEvent(EventNew).subscribe(()=>{ //subscribe : si la methode invoquée retour un objet de type Observable
      this.router.navigate(['/events']);
    });
  }
}

