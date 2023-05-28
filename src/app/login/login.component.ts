import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor(private router:Router){} 
  ngOnInit(): void {}

    formularioLogin = new FormGroup(
    {
      Usuario:new FormControl('',[Validators.required]),
      Password:new FormControl('',[Validators.required])
    });

  Submit(){
    let Validaciones : HTMLElement | null = document.querySelector(".ValidacionesLogin");
    Validaciones && (Validaciones.style.display= "inline");

    if(this.formularioLogin.valid){
      this.router.navigate(['/Home']); 
    }
  }
}
