import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from '../../Modals/Member';
import { MemberService } from 'src/Services/member.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  constructor(private dialog:MatDialog, private MS:MemberService, private router: Router){
    this.MS=MS;
    this.router=router;
    this.dialog=dialog;
  }
  dataSource = new MatTableDataSource (this.MS.tab);

  displayedColumns: string[] = ['id', 'cin', 'name', 'createDate' ,'cv','type','actions'];
  remove(id:any){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });
    dialogRef.afterClosed().subscribe((result)=>{
      if (result) this.MS.removeMember(id).then(() => {this.dataSource.data=this.MS.tab});});
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
