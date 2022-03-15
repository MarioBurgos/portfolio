import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    BlogComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
