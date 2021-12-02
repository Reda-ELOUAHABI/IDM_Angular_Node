import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceFilmService} from "../Service/service-film.service";
import {film} from "../Modules/Films";


@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {
  film : any;
  filmId :any;


  constructor(
    private roote: ActivatedRoute,
    private serviceFilmService: ServiceFilmService
  ) { }

  ngOnInit(): void {
    const id :number = this.roote.snapshot.params['id'];
    this.filmId=id;
    //using Observable
    // this.roote.paramMap.subscribe(res =>
    // {
    //
    // });
    this.serviceFilmService.getFilmDetail(id).subscribe((result:any)=>{
      this.film=result;
      // console.log(film)
    })}
  getImageFromServer(urlImg: string){
    if(urlImg!=null){
      const ImgFIlm = "https://image.tmdb.org/t/p/w500/"+ urlImg;
      return ImgFIlm;
    }
    else{
      return "https://static.wikia.nocookie.net/versailles-tv/images/f/f5/No_photo.jpg/revision/latest?cb=20200809194308&path-prefix=fr";
    }
  }

  AddToFavrite(id: any) {
    this.serviceFilmService.PostFilmToFavorie(id).subscribe(res => console.log(res))
  }
}
