import { Component, OnInit } from '@angular/core';
import {ServiceloginService} from '../../services/servicelogin.service';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signups2',
  templateUrl: './signups2.component.html',
  styleUrls: ['./signups2.component.css']
})
export class Signups2Component implements OnInit {
  signUpForm: FormGroup
   user = {
    email: '',
    password: '', 
    tipo: ''
  }
  
  constructor(
    private authService: ServiceloginService,
    private router: Router,
    private fb: FormBuilder
  ) {this.signUpForm = this.fb.group({
    email:['', Validators.required],
    password:['', Validators.required],
    tipo:['', Validators.required]
  }) 
  }

  ngOnInit(): void {
  }

  signUp() {
    this.authService.signUp(this.user)
      .subscribe(
        res =>{
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('id_usuario', res.id1 );
          localStorage.setItem('email_usuario', res.email );
          const tipo=res.tipo;
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
