import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './admin-list/admin-list.component';
import { AdminPostAddComponent } from './admin-post-add/admin-post-add.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full',
  },
  // Routes of Template
  {
    path: 'posts',
    component: AdminListComponent,
  },
  {
    path: 'post/add',
    component: AdminPostAddComponent,
  },
  {
    path: 'post/edit/:id',
    component: AdminPostAddComponent
   }
];

@NgModule({
  declarations: [
    AdminPostAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AdminModule { }
