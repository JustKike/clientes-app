import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ClientesService } from './clientes/clientes.service';
import { AltaClienteComponent } from './components/alta-cliente/alta-cliente.component';
import { ClientesModule } from './modulos/clientes/clientes.module';
import { ListadoClientesComponent } from './components/listado-clientes/listado-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClientesModule
  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
