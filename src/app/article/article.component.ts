import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleService } from 'src/Services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  dataSource = new MatTableDataSource (this.AS.tab);
  constructor(private AS:ArticleService){
    this.AS=AS;
  }
  displayedColumns: string[] = ['id', 'titre', 'type', 'dateApparition' ,'sourcePdf','auteur','actions'];
  remove(id:any){
    console.log(id);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
