import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importar el module router
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';

import {ClienteService} from './clientes/cliente.service';
import { ProveedoresComponent } from './proveedores/proveedores.component';

//Consumiir a sprign boot
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component';

//Referente a el form
import {FormsModule} from '@angular/forms';

const routes: Routes= [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent},
  {path: 'proveedores', component: ProveedoresComponent},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    ProveedoresComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
