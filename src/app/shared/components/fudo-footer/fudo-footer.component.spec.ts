import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FudoFooterComponent } from './fudo-footer.component';

describe('FudoFooterComponent', () => {
  let component: FudoFooterComponent;
  let fixture: ComponentFixture<FudoFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FudoFooterComponent]
    });
    fixture = TestBed.createComponent(FudoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
