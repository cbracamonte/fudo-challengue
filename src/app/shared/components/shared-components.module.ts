import { NgModule } from '@angular/core';
import { FudoNavComponent } from './fudo-nav/fudo-nav.component';
import { FudoHeaderComponent } from './fudo-header/fudo-header.component';
import { FudoFooterComponent } from './fudo-footer/fudo-footer.component';
import { FudoNavAccordionComponent } from './fudo-nav-accordion/fudo-nav-accordion.component';

@NgModule({
  declarations: [],
  imports: [
    FudoHeaderComponent,
    FudoFooterComponent,
    FudoNavComponent,
    FudoNavAccordionComponent,
  ],
  exports: [
    FudoHeaderComponent,
    FudoFooterComponent,
    FudoNavComponent,
    FudoNavAccordionComponent,
  ],
})
export class SharedComponentsModule {}
