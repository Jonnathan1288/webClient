import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application with Angular js';

  curso: string = 'ISTA M4B';

  profesor: string = 'Ing. Carmen';

  estudiante: string = 'Jonnathan Gallegos';
}
