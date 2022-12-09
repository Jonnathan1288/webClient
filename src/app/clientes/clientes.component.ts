import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
// ya no empleo ya que el sercicio me lo va ofrecer..
//import {CLIENTES} from './clientes.json';

//Uso del service
import { ClienteService } from './cliente.service';

//Importamos la libreria de sweetaler2
import Swal from 'sweetalert2';

//Import of data pipe

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [DatePipe],
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  public clientep: Cliente = new Cliente();

  date: Date;
  datea: string;
  data_date: boolean=false;
  dataname: boolean=false;
  nameOperation: string;

  constructor(
    private clienteService: ClienteService,
    private miDatePipe: DatePipe
  ) {}

  ngOnInit() {
    //this.clientes = CLIENTES;
    //this.clientes = this.clienteService.getClientes();
    this.data_date = false;

    this.date = new Date();
    this.datea = this.miDatePipe.transform(this.date, 'yyyy-MM-dd');

    this.getclientes();
    this.nameoperationCU();
  }

  getclientes() {
    this.clienteService
      .getClientes()
      .subscribe((clientes) => (this.clientes = clientes));
  }

  public create(): void {
    this.clienteService.create(this.clientep).subscribe(
      (data) => {
        this.limpiarCampos()
        Swal.fire('Cliente guardodo', `Cliente  guardado con éxito`, 'success');
        this.getclientes();
      },
      (error) => {
        Swal.fire('Cliente guardodo', `Cliente  guardado con éxito`, 'error');
      }
    );
  }

  cargarCliente(id): void {
    this.clienteService.getCliente(id).subscribe((cliente) => (this.clientep = cliente));
    this.dataname = true;
    this.data_date =true;
    this.nameoperationCU();
  }

  deleteClient(id: any) {
    this.clienteService.deleteCliente(id).subscribe(
      (data) => {
        Swal.fire('El cliente eliminado', `Eliminado correcto`, 'success');
        console.log(data);
        this.getclientes();
      },
      (err) => {
        console.log(err);
        Swal.fire('Error al eliminar cliente', `Erro elimina`, 'error');
        console.log('Lo que me viene en el err --> ' + err.error.message);
      }
    );
  }

  capid: string;

  getLikeclien(evento) {
    let id = evento.target.value;
    console.log(id);
    if (evento.target.value == '') {
      this.getclientes();
    } else {
      this.clienteService.getlikeClient(id).subscribe(
        (clientes1) => {
          this.clientes = clientes1;
          console.log(clientes1);
        },
        (error) => console.log(error)
      );
    }
  }

  nameoperationCU(){
    if(this.dataname == true){
      this.nameOperation = 'Actualizar';
    }else{
      this.nameOperation = 'Crear';
    }
  }

  limpiarCampos(){
    this.clientep.nombre = '';
    this.clientep.apellido = '';
    this.clientep.email = '';
    this.dataname = false
    this.nameoperationCU();
  }
  
}
