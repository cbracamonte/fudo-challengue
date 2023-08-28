import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FudoHeaderComponent } from './fudo-header.component';

describe('FudoHeaderComponent', () => {
  let component: FudoHeaderComponent;
  let fixture: ComponentFixture<FudoHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FudoHeaderComponent]
    });
    fixture = TestBed.createComponent(FudoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
