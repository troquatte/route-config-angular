import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInstitutionalComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutInstitutionalComponent;
  let fixture: ComponentFixture<AboutInstitutionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInstitutionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInstitutionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
