import { Component, OnInit } from '@angular/core';
import {ServiceloginService} from '../../services/servicelogin.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {
  
  constructor( private authService: ServiceloginService,
    private router: Router) { }
  
  ngOnInit(): void {
  }

  probando(){
    try {
      console.log(localStorage.getItem("id_usuario"));
      this.router.navigate(['/editar-usuario2', localStorage.getItem("id_usuario")]);
    } catch (error) {
      
    }
  }
}

