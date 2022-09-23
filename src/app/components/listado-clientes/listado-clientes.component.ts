import { Component, OnInit } from '@angular/core';

import { ClientesService } from 'src/app/clientes/clientes.service';
import { Cliente, Grupo } from 'src/app/modulos/clientes/cliente.model';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes!: Cliente[];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
  }

}
