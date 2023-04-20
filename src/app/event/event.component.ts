import { Component } from '@angular/core';
import { EventService } from 'src/Services/event.service';
import { Evenement } from 'src/Modals/Evenement';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog, MatDialogConfig, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  EventGlobal!:Evenement;
  constructor(private ES: EventService, private dialog :MatDialog) {}

  dataSource: Evenement[] = this.ES.tab_event;
  displayColumns: string[] = [
    'id_event',
    'titre',
    'date_debut',
    'date_fin',
    'actions',
  ];

  open(id:string):void {
//recupere par son nom

this.ES.getEventByID(id).subscribe((E:any)=>{
  this.EventGlobal=E
});
   const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data=this.EventGlobal;
    const dialogRef= this.dialog.open(ModalComponent, dialogConfig);
  }

   /* dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };*/

   
//this.dialog.open(ModalComponent);
  }

