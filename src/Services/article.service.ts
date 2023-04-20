import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Article } from 'src/Modals/Article';
import { Member } from 'src/Modals/Member';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab:Article[]=GLOBAL._DB.articles;
  member!:Member;
  constructor(private MS: MemberService) {
    this.MS=MS;
  }
  affect(id:string,author:string):Promise<void>{
    this.MS.getMemberByID(author).then((member)=>{this.member=member});
    this.getArticleByID(id).then((article)=>{article.auteur=this.member.name});
    return new Promise((resolve,reject)=>{resolve()});
  }
  getArticleByID(id:string):Promise<Article>{
    //return this.httpClient.get<Member>('link') as Promise<Member>;
    return new Promise((resolve,reject)=>{resolve(this.tab.filter(article=>article.id===id)[0] ?? null)});
  }
}
