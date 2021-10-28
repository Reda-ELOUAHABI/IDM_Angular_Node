import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ServiceFilmService {
  films =[];
// Url="https://api.themoviedb.org/3/movie/550?api_key=653c2ee8cd95fbd2626732aa98a8333e" ;
  constructor(private http: HttpClient) { }
  
  getAllFilms(page: number){
    // alert("aaHello form Service");
    const AllFilms =  "https://api.themoviedb.org/3/movie/popular?api_key=653c2ee8cd95fbd2626732aa98a8333e&page="+page;
    return this.http.get(AllFilms).
    toPromise().then((Response: any)=>{

      // jsonResult = response.json();
    //  this.films=Response["result"]
    console.log("\n\n"+Response.results);
    
return Response.results;
    },
    (error) => {
      console.log("Error ", error);
    }
    )
  }
  
  getSpecificFilm( query: string, page: number){
    const FilmURL= "https://api.themoviedb.org/3/search/movie?api_key=653c2ee8cd95fbd2626732aa98a8333e&query="+query;
    return this.http.get(FilmURL).
    toPromise().then((Response: any)=>{
      // jsonResult = response.json();
    //  this.films=Response["result"]
    console.log(Response.results);
    
return Response.results;
    },
    (error) => {
      console.log("Error ", error);
    }
    )
 
  }
 
}
