import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Evenement } from 'src/Modals/Evenement';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  form!: FormGroup;
  description!: string;
  EventRecupere!: any;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    //this.id_event = data.id;
    //this.titre = data.title;
    this.EventRecupere = data.EventGlobal;
  }

  ngOnInit() {
    this.form = this.fb.group({
      // description: [this.description, []],
      id_event: [this.EventRecupere.id_event, []],
      titre: [this.EventRecupere.titre, []],
      date_debut: [this.EventRecupere.date_debut, []],
      date_fin: [this.EventRecupere.date_fin, []],
    });
  }

  save() {
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
