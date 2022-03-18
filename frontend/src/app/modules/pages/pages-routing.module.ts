import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokesComponent } from './jokes/jokes.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'projects/jokes',
    component: JokesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
