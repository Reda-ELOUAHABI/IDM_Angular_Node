import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsFilmComponent } from './details-film/details-film.component';
import { FilmViewComponent } from './film-view/film-view.component';
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {FavorisComponent} from "./favoris/favoris.component";
import {NavbarConnectedComponent} from "./navbar-connected/navbar-connected.component";

const routes: Routes = [
  {path:'', component: FilmViewComponent},
  {path: 'details/:id',component: DetailsFilmComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'signin' , component: SigninComponent},
  {path: 'favoris' , component: FavorisComponent},
  {path: 'connected' , component: NavbarConnectedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
