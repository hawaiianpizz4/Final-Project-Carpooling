import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import {ServiceloginService} from '../../services/servicelogin.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup
  titulo='Crear Nueva Ruta';
  id: string;
  constructor(private fb: FormBuilder,
         private router: Router,
         private toastr: ToastrService,
         private _productoService: ProductoService,
         private aRouter: ActivatedRoute, 
         private authService: ServiceloginService) { 
    this.productoForm = this.fb.group({
      producto:['', Validators.required],
      email:['', Validators.required],
      categoria:['', Validators.required],
      ubicacion:['', Validators.required],
      precio:['', Validators.required],
    })
    this.id =this.aRouter.snapshot.paramMap.get('id')!;
    }
    

  ngOnInit(): void {
    this.esEditar();
  }
  probando(){
    try {
      console.log(localStorage.getItem("id_usuario"));
      this.router.navigate(['/editar-usuario', localStorage.getItem("id_usuario")]);
    } catch (error) {
      
    }
  }

  agregarProducto(){

    const PRODUCTO: Producto ={
      nombre: this.productoForm.get('producto')?.value,
      email: this.productoForm.get('email')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    }
    if(this.id !==null){
      // editamos producto
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data =>{
        this.toastr.success('¡La ruta se actualizo correctamente!', 'Ruta Registrada');
        this.router.navigate(['/listar-producto']);
      },error =>{
        console.log(error);
        this.productoForm.reset();
      })
    }
    else{
      // Agregamos producto
      console.log(PRODUCTO);
    this._productoService.guardarProducto(PRODUCTO).subscribe(data =>{
      this.toastr.success('¡La ruta fue registrada correctamente!', 'Ruta Actualizada');
      this.router.navigate(['/listar-producto']);
    }, error =>{
      console.log(error);
      this.productoForm.reset();
    })
}
    }
    
  esEditar(){
    if(this.id !==null){
      this.titulo='Editar una Ruta';
      this._productoService.obtenerProducto(this.id).subscribe(data =>{
        this.productoForm.setValue({
          producto: data.nombre,
          email: data.email,
          categoria: data.categoria, 
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      })
    }
  }
}
