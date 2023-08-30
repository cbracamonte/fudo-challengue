import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './page/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
  },
  // {
  //     path: 'news/:id',
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
