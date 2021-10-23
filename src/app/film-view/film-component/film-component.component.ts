import { Component, Input, OnInit } from '@angular/core';
import { film } from 'src/app/Modules/Films';

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']


})
export class FilmComponentComponent implements OnInit {
  @Input() film: any;

  // Assigning an Alias to Custom Properties
  // if we want to use a differenbnt name on the child componenet , we can use 
  // @Input('thedifferentName') film: any;  and at the chiold [thedifferentName]="XX"

  constructor() { }
  ngOnInit(): void {
  }
  showCurrentFilm(film: film) {
    alert("title :" + film.title + " description : " + film.overview);
  }
  getImageFromServer(urlImg: string){
    if(urlImg!=null){
      const ImgFIlm = "https://image.tmdb.org/t/p/w500/"+ urlImg;
    return ImgFIlm;
    }
    else{
      return "https://static.wikia.nocookie.net/versailles-tv/images/f/f5/No_photo.jpg/revision/latest?cb=20200809194308&path-prefix=fr";
    }
  }

}
