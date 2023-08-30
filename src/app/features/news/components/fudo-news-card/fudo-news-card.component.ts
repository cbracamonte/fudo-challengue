import { Component, Input } from '@angular/core';
import { Articles } from '../../models/news.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fudo-news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fudo-news-card.component.html',
  styleUrls: ['./fudo-news-card.component.scss'],
})
export class FudoNewsCardComponent {
  @Input() article!: Articles;
}
