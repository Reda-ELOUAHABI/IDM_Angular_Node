import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movies-app';
}

// Installation Setup
/*
npm install -g typescript
tsc --watch
npm install -g @angular/cli
*/
// Run App
/*
ng new movies-app --skip-tests=true
ng serve --port 5000
ng serve -o
*/
//Manip
//  ng g c film view [ng generate component]