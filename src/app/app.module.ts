import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/admin/list/list.component';
import { AdminListComponent } from './pages/admin/admin-list/admin-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ListComponent,
    AdminListComponent,
    BlogItemComponent,
    FooterComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
