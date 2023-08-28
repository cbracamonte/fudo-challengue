import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'news', loadChildren: () => import('./features/news/news.module').then((m) => m.NewsModule)
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('./features/dashboard/dashboard.module').then(
  //       m => m.DashboardModule
  //     ),
  // },
  // { path: 'login', component: LoginComponent },

  // { path: 'additional', component: AdditionalComponent },
  // { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
