import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Cliente } from './cliente';

//Importamos al cliente service
import { ClienteService } from './cliente.service';

//Importamos la libreria de sweetaler2
import Swal from 'sweetalert2';

//Imsportamos una ruta mas aparte de el route
import { Router, ActivatedRoute } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DatePipe]
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente()
  public titulo: string = "Crear Nuevo Cliente"

  date: Date;
  datea: string;
  
  dataname: boolean=false;
  nameOperation: string;
  constructor(private clienteService: ClienteService, private router: Router,
    private actiRouter: ActivatedRoute, private miDatePipe: DatePipe) {

  }

  ngOnInit(): void {
    this.date = new Date();
    this.datea = this.miDatePipe.transform(this.date, 'yyyy-MM-dd');
    this.cargarCliente()

    if(this.dataname == true){
      this.nameOperation = 'Actualizar';
    }else{
      this.nameOperation = 'Crear';
    }
  }

  cargarCliente(): void {
    this.actiRouter.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.dataname = true;
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
      }
    })
  }

  public create(): void {
    // let interceptor = this.cliente.email.split('@');

    // let dominio = interceptor[1];

    this.clienteService.create(this.cliente)
      .subscribe(response => {
        this.router.navigate(['/clientes'])
        Swal.fire(
          'Cliente guardodo',
          `Cliente ${response.nombre} guardado con éxito`,
          'success'
        )
      });

    // if(dominio === 'tecazuay.edu.ec'){

    // }else{
    //   Swal.fire(
    //     'El correo no es institucional',
    //     `Corre incorrecto`,
    //     'warning'
    //   )
    // }

    //console.log(valoResultEmail.split('@'));
    // this.clienteService.create(this.cliente).subscribe(
    //   response => this.route.navigate(['/clientes'])
    //   Swal.fire('Cliente guardodo', `Cliente${this.cliente.nombre} guardado con éxito`, 'sucees')
    // )


    // console.log("A realizado un clic")
    // console.log(this.cliente)
  }

  // escribirInput(evento){
  //   let cedulaF = evento.target.value; 

  //   let valor = cedulaF.substr(-1)

  //   cedulaF = cedulaF.trim();

  //   let cedulafinal = cedulaF.split(' ').join('');

  //   this.cliente.email= cedulafinal;
  //   if(valor == '@'){
  //     console.log(cedulaF)
  //     this.cliente.email = cedulafinal+'tecazuay.edu.ec';
  //   }
  // }
}
