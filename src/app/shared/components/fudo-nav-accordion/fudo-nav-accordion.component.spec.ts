import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FudoNavAccordionComponent } from './fudo-nav-accordion.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FudoNavAccordionComponent', () => {
  let component: FudoNavAccordionComponent;
  let fixture: ComponentFixture<FudoNavAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FudoNavAccordionComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(FudoNavAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation links when isOpenMenu is true', () => {
    component.isOpenMenu = true;
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll(
      '.fudo-accordion-items__text'
    );
    expect(links.length).toBe(2);
  });

  it('should not render navigation links when isOpenMenu is false', () => {
    component.isOpenMenu = false;
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll(
      '.fudo-accordion-items__text'
    );
    expect(links.length).toBe(0);
  });

  it('should emit closeMenu when close button is clicked', () => {
    spyOn(component.closeMenu, 'emit');
    const closeButton = fixture.nativeElement.querySelector(
      '.fudo-header-accordion-close'
    );
    closeButton.click();
    expect(component.closeMenu.emit).toHaveBeenCalledWith(false);
  });
});
