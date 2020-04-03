import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAccountComponent } from './auth.component';

describe('AuthAccountComponent', () => {
  let component: AuthAccountComponent;
  let fixture: ComponentFixture<AuthAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
