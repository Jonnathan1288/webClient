import { Component, OnInit } from '@angular/core';

//Importación de la clase de proveedores..
import {Proveedores} from './proveedores';

//Importación del service
import {ProveedoresService} from './proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedoresList: Proveedores[] = [];
  constructor(private proveedorSevice: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedoresList = this.proveedorSevice.getProveedores();
  }

  ListarProveedores(){
    for(let i =0; i < this.proveedoresList.length; i++){
      console.log(this.proveedoresList[i]);
    }
  }

  busquedaProveedor(cod_pro){
    let encontrado = false;
    let nombres = '',  apellidos = '';

    for(let valorProveedor in this.proveedoresList){
      const dao = this.proveedoresList[valorProveedor];
      console.log(dao.cod_proveedor);
      if(dao.cod_proveedor === cod_pro){
        nombres = dao.nombre;
        apellidos = dao.apellido;
        console.log('Encontrado-> '+dao.cod_proveedor);
        encontrado = true;
        break;
      }
    }
    if(encontrado == true){
      let valorResultadod = confirm('Esta seguro de contactar con el proveedor/a '+nombres+' '+apellidos);
      if(valorResultadod == true){
        alert('Contactando..');
      }else{
        alert('Operación cancelada..');
      }
    }
  }

}
