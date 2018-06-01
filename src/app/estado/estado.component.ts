import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  nombreBotonUno="Revisar Aarma";
  nombreBotonDos="Apagar Alarma";
  nombreBotonDosyMedio="Encender Alarma";
  nombreBotonTres="Hacer Ruido";
  mensaje="La alarma se encuentra en funcionamiento y no se registra ningun problema";
  urlImagen="https://www.adhesivosnatos.com/wp-content/uploads/2017/04/goku-kame-hame-bola-pegatina.png";
  urlImagenSeguro="https://www.adhesivosnatos.com/wp-content/uploads/2017/04/goku-kame-hame-bola-pegatina.png";
  urlImagenPeligro="https://i.pinimg.com/originals/20/7e/65/207e65b612cf2dec2b36a4ac4af20ea0.png";
  urlPeligroWil="https://i.ytimg.com/vi/-x7IpcrDXpI/hqdefault.jpg";
  todoEsta="Todo esta bien";

  mensajeRevision(){
    this.mensaje = "El Sistema se encuentra en Funcionamiento";
  }
  apagarEncender(){
    const verficarBotn = this.nombreBotonDos === "Apagar Alarma";
    if(verficarBotn){
      this.nombreBotonDos="Encender Alarma";
      this.mensaje="Su hogar se encuentra en peligro";
      this.urlImagen=this.urlImagenPeligro;
      this.todoEsta="Peligro Peligro"
    }else{
      this.nombreBotonDos="Apagar Alarma";
      this.mensaje="Alarma encendida correctamente";
      this.urlImagen=this.urlImagenSeguro;
      this.todoEsta="Mucho menjor";
    }
  }
  ruido(){
    this.urlImagen=this.urlPeligroWil;
    this.mensaje="peligro will robinson - peligro will robinson  -peligro will robinson  - peligro will robinson ";
    this.todoEsta="peligro will robinson  --UwU--- peligro will robinson ";
  }

  constructor() { }

  ngOnInit() {

  }

}
