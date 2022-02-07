import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import {ServiceloginService} from '../../services/servicelogin.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos: Producto[] =[];
  constructor(private _productoService: ProductoService,
    private toastr: ToastrService,
    private authService: ServiceloginService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  probando(){
    try {
      console.log(localStorage.getItem("id_usuario"));
      this.router.navigate(['/editar-usuario', localStorage.getItem("id_usuario")]);
    } catch (error) {
      
    }
  }

  obtenerProductos(){
    this._productoService.getProductos().subscribe(data =>{
      console.log(data);
      this.listProductos =data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarProducto(id:any){
    this._productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error('La ruta fue eliminada con exito', 'Ruta Eliminada');
      this.obtenerProductos();
    }, error =>{
      console.log(error);
    })
  }

}
