import { Component } from '@angular/core';
import { FudoNavComponent } from '../fudo-nav/fudo-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fudo-header',
  standalone: true,
  imports: [CommonModule, FudoNavComponent],
  templateUrl: './fudo-header.component.html',
  styleUrls: ['./fudo-header.component.scss']
})
export class FudoHeaderComponent {

}
