import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

 heroes: string[] = ['superman', 'flash', 'hulk','spidermann','hemann'];

 borrarHeroe(): void {
   this.heroes.shift();
 }

}
