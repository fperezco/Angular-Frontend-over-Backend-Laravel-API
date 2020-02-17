import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocategoryformComponent } from './videocategoryform.component';

describe('VideocategoryformComponent', () => {
  let component: VideocategoryformComponent;
  let fixture: ComponentFixture<VideocategoryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocategoryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocategoryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
