import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article, Blog } from 'src/app/interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {


  private BlogKey = 'Blog';
  constructor(private http: HttpClient) {


  }

  async getArticle(idx: number) {
    const blog = await this.getLocalBlogStored();
    return blog.articles[idx];
  }

  async saveArticle(article: Article, idx: number = 0) {
    const blog = await this.getLocalBlogStored();
    if (idx === 0) {
      blog.articles.push(article);
    }
    else {
      blog.articles[idx] = { ... article }
    }

    blog.totalArticles = blog.articles.length;

    localStorage.setItem(this.BlogKey, JSON.stringify(blog));
  }

  async deleteArticle(idx: number) {
    const blog = await this.getLocalBlogStored();
    blog.articles.splice(idx, 1);
    blog.totalArticles = blog.articles.length;
    localStorage.setItem(this.BlogKey, JSON.stringify(blog));
  }

  async getLocalBlogs() {
    return await this.getLocalBlogStored();
  }


  private getLocalBlogStored() {
    return new Promise<Blog>(resolve =>
      {
        let blog = new Blog();
        let localData = localStorage.getItem(this.BlogKey);
         if (localData !== null) {
           blog =  Object.assign(new Blog(), JSON.parse(localData));
         }
         resolve(blog);
      });
  }

  getRemoteBlogs() {
    return this.http.get<Blog>(`${environment.remoteApi}/search?q=${environment.keyword}&token=${environment.token}`);
  }

  getRemotePlusBlogs() {
    return this.http.get<Blog>(`${environment.remoteApiPlus}blog`);
  }
}
