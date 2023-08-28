import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FudoNavComponent } from './fudo-nav.component';

describe('FudoNavComponent', () => {
  let component: FudoNavComponent;
  let fixture: ComponentFixture<FudoNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FudoNavComponent]
    });
    fixture = TestBed.createComponent(FudoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
