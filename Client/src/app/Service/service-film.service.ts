import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NullTemplateVisitor } from '@angular/compiler';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';



const URL = environment.URL;

const FireBaseURL = "https://movies-app-33617-default-rtdb.firebaseio.com";
const apiKey = "api_key=653c2ee8cd95fbd2626732aa98a8333e";
const remoteHost = "https://api.themoviedb.org/3";

//todo: On Change Model

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
  // getAllFilms(page: number) {
  //   const AllFilms = "https://api.themoviedb.org/3/movie/popular?api_key=653c2ee8cd95fbd2626732aa98a8333e&page=" + page;
  //   return this.http.get(AllFilms);
  // }

  // Using les Subjects [Programmation Reactive avec RxJS]= Notification Imediat des changement
  films: Array<any> = [];
  flimsSubject = new Subject<any>();
  getAllFilms(page: number) {
    const AllFilms = remoteHost+"/movie/popular?"+apiKey+"&page=" + page;
    return this.http.get(AllFilms).subscribe((films: any) => {
      this.films = films;
      // it fills su=ubject
      this.emitFilmsSubject();
    });
  }

  emitFilmsSubject() {
    this.flimsSubject.next(this.films
      // this.films.slice()
    );
  }

  getSpecificFilm(query: string, page: number) {
    //
    const FilmURL = remoteHost+"/search/movie?"+apiKey+"&query=" + query;
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

  getSpecificFilmOnChange(query: string) {
    //
    const FilmURL = remoteHost+"/search/movie?"+apiKey+"&query=" + query;
    return this.http.get(FilmURL);
  }

  getFilmDetail(id: any) {
    const url = remoteHost+'/movie/' + id + '?api_key=53cd43478eccb1239bfa57194c3cfe90&language=en-US&append_to_response=videos';
    console.log(url);
    // alert(url)
    return this.http.get(url);
  }

  // getFilmDetail(id: any) {
  //   const url = 'https://api.themoviedb.org/3/movie/' + id + '?api_key=53cd43478eccb1239bfa57194c3cfe90&language=en-US';
  //   return this.http.get(url).toPromise().then((res: any) => { return res; }, (error) => { console.log("Error Occcured : " + error) });
  // }


  PostFilmToFavorie(id: any) {
    /*curl -X PUT -d '{ "moviesFavories": { "id": "21"}}' 'https://movies-app-33617-de
fault-rtdb.firebaseio.com/movies.json'*/
    const url = FireBaseURL+"/movies.json";
    return this.http.post(url, id);
  }
  GetFilmsOnFavories() {
    const url = FireBaseURL+"/movies.json";
    return this.http.get(url);
  }

  //  Auth
  PostUser(username: any, password: any) {
    const url = FireBaseURL+"/Users.json";
    const body = { username: username, password: password };
    return this.http.post(url, body);
  }
  GetUsers() {
    const url = FireBaseURL+"/Users.json";
    return this.http.get(url);
  }

  //Register a user
  Register(username: any,email: any, password: any ){
    const url = URL + "/api/users/signup";
    const body = { username: username.toString(), email: email.toString() ,  password: password.toString() };
    return this.http.post(url,body);
  }
  //login a user
  Login(email: any, password: any ){
    const url = URL + "/api/users/signin";
    const body = {email: email.toString() ,  password: password.toString() };
    return this.http.post(url,body);
  }

  //Comments
  GetCommentOfFilm(filmId: any) {
    const url = URL + "/api/comment/" + filmId;
    return this.http.get(url);
  }

  AddComment(filmId: any, comment: any) {
    const url = URL + "/api/comment";
    const body = { filmId: filmId, comment: comment };
    return this.http.post(url, body);
  }

}
