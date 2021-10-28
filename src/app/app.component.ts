import { Component,ViewChild } from '@angular/core';
import { NumeroscalComponent } from './numeroscal/numeroscal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto006';
  @ViewChild('numeroscal1') borrar!: NumeroscalComponent;


   funcionBorrar(opc: String){
    switch(opc){
      case 'ac':
        this.borrar.borrarPantalla(opc);
        break;
      case 'del':
       this.borrar.borrarPantalla(opc);
       break;
    }
   }

 

}
