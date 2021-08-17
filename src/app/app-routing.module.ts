import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './pages/admin/admin-list/admin-list.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [

  // Routes of Template
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'post/:id',
    component: BlogDetailComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
