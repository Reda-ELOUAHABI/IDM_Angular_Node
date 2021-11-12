import { Component, OnInit } from '@angular/core';
import {ServiceFilmService} from "../Service/service-film.service";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  filmsIds: any;
  films =[];
  constructor(private serviceFilmService: ServiceFilmService) { }

  async ngOnInit(): Promise<void> {
    this.serviceFilmService.GetFilmsOnFavories().subscribe((Response: any) => {
      console.log(Object.values(Response));
      this.filmsIds = Object.values(Response);
    });

    await new Promise(f => setTimeout(f, 2000));
    this.filmsIds.forEach(
      (id: any) => {
        // console.log(id);
        this.serviceFilmService.getFilmDetail(id).subscribe((result: any) => {
          console.log(result)
          // @ts-ignore
          this.films.push(result)
        })


      }
    );
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
