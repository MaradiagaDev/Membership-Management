import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-principal',
  templateUrl: './pantalla-principal.component.html',
  styleUrls: ['./pantalla-principal.component.css']
})
export class PantallaPrincipalComponent implements OnInit {

 constructor(){
 
 }
  ngOnInit(): void {
   
  }
 //TODO:DOM
  //Rotar simbolo de expandir
  Rotar(){

    
      let SimboloExpandir : HTMLElement | null = document.querySelector('#imgDesplegar'); 
      console.log(SimboloExpandir && (SimboloExpandir.style.transform));
      if((SimboloExpandir && (SimboloExpandir.style.transform)) == "rotate(180deg)")
      {
        var respuesta = SimboloExpandir && (SimboloExpandir.style.transform="rotate(0deg)");
        respuesta = SimboloExpandir && (SimboloExpandir.style.transition="0.2s");
        return;
      }
       respuesta = SimboloExpandir && (SimboloExpandir.style.transform="rotate(180deg)");
       respuesta = SimboloExpandir && (SimboloExpandir.style.transition="0.2s");


      return;
  }
}
