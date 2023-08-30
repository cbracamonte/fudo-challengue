import { Component } from '@angular/core';
import { FudoNavComponent } from '../fudo-nav/fudo-nav.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FudoNavAccordionComponent } from '../fudo-nav-accordion/fudo-nav-accordion.component';

@Component({
  selector: 'app-fudo-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FudoNavComponent,
    FudoNavAccordionComponent,
  ],
  templateUrl: './fudo-header.component.html',
  styleUrls: ['./fudo-header.component.scss'],
})
export class FudoHeaderComponent {
  isOpenMenu = false;
}
