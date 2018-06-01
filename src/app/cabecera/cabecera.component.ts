import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  titulo='Sistema de Seguridad';
  urlLogo="https://altopedia.com/images/5/53/Pantera_logo.png";
  constructor() { }

  ngOnInit() {
  }

}
