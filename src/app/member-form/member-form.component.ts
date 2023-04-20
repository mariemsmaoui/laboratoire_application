import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Modals/Member';
import { MemberService } from 'src/Services/member.service';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  currentMember!: string;
  member!: Member;
  constructor(private MS: MemberService, private router: Router, private activatedRoute: ActivatedRoute){
    this.MS=MS;
    this.router=router;
    this.activatedRoute=activatedRoute;
  }
  ngOnInit(): void {
    this.currentMember = this.activatedRoute.snapshot.params['id'];
    if (!!this.currentMember){
      this.MS.getMemberByID(this.currentMember).then((member: any) =>{this.member=member;this.initForm2(member)});

    }
    this.initForm();
  }
  initForm2(member: any): void{
    this.form = new FormGroup({
      cin: new FormControl(member.cin, [Validators.required]),
      name: new FormControl(member.name, [Validators.required]),
      cv: new FormControl(member.cv, [Validators.required]),
      type: new FormControl(member.type, [Validators.required]),
    });
  }
  initForm(): void{
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    })
  }
  form!: FormGroup;
  onSub(): void{
    console.log(this.form.value);
    const memberToSave1 = this.form.value;
    if (!!this.member){
      memberToSave1.id=this.member.id;
    }
    this.MS.saveMember(memberToSave1).then((memberSaved: any) => {this.router.navigate(['/members'])});
  }
}