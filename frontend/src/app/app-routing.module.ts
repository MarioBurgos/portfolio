import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {

        path: '',
        loadChildren: () =>
          import('./modules/pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: "full"
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
