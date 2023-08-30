import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FudoHeaderComponent } from './fudo-header.component';
import { FudoNavComponent } from '../fudo-nav/fudo-nav.component';
import { FudoNavAccordionComponent } from '../fudo-nav-accordion/fudo-nav-accordion.component';

describe('FudoHeaderComponent', () => {
  let component: FudoHeaderComponent;
  let fixture: ComponentFixture<FudoHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FudoHeaderComponent,
        FudoNavComponent,
        FudoNavAccordionComponent,
      ],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(FudoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu on button click', () => {
    const button = fixture.nativeElement.querySelector(
      '.fudo-header-menu-toggle'
    );
    button.click();
    fixture.detectChanges();
    expect(component.isOpenMenu).toBeTrue();
  });
});
