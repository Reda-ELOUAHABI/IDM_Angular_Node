export class film{
    id: number; // _id
    title: string;
    img: string;
    year: number;
    score: number;
    description: string;

    constructor(id: number,title: string,img: string, description: string ,
          year: number ,score?: number ){
        this.id=id;
        this.title=title;
        this.img=img;
        this.description=description;
        if(score){
            this.score = score;
          }else{
            this.score = 0;
          }
        this.year=year;

    }
    
}