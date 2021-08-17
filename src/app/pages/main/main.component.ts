import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog, Status } from 'src/app/interfaces/interfaces';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public blog: Blog = new Blog();

  constructor(private mainSV: MainService,
               private router: Router) { }

  ngOnInit(): void {
    this.loadBlogs(Status.Remote);
  }

  public loadBlogs(option: number) {

    this.blog = new Blog();

    switch (option) {
      case Status.Local:
        this.mainSV.getLocalBlogs().then((data: Blog) => {

          this.blog = data;
          console.log('sdsd', this.blog);
        });
        break;
        case Status.Remote:

          this.mainSV.getRemoteBlogs().subscribe((data: Blog) => {
          this.blog = data;
          });
          break;
          case Status.RemotePlus:

            this.mainSV.getRemotePlusBlogs().subscribe((data: Blog) => {
            this.blog = data;
            });
            break;
      default:

        break;
    }
  }

  public goDetail(idx: number) {
    this.router.navigate(['/post/' + idx]);

  }

}
