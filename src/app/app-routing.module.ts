import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './pages/admin/admin-list/admin-list.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  // Routes of Template
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'admin',
    component: AdminListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
