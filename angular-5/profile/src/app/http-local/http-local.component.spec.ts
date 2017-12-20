import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpLocalComponent } from './http-local.component';

describe('HttpLocalComponent', () => {
  let component: HttpLocalComponent;
  let fixture: ComponentFixture<HttpLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
