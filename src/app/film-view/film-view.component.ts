import { Component, OnInit } from '@angular/core';
import "../Modules/Films"
import { film } from '../Modules/Films';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {


  // array of films
  films = [
    new film(1,"Film 1", 
    "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_SY445_.jpg"
    ,this.makeid(20), 2001),
    new film(2,"Film 2", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kM38v0N_NVi96FOrQqiOWX16jl2KlQvMREa1ZcD6GhWa_gU2Y-XjAkTJ8q-RehLuLgw&usqp=CAU"
    , this.makeid(20),2001,1),
    new film(3,"Film 3", 
"https://media.senscritique.com/media/000008892591/source_big/Abdou_chez_les_Almohades.jpg"
     , this.makeid(20),2001,1),
   ]

  constructor() { }

  ngOnInit(): void {
  }

  showCurrentFilm(film:film){
    alert("title :"+ film.title + " description : " + film.description);
  }

  makeid(length: Number) {
  var result           = '';
  var characters       = 'ABCD \n EFGHIJKLM NOPQ \n RSTUVW XYZab \n cdefghijkl \n mnopqrst \n uvwxyz 01234 56789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}




}
