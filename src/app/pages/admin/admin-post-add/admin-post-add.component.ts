import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Article, Blog, Source } from 'src/app/interfaces/interfaces';
import { MainService } from '../../main/main.service';

@Component({
  selector: 'app-admin-post-add',
  templateUrl: './admin-post-add.component.html',
  styleUrls: ['./admin-post-add.component.scss']
})
export class AdminPostAddComponent implements OnInit {

  article = new Article();
  articleForm: FormGroup = new FormGroup({});
  private idx: number = 0;
  constructor( private mainSV: MainService, private router: Router, public route: ActivatedRoute) {
    this.initializeForm(this.article);
  }

  ngOnInit(): void {
  this.route.params.subscribe(request => {
    if (request.id !== 0  && request.id !== undefined) {
      this.mainSV.getArticle(request.id).then( result =>
        {
          this.idx = request.id;
          this.article = result;
          this.initializeForm(this.article)
        })
    }

  });

  }

  onSubmit() {
    console.log('submitted');
    if (this.articleForm.invalid) {

      return Object.values( this.articleForm.controls ).forEach( control => {
        if ( control instanceof FormGroup ) {
          Object.values(control.controls).forEach( control => control.markAsTouched() );
        } else {
          control.markAsTouched();
        }
      });
    }

    this.article.title = this.articleForm.controls.title.value;
    this.article.description = this.articleForm.controls.description.value;
    this.article.content = this.articleForm.controls.content.value;
    this.article.url = this.articleForm.controls.url.value;
    this.article.image = this.articleForm.controls.image.value;
    this.article.publishedAt = new Date();

    this.article.source =  {
      name: 'Admin',
      url: '#'
    }

    // Storage on local
    this.mainSV.saveArticle(this.article, this.idx ).then(() =>
    {
      this.router.navigate(['/admin/posts']);
    });


  }

  validForm(formName: string) {
    return this.articleForm.get(formName)?.invalid && this.articleForm.get(formName)?.touched;
  }


  initializeForm(article: Article) {
    this.articleForm = new FormGroup({
      title: new FormControl(article.title, Validators.required ),
      description: new FormControl(article.description, Validators.required),
      content: new FormControl(article.content, Validators.required),
      url: new FormControl(article.url, Validators.required),
      image: new FormControl(article.image, [Validators.required, ] ),
    });
  }

}


