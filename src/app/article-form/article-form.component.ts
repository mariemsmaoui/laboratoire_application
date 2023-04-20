import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {
  form!: FormGroup;
  constructor() { }
  initForm(): void{
    this.form = new FormGroup({
      titre: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      dateApparition: new FormControl(null, [Validators.required]),
      sourcePdf: new FormControl(null, [Validators.required]),
    })
  }
  ngOnInit(): void {
    this.initForm();
  }
  onSub(){
    console.log(this.form.value);
  }

}
