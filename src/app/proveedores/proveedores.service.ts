import { Injectable } from '@angular/core';

//Impostaciones json y clase
import {Proveedores} from './proveedores';
import {PROVEEDORES} from './proveedores.json';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor() { }

  getProveedores(): Proveedores[] {
    return PROVEEDORES
  }

  
}
