import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceFilmService {
  // Url="https://api.themoviedb.org/3/movie/550?api_key=653c2ee8cd95fbd2626732aa98a8333e" ;
  constructor(private http: HttpClient) { }
// Using Promise
  // getAllFilms(page: number) {
  //   // alert("aaHello form Service");
  //   const AllFilms = "https://api.themoviedb.org/3/movie/popular?api_key=653c2ee8cd95fbd2626732aa98a8333e&page=" + page;
  //   return this.http.get(AllFilms).
  //     toPromise().then((Response: any) => {

  //       // jsonResult = response.json();
  //       //  this.films=Response["result"]
  //       console.log("\n\n" + Response.results);

  //       return Response.results;
  //     },
  //       (error) => {
  //         console.log("Error ", error);
  //       }
  //     )
  // }

  // Using Observer/Observable from rxjs
  getAllFilms(page: number) {
    const AllFilms = "https://api.themoviedb.org/3/movie/popular?api_key=653c2ee8cd95fbd2626732aa98a8333e&page=" + page;
    return this.http.get(AllFilms);
  }

// // Using les Subjects [Programmation Reactive avec RxJS]= Notification Imediat des changement
// films: Array<any> = [];
// flimsSubject = new Subject<any>();
//   getAllFilms(page: number) {
//     const AllFilms = "https://api.themoviedb.org/3/movie/popular?api_key=653c2ee8cd95fbd2626732aa98a8333e&page=" + page;
//     return this.http.get(AllFilms).subscribe((films:any)=>{
//       this.films=films;
//       // it fills su=ubject
//       this.emitFilmsSubject();
//     });
//   }
//   emitFilmsSubject() {
//     this.flimsSubject.next(this.films.slice());
//   }

  getSpecificFilm(query: string, page: number) {
    // 
    const FilmURL = "https://api.themoviedb.org/3/search/movie?api_key=653c2ee8cd95fbd2626732aa98a8333e&query=" + query;
    return this.http.get(FilmURL).
      toPromise().then((Response: any) => {
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

  getFilmDetail(id: any) {
    const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=53cd43478eccb1239bfa57194c3cfe90&language=en-US';

    return this.http.get(url).toPromise().then((res: any) => { return res; }, (error) => { console.log("Error Occcured : " + error) });

  }

  // getFilmDetail(id: any) {
  //   const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=53cd43478eccb1239bfa57194c3cfe90&language=en-US';

  //   return this.http.get(url).toPromise().then((res: any) => { return res; }, (error) => { console.log("Error Occcured : " + error) });

  // }

}
