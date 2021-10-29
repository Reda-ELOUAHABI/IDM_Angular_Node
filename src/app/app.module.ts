import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { FilmComponentComponent } from './film-view/film-component/film-component.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//module : qui va charger l app 
@NgModule({
  // Les components sont ici , il sont ajoute par cli ici , mais si on a fait du copy/past , on doit les ajouter manuelllement import export
  declarations: [
    AppComponent,
    FilmViewComponent,
    FilmComponentComponent,
  ],
  // Les modules 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // For NgModle /CHange
    FormsModule
  ],
  // Les services pour le concept d'injection de dependance , c'est angulat qui va faire les instanciation au lieu de nous
  providers: [],
  // Le composant de pase de notre SPA
  bootstrap: [AppComponent]
})
export class AppModule { }
