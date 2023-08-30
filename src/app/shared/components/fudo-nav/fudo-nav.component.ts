import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fudo-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fudo-nav.component.html',
  styleUrls: ['./fudo-nav.component.scss'],
})
export class FudoNavComponent {}
