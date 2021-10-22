import { Component, Input, OnInit } from '@angular/core';
import { film } from 'src/app/Modules/Films';

@Component({
  selector: 'app-film-component',
  templateUrl: './film-component.component.html',
  styleUrls: ['./film-component.component.css']


})
export class FilmComponentComponent implements OnInit {
  @Input() film: any;
  
  constructor() { }
  ngOnInit(): void {
  }
  showCurrentFilm(film:film){
    alert("title :"+ film.title + " description : " + film.description);
  }

}
