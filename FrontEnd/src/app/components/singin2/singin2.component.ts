import { Component, OnInit } from '@angular/core';
import {ServiceloginService} from '../../services/servicelogin.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-singin2',
  templateUrl: './singin2.component.html',
  styleUrls: ['./singin2.component.css']
})
export class Singin2Component implements OnInit {

  user={
    email: '',
    password: '',
    tipo: ''
  }

  constructor(
    private authService: ServiceloginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signIn(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          const tipo=res.tipo;
          localStorage.setItem('id_usuario', res.id );
          localStorage.setItem('email_usuario', res.email );
          // console.log(tipo);
          if(tipo =="2"){
            this.router.navigate(['/private']);
          }
          else{
            this.router.navigate(['/private2']);
          }
          // this.router.navigate(['/private']);
        },
        err => console.log(err)
      )
  }

}
