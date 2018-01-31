import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeHttpServiceComponent } from './consume-http-service.component';

describe('ConsumeHttpServiceComponent', () => {
  let component: ConsumeHttpServiceComponent;
  let fixture: ComponentFixture<ConsumeHttpServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeHttpServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeHttpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
