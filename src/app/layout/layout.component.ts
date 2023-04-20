import { Component } from '@angular/core';
import { AuthService } from 'src/Services/AuthService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  LOGOUT():void{
    this.authService.doLogout().then(()=>{
      this.router.navigate(['/login'])
    });

  }


}
