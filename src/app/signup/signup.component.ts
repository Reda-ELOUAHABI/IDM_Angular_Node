import { Component, OnInit } from '@angular/core';
import {ServiceFilmService} from "../Service/service-film.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private service: ServiceFilmService) { }

  ngOnInit(): void {
  }

  sendUser(username: string, password: string) {
// alert(username+password);
this.service.PostUser(username,password).subscribe(res => alert(res))
  }
}
