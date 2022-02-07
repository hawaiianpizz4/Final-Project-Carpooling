import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-listar-usuario2',
  templateUrl: './listar-usuario2.component.html',
  styleUrls: ['./listar-usuario2.component.css']
})
export class ListarUsuario2Component implements OnInit {

  listUsuarios:Usuario[]= [];

  constructor(private _usuarioService: UsuarioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  obtenerPersonas(){
    this._usuarioService.getPersonas().subscribe(data =>{
      console.log(data);
      this.listUsuarios=data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarUsuario(id:any){
    this._usuarioService.eliminarUsuario(id).subscribe(data =>{
      this.toastr.error('El usuario fue eliminado con exito', 'Usuario Eliminado');
      this.obtenerPersonas();
    }, error =>{
      console.log(error);
    })
  }

}
