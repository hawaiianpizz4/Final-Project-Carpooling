export class Usuario {
    _id?: number; 
    email: String;
    password: String;
    tipo: String;

    constructor(email:string, password:string, tipo:string){
        this.email =email;
        this.password =password;
        this.tipo=tipo;
    }
}