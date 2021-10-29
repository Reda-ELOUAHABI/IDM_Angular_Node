import { Component, OnInit } from '@angular/core';
import "../Modules/Films"
import { film } from '../Modules/Films';
import { ServiceFilmService } from '../Service/service-film.service';
// https://www.themoviedb.org/settings/api/details
// https://developers.themoviedb.org/3/getting-started/search-and-query-for-details
// https://angular.io/guide/http
@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {

  // array of films
  //   films = [
  //     new film(1,1,"Film 1",
  //     "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_SY445_.jpg"
  //     ,this.makeid(20),this.makeid(20), "Poster Path"),
  //     new film(2,2,
  //     "Film 2", 
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kM38v0N_NVi96FOrQqiOWX16jl2KlQvMREa1ZcD6GhWa_gU2Y-XjAkTJ8q-RehLuLgw&usqp=CAU"
  //     , this.makeid(20),this.makeid(20),this.makeid(20)),
  //     new film(3,1,"Film 3", 
  // "https://media.senscritique.com/media/000008892591/source_big/Abdou_chez_les_Almohades.jpg"
  //      , this.makeid(20),this.makeid(20),this.makeid(20)),
  //    ]


  films = [];
  query = ' aa';
  constructor(private serviceFilmService: ServiceFilmService) { }

  ngOnInit(): void {
    // this.films = this.serviceFilmService.films;
    //  I need to fill films here
    this.serviceFilmService.getAllFilms(1).subscribe((res:any) => {
      this.films = res.results;
    });
  }

  makeid(length: Number) {
    var result = '';
    var characters = 'ABCD \n EFGHIJKLM NOPQ \n RSTUVW XYZab \n cdefghijkl \n mnopqrst \n uvwxyz 01234 56789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  ShowFilms(query: string) {
    console.log(query);
    this.serviceFilmService.getSpecificFilm(query, 0).then(res => {
      this.films = res;
    });
    // this.serviceFilmService.getFilmsFromServer("aa",10);
  }



  currentPage = 1;
  onNext() {
    
      this.currentPage++;
      this.serviceFilmService.getAllFilms(this.currentPage).subscribe((res:any) => {
        this.films = res.results;
      });
  }


  onPrevious() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.serviceFilmService.getAllFilms(this.currentPage).subscribe((res:any) => {
        this.films = res.results;
      });
    }
  }



  // todo: read down : 
  // To implemetn : binding a custom event  at
  // https://hidevs.net/course/angular-the-complete-guide 
  //  5. Components & Databinding Deep Dive 6. Binding to Custom Events
  // ShowCurrentFilmFromTheParent($event){

  // }


}


// <!-- *ngFor="let film of films" [film]="film"  -->