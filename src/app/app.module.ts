import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { BootstrapModulesModule } from './bootstrap-module/bootstrap-modules.module';
import { LoginComponent } from './login/login.component';
import { UsuarioModule } from './usuario/usuario.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './service/usuario.service';
import { RepositorioService } from './service/repositorio.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UsuarioModule,
    BootstrapModulesModule,
    ReactiveFormsModule,
    HttpClientModule,
    

  ],
  providers: [UsuarioService, RepositorioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
