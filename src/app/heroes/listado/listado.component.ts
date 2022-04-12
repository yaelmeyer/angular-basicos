import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ['spiderman', 'ironman','hulk', 'thor'];
  heroeBorrado: string[]=[];

  borrarHeroe():void {
      this.heroeBorrado =  this.heroes.splice(this.heroes.length-1);
  }
 

}
