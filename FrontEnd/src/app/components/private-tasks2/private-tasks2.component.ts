import { Component, OnInit } from '@angular/core';
import {ServiceloginService} from '../../services/servicelogin.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-private-tasks2',
  templateUrl: './private-tasks2.component.html',
  styleUrls: ['./private-tasks2.component.css']
})
export class PrivateTasks2Component implements OnInit {

  constructor( private authService: ServiceloginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  probando(){
    try {
      console.log(localStorage.getItem("id_usuario"));
      this.router.navigate(['/editar-usuario', localStorage.getItem("id_usuario")]);
    } catch (error) {
      
    }
  }
}
