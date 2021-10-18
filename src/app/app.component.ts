import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitán América';

  personajes:string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki'];

  PI:number = Math.PI;

  porcentaje:number = 0.224;

  salario:number = 3245;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }
}
