import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fudo-nav-accordion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fudo-nav-accordion.component.html',
  styleUrls: ['./fudo-nav-accordion.component.scss'],
})
export class FudoNavAccordionComponent {
  @Input() isOpenMenu = false;
  @Output() closeMenu = new EventEmitter<boolean>();
}
