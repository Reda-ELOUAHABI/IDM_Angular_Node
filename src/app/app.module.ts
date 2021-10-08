import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//module : qui va charger l app 
@NgModule({
  // Les components sont ici , il sont ajoute par cli ici , mais si on a fait du copy/past , on doit les ajouter manuelllement import export
  declarations: [
    AppComponent
  ],
  // Les modules 
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Les services pour le concept d'injection de dependance , c'est angulat qui va faire les instanciation au lieu de nous
  providers: [],
  // Le composant de pase de notre SPA
  bootstrap: [AppComponent]
})
export class AppModule { }
