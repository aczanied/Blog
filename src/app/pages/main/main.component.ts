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
  public selectedOption: number = 0;

  constructor(private mainSV: MainService,
               private router: Router) { }

  ngOnInit(): void {
    this.loadBlogs(Status.Local);
  }

  public loadBlogs(option: number) {

    this.blog = new Blog();

    switch (option) {
      case Status.Local:
        this.mainSV.getLocalBlogs().then((data: Blog) => {
          this.selectedOption = Status.Local;
          this.blog = data;
        });
        break;
        case Status.Remote:

          this.mainSV.getRemoteBlogs().subscribe((data: Blog) => {
            this.selectedOption = Status.Remote;
          this.blog = data;
          });
          break;
          case Status.RemotePlus:
            this.mainSV.getRemotePlusBlogs().subscribe((data: Blog) => {
              this.selectedOption = Status.RemotePlus;
            this.blog = data;
            });
            break;
      default:

        break;
    }
  }

  public goDetail(idx: number) {

    if (this.selectedOption === Status.Local) {
      this.router.navigate(['/post/' + idx]);
      return;
    }

    window.open(this.blog.articles[idx].url , "_blank");
  }


}
