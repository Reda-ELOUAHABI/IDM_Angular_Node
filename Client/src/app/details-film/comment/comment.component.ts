import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { ServiceFilmService } from "../../Service/service-film.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() filmId = '';

  comments: any;

  constructor(private serviceFilmService: ServiceFilmService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.serviceFilmService.GetCommentOfFilm(this.filmId).subscribe((res: any) => {
      this.comments = res.comments;
      // console.log(this.comments)
    })
  }

  addComment(comment: string) {
    // console.log(this.filmId+"       "+this.newComment)
    this.serviceFilmService.AddComment(this.filmId, comment).
      subscribe((res: any) =>
        console.log("comment server respond = " + res)
      )
    // this.comments.clear();
    // window.location.reload();
    this.serviceFilmService.GetCommentOfFilm(this.filmId).subscribe((res: any) => {
      this.comments = res.comments;
      // console.log(this.comments)
    })
    // detect Changes On Angular
    this.ref.detectChanges();
    // this.ref.markForCheck();
    alert("Comment added")
  }
}
