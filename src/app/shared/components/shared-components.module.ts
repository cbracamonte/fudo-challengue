import { NgModule } from '@angular/core';
import { FudoNavComponent } from './fudo-nav/fudo-nav.component';
import { FudoHeaderComponent } from './fudo-header/fudo-header.component';
import { FudoFooterComponent } from './fudo-footer/fudo-footer.component';



@NgModule({
  declarations: [
  ],
  imports: [
    FudoHeaderComponent,
    FudoFooterComponent,
    FudoNavComponent
  ],
  exports: [
    FudoHeaderComponent,
    FudoFooterComponent,
    FudoNavComponent,
  ]
})
export class SharedComponentsModule { }
