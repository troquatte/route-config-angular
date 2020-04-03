import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstitutionalComponent } from './home.component';

describe('HomeInstitutionalComponent', () => {
  let component: HomeInstitutionalComponent;
  let fixture: ComponentFixture<HomeInstitutionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInstitutionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInstitutionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
