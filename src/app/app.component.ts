import { Component } from '@angular/core';

import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'app';
  urlTodoBien="https://i1.wp.com/gifs.org.es/gifs/2014/09/snoopy-hulahoop.gif?resize=257%2C175";
  conexion;

  constructor(private http: Http) {
  }

  llamada(){
    console.log("llamando data de backend");
    this.conexion = this.http.get('/raspberry').pipe(map(data => {
      console.log("got: ", data);
      return data.json();
    }));
  }
}
