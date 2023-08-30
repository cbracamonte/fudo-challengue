import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FudoNavComponent } from './fudo-nav.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FudoNavComponent', () => {
  let component: FudoNavComponent;
  let fixture: ComponentFixture<FudoNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FudoNavComponent],
      imports: [RouterTestingModule],
    });
    fixture = TestBed.createComponent(FudoNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll(
      '.fudo-menu-list-link'
    );
    expect(links.length).toBe(2);
  });

  it('should have correct routerLinks', () => {
    const links = fixture.nativeElement.querySelectorAll(
      '.fudo-menu-list-link'
    );
    const homeLink = links[0].getAttribute('ng-reflect-router-link');
    const newsLink = links[1].getAttribute('ng-reflect-router-link');

    expect(homeLink).toBe('/home');
    expect(newsLink).toBe('/news');
  });
});
