import { Component, OnInit } from '@angular/core';
import "../Modules/Films"
import { film } from '../Modules/Films';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {


  // array of films
  films = [
    new film(1,"Film 1", 
    "https://www.cdiscount.com/pdt2/8/1/5/1/700x700/auc2008718365815/rw/version-42x30cm-rouge-john-wick-affiche-film-a.jpg%22,2020,%22Film",
   "this is a desc", 2001),
    new film(2,"Film 1", 
    "https://www.cdiscount.com/pdt2/8/1/5/1/700x700/auc2008718365815/rw/version-42x30cm-rouge-john-wick-affiche-film-a.jpg%22,2020,%22Film",
    "this is a desc",2001,1),
    new film(3,"Film 1", 
    "https://www.cdiscount.com/pdt2/8/1/5/1/700x700/auc2008718365815/rw/version-42x30cm-rouge-john-wick-affiche-film-a.jpg%22,2020,%22Film",
    "this is a desc",2001,1),
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
