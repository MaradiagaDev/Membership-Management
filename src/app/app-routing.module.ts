import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'leaflet';
import { LoginComponent } from './login/login.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'Home',component:PantallaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
