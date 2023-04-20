import { Component } from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }
  title = "Are you sure?";
  content = "Are you sure you want to delete this entry?";
  confirm = "Yes";
  cancel = "No";
}
