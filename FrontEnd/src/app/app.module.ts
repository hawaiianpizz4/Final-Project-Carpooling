import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
// Componentes
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { FooterComponent } from './components/footer/footer.component';

import { IniciarsesionComponent } from './components/iniciarsesion/iniciarsesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TokenInterceptorComponent } from './components/token-interceptor/token-interceptor.component';
import { SignupComponent } from './components/signup/signup.component';

import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ListarProductosEdicionComponent } from './components/listar-productos-edicion/listar-productos-edicion.component';
import { Signups2Component } from './components/signups2/signups2.component';
import { Singin2Component } from './components/singin2/singin2.component';
import { PrivateTasks2Component } from './components/private-tasks2/private-tasks2.component';
import { ListarProducto2Component } from './components/listar-producto2/listar-producto2.component';
import { ListarRutas2Component } from './components/listar-rutas2/listar-rutas2.component';
import { ListarUsuario2Component } from './components/listar-usuario2/listar-usuario2.component';
import { ListarUsuario3Component } from './components/listar-usuario3/listar-usuario3.component';
import { ListarproductouserComponent } from './components/listarproductouser/listarproductouser.component';
import { Usuario2Component } from './components/usuario2/usuario2.component';




@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    BeneficiosComponent,
    FooterComponent,
    IniciarsesionComponent,
    InicioComponent,
    NavbarComponent,
    RegistrarseComponent,
    UsuarioComponent,
    ListarUsuarioComponent,
    PrivateTasksComponent,
    SigninComponent,
    TasksComponent,
    TokenInterceptorComponent,
    SignupComponent,
    ListarProductosEdicionComponent,
    Signups2Component,
    Singin2Component,
    PrivateTasks2Component,
    ListarProducto2Component,
    ListarRutas2Component,
    ListarUsuario2Component,
    ListarUsuario3Component,
    ListarproductouserComponent,
    Usuario2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
