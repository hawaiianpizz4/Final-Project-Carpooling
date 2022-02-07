import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  titulo="Crear Usuario";
  id: string | null;


  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService, 
    private _usuarioService:UsuarioService,
    private aRouter: ActivatedRoute) { 
    
      this.usuarioForm=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
      tipo:['', Validators.required],
    })
    this.id= this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  // Agregar Usuario
  agregarUsuario(){
    const USUARIO: Usuario={
      email: this.usuarioForm.get('email')?.value,
      password: this.usuarioForm.get('password')?.value,
      tipo: this.usuarioForm.get('tipo')?.value
     
    }

    if(this.id !==null){
      // editamos producto
      this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data =>{
        this.toastr.info('¡El usuario se actualizo correctamente!', 'Usuario Registrado');
        this.router.navigate(['/private2']);
      },error =>{
        console.log(error);
        this.usuarioForm.reset();
      })
    }
    else{
    // Agregamos usuario
    console.log(USUARIO);
    this._usuarioService.guardarUsuario(USUARIO).subscribe(data=>{
      this.toastr.success('Usuario Agregado Perfectamente', 'Creación Usuario')
      this.router.navigate(['/private2']);
    }, error=>{
      console.log(error)
      this.usuarioForm.reset();
    })
    
  }
}

  esEditar(){
    if(this.id !==null){
      this.titulo='Editar Usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data =>{
        this.usuarioForm.setValue({
          email: data.email, 
          password: data.password,
          tipo:data.tipo
        })
      })
    }
  }

  
  


}
