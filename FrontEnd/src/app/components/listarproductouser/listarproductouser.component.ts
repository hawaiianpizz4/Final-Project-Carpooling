import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import {ServiceloginService} from '../../services/servicelogin.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-listarproductouser',
  templateUrl: './listarproductouser.component.html',
  styleUrls: ['./listarproductouser.component.css']
})
export class ListarproductouserComponent implements OnInit {
  email: string | null;
  listProductos: Producto[] =[];
  constructor(private _productoService: ProductoService,
    private toastr: ToastrService,
    private authService: ServiceloginService,
    private router: Router) {
      this.email=localStorage.getItem("email_usuario");
    }
  

  ngOnInit(): void {
    this.obtenerProductos(this.email);
  }

  probando(){
    try {
      console.log(localStorage.getItem("id_usuario"));
      this.router.navigate(['/editar-usuario', localStorage.getItem("id_usuario")]);
    } catch (error) {
      
    }
  }

  // obtenerProductos(){
  //   this._productoService.getProductos().subscribe(data =>{
  //     console.log(data);
  //     this.listProductos =data;
  //   }, error =>{
  //     console.log(error);
  //   })
  // }
  
  obtenerProductos(email:any){
    try {
    this._productoService.getProductosUsuario(email).subscribe(data =>{
      console.log(data);
      this.listProductos =data;
    }, error =>{
      console.log(error);
    })
    } catch (error) {
      
    }
    
    
  }

  eliminarProducto(id:any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error('La ruta fue eliminada con exito', 'Ruta Eliminada');
      this.obtenerProductos(this.email);
    }, error =>{
      console.log(error);
    })
  }

}
