import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-columna-izquierda',
  templateUrl: './columna-izquierda.component.html',
  styleUrls: ['./columna-izquierda.component.css']
})
export class ColumnaIzquierdaComponent implements OnInit {
  urlImagenUno="http://www.eduliticas.com/wp-content/uploads/2015/07/grafico-barras.png";
  urlImagenDos="http://identian.co/wp-content/uploads/2016/05/NUESTRA-EMPRESA.png";
  urlImagenTres="https://image.flaticon.com/icons/png/512/40/40105.png";
  nombreBotonUno='Graficas';
  nombreBotonDos='Datos Pantera';
  nombreBotonTre='Proceso';

  constructor() { }

  ngOnInit() {
  }

}
