import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    
   
  }
  resultado!:string;

    formularioLogin = new FormGroup(
    {
      Usuario:new FormControl('',[Validators.required]),
      Password:new FormControl('',[Validators.required])
    });

  Submit(){
    let Validaciones : HTMLElement | null = document.querySelector(".ValidacionesLogin");
    Validaciones && (Validaciones.style.display= "inline");
  }
}
