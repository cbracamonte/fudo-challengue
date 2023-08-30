import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { FudoNewsCardComponent } from './components/fudo-news-card/fudo-news-card.component';
import { NewsComponent } from './page/news/news.component';

@NgModule({
  declarations: [NewsComponent],
  imports: [CommonModule, NewsRoutingModule, FudoNewsCardComponent],
  exports: [],
})
export class NewsModule {}
