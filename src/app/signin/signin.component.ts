import { Component, OnInit } from '@angular/core';
import {ServiceFilmService} from "../Service/service-film.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private  service: ServiceFilmService,
               private route: ActivatedRoute,
               private router: Router ) { }
  allUsers: Array<Map<String, String>> =[];
  logged=false;
  ngOnInit(): void {
  }

  TestUser(username: string, password: string) {

    this.service.GetUsers().subscribe((res:any)=>{
      // console.log(Object.values(res));
      Object.values(res).forEach((value: any) => {
  if (username===value.username && password===value.password){
    this.logged=true;
    this.router.navigate(['connected'])
    console.log(this.logged)
    return;


  }
        // console.log(this.logged)
        // this.allUsers.map(value);
        // console.log(value.password);

         // console.log("here")
      })
      if (this.logged==false){
        alert("incorrect inputs")
      }

      // console.log(res)
    })

  }
}
