import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-listar-producto2',
  templateUrl: './listar-producto2.component.html',
  styleUrls: ['./listar-producto2.component.css']
})
export class ListarProducto2Component implements OnInit {

  listProductos: Producto[] =[];
  constructor(private _productoService: ProductoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
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
