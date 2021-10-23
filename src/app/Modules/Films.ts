export class film{
  id: number; // _id
  vote_averrage :number;
  title: string;
  poster_path:string;
  original_title:string;
  overview:string;
  release_date:string;

 
  constructor(id: number,vote_averrage:number,title: string,url_image: string, original_title: string,
    overview:string,release_date:string){
    this.id=id;
    this.vote_averrage=vote_averrage;
    this.title=title;
    this.poster_path=url_image;
    this.original_title=original_title;
    this.overview=overview;
    this.release_date=release_date;

}
}

// export class film{
//     id: number; // _id
//     title: string;
//     img: string;
//     year: number;
//     score: number;
//     description: string;

//     constructor(id: number,title: string,img: string, description: string ,
//           year: number ,score?: number ){
//         this.id=id;
//         this.title=title;
//         this.img=img;
//         this.description=description;
//         if(score){
//             this.score = score;
//           }else{
//             this.score = 0;
//           }
//         this.year=year;
//     }
// }