export class Producto {
    _id?: number; 
    nombre: string;
    email: string; 
    categoria: string; 
    ubicacion: string; 
    precio: number;

    constructor(nombre:string, email:string, categoria:string, ubicacion:string, precio: number){
        this.nombre =nombre;
        this.email=email;
        this.categoria =categoria;
        this.ubicacion =ubicacion;
        this.precio =precio;
    }
}