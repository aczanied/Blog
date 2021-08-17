import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/interfaces';
import { MainService } from '../../main/main.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  public blog: Blog = new Blog();
  constructor( private router: Router, private mainSV: MainService) {

   }

  ngOnInit(): void {
    this.loadLocalBlogs();
  }

  loadLocalBlogs() {
   this.mainSV.getLocalBlogs().then( data => {
     this.blog = data;
   });
  }

  editItem(idx: number) {
    this.router.navigate(['/admin/post/edit/' + idx]);
  }
  deleteItem(idx: number) {
    this.mainSV.deleteArticle(idx).then(() => {
      this.loadLocalBlogs();
    });
  }

  public addPost() {
    this.router.navigate(['/admin/post/add']);
  }

}
