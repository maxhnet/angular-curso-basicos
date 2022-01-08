import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: '../contador/contador.component.html',
  styleUrls: ['../app.component.css']
})

export class ContadorComponent {
  public titulo: string = 'Contador Appss';
  public numero: number = 10;
  public base  : number = 5;

  public sumar():number {
    return this.numero = this.numero + 1;
  }

  public restar():number {
    return this.numero = this.numero - 1;
  }

  public acumular(numero: number):number{
    return this.numero += numero;
  }
}
