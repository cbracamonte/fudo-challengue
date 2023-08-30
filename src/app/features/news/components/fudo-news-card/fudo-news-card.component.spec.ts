import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FudoNewsCardComponent } from './fudo-news-card.component';

describe('FudoNewsCardComponent', () => {
  let component: FudoNewsCardComponent;
  let fixture: ComponentFixture<FudoNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FudoNewsCardComponent],
    });
    fixture = TestBed.createComponent(FudoNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
