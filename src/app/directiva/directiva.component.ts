import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaLenguajes: string[] = ['TypeScript', 'JavaScript', 'JAava SE', 'C#', 'PHP', 'VB.Net', 'Python'];
  listaTemasTS: string[] = ['El manual de TypeScript', 'Lo basicos', 'Tipos de objetos'];
  listaTemasJS: string[] = ['Comprndiendo los framneworks JavaScript de lado de cliente', 'Estructuras de datos en JavaScript'];
  listaLTemasC: string[] = ['Cración de un proyecto', 'Errores Sintacticos y logicos'];

  habilitar:  boolean = true;
  constructor() { }

  setHabilitar(): void{
    this.habilitar = (this.habilitar == true)? false: true;
  }

}
