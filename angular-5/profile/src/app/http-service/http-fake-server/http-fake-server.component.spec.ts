import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFakeServerComponent } from './http-fake-server.component';

describe('HttpFakeServerComponent', () => {
  let component: HttpFakeServerComponent;
  let fixture: ComponentFixture<HttpFakeServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpFakeServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpFakeServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
