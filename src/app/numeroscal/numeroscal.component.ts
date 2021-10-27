import { Component, OnInit ,Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-numeroscal',
  templateUrl: './numeroscal.component.html',
  styleUrls: ['./numeroscal.component.css']
})
export class NumeroscalComponent implements OnInit {

  operador1!: any;
  operador2!: any;
  resultado!: any;

  auxOperacion="";
  pantalla='';
  auxPantalla='';


  constructor() { }

  ngOnInit(): void {

  }


  operar(operacion: String){
    
    switch(operacion){

      case "+": 
        this.operador1 = this.pantalla;
        this.pantalla = "";
        this.operador2 ="";
        this.auxOperacion="+";
      break;

      case "-": 
      this.operador1 = this.pantalla;
      this.pantalla = "";
      this.operador2 ="";
      this.auxOperacion="-";
      break;

      case "*": 
        this.operador1 = this.pantalla;
        this.pantalla = "";
        this.operador2 ="";
        this.auxOperacion="*";
      break;

      case "/": 
        this.operador1 = this.pantalla;
        this.pantalla = "";
        this.operador2 ="";
        this.auxOperacion="/";
      break;

      case "=": 
        switch(this.auxOperacion){
          case "+":
            this.resultado = parseInt(this.operador1) + parseInt(this.operador2)
            this.pantalla = this.resultado;
            this.operador2 ="";

          break;

          case "-":
            this.resultado = parseInt(this.operador1) - parseInt(this.operador2)
            this.pantalla = this.resultado;
            this.operador2 ="";

          break;

          case "*":
            this.resultado = parseInt(this.operador1) * parseInt(this.operador2)
            this.pantalla = this.resultado;
            this.operador2 ="";

          break;

          case "/":
            this.resultado = parseInt(this.operador1) / parseInt(this.operador2)
            this.pantalla = this.resultado;
            this.operador2 ="";

          break;
        }
        break;

        case "ac":
          this.operador2 = "";
          this.pantalla = "";
        break;

        case "del":
          const result = this.pantalla;
          const index = result.length;
          this.auxPantalla='';
          for (let i = 0; i < index-1; i++) {
            this.auxPantalla += result.charAt(i);
          }
          this.pantalla = this.auxPantalla;
        break;
        
    }
  }

  numero(valor: String){
    this.operador2 += valor;
    this.pantalla += valor;

  }

 





}
