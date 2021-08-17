import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, Blog } from 'src/app/interfaces/interfaces';
import { MainService } from '../main/main.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  private idx: number = 0;
  article = new Article();
  recentArticles: Article[] = [];

  constructor(private mainSV: MainService,
              public route: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.route.params.subscribe(request => {
      if (request.id !== 0  && request.id !== undefined) {
        this.mainSV.getArticle(request.id).then( result =>
          {
            this.idx = request.id;
            this.article = result;
          })
      }});
      this.loadPost();
  }

 private loadPost() {
  this.mainSV.getLocalBlogs().then((blog: Blog) => {

    this.recentArticles =  blog.articles.splice(this.idx, 1).slice(0, 3);
  });

 }


}
