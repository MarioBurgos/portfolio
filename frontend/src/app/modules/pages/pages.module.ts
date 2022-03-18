import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects/projects.component';
import { ComponentsModule } from '../components/components.module';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { JokesModule } from '../dad-jokes/jokes.module';
import { JokesComponent } from './jokes/jokes.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    BlogComponent,
    ProjectsComponent,
    JokesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule,
    JokesModule,
    NgxPageScrollCoreModule.forRoot({duration: 1000})
  ],
  exports:[ComponentsModule]
})
export class PagesModule { }
