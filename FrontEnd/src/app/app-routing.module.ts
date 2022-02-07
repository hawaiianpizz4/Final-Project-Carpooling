import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

import { AuthGuard } from "./auth.guard";
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';

// import { SigninComponent } from './components/signin/signin.component';
// import { SignupComponent } from './components/signup/signup.component';
import { ListarProductosEdicionComponent } from './components/listar-productos-edicion/listar-productos-edicion.component';
import { Signups2Component } from './components/signups2/signups2.component';
import { Singin2Component } from './components/singin2/singin2.component';
import { PrivateTasks2Component } from './components/private-tasks2/private-tasks2.component';
import { ListarProducto2Component } from './components/listar-producto2/listar-producto2.component';
import { ListarRutas2Component } from './components/listar-rutas2/listar-rutas2.component';
import { ListarUsuario2Component } from './components/listar-usuario2/listar-usuario2.component';
import { ListarproductouserComponent } from './components/listarproductouser/listarproductouser.component';
import { Usuario2Component } from './components/usuario2/usuario2.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path:'beneficios',component:BeneficiosComponent},
  {path:'iniciarsesion',component:IniciarsesionComponent},
  {path:'registrarse',component:RegistrarseComponent},
  {path: 'listar-producto', component: ListarProductosComponent, canActivate: [AuthGuard]},
  {path: 'listar-producto2', component: ListarProducto2Component, canActivate:[AuthGuard]},
  {path: 'listar-rutas2', component: ListarRutas2Component, canActivate:[AuthGuard]},
  {path: 'crear-producto', component: CrearProductoComponent, canActivate: [AuthGuard]},
  {path: 'editar-producto/:id', component: CrearProductoComponent, canActivate: [AuthGuard]},
  {path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard]},
  {path: 'listar-usuario', component: ListarUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'listar-usuario2', component: ListarUsuario2Component, canActivate: [AuthGuard]},
  {path: 'listar-productouser', component:  ListarproductouserComponent, canActivate:[AuthGuard]},
  {path: 'editar-usuario/:id', component: UsuarioComponent, canActivate: [AuthGuard]},
  {path: 'editar-usuario2/:id', component: Usuario2Component, canActivate: [AuthGuard]},
  {path: 'tasks', component: TasksComponent},
  {path: 'private', component: PrivateTasksComponent, canActivate: [AuthGuard]},
  {path: 'private2', component: PrivateTasks2Component, canActivate: [AuthGuard]},
  // {path: 'signin', component: SigninComponent},
  // {path: 'signup', component: SignupComponent},
  {path: 'listar-producto-edicion', component: ListarProductosEdicionComponent, canActivate: [AuthGuard]},
  {path: 'signup', component: Signups2Component},
  {path: 'signin', component: Singin2Component},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
