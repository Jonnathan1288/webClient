import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';

//Varias peticiones al mismo tiempo
import { Observable, Subject } from 'rxjs';

//El clienete para obatener los datos de Spring
// import {HttpClient} from '@angular/common/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

//De otra manera podemos utilizar el map
import { map } from 'rxjs/operators';

//Actualización en tiempo real..
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly$ = new Subject<void>();
  getac$() {
    return this.readonly$;
  }
  private urlEndPoint: string = 'https://aapruebas-production.up.railway.app/api/clientes';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    );

  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, { headers: this.httpHeaders })
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(this.urlEndPoint + '/' + id);
  }

  public getlikeClient(id: string): Observable<any> {
    return this.http.get(this.urlEndPoint + "/like/" + id);

  }

}
