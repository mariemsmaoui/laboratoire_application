import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/Modals/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {


  tab:Member[]=GLOBAL._DB.members;
  saveMember(memberToSave1:any):Promise<Member>{

    const NewMember={...memberToSave1,
    id:memberToSave1.id ?? (Math.ceil(Math.random()*10000)).toString(),
    createDate:memberToSave1.createDate ?? new Date().toISOString()};
    this.tab=[NewMember,...this.tab.filter(member=>member.id!==NewMember.id)];
    return new Promise((resolve,reject)=>{resolve(NewMember)});
  };
  removeMember(id:any):Promise<void>{
    this.tab=[...this.tab.filter(member=>member.id!==id)];
    //return this.httpClient.delete<void>('link') as Promise<void>;
    return new Promise((resolve,reject)=>{resolve()});
  }
  getMemberByID(id:string):Promise<Member>{
    //return this.httpClient.get<Member>('link') as Promise<Member>;
    return new Promise((resolve,reject)=>{resolve(this.tab.filter(member=>member.id===id)[0] ?? null)});
  }
  
}
