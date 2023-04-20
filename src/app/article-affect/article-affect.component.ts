import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Member } from 'src/Modals/Member';
import { ArticleService } from 'src/Services/article.service';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-article-affect',
  templateUrl: './article-affect.component.html',
  styleUrls: ['./article-affect.component.css']
})
export class ArticleAffectComponent {
  selectedAuthor!: string;
  currentArticle!: string;
  constructor(private MS: MemberService, private AS:ArticleService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.MS=MS;
    this.AS=AS;
    this.activatedRoute=activatedRoute;
    this.router=router;
}
authors: Member[]=this.MS.tab;

  ngOnInit(): void {
}
Add(selectedAuthor:string):void{
  this.currentArticle = this.activatedRoute.snapshot.params['id'];
  this.AS.affect(this.currentArticle,selectedAuthor).then(()=>{this.router.navigate(['/articles'])});


}
}
