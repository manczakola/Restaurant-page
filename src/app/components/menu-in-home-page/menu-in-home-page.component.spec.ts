import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInHomePageComponent } from './menu-in-home-page.component';

describe('MenuInHomePageComponent', () => {
  let component: MenuInHomePageComponent;
  let fixture: ComponentFixture<MenuInHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
