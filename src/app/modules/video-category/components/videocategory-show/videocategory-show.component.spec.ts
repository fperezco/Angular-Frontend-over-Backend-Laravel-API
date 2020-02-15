import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocategoryShowComponent } from './videocategory-show.component';

describe('VideocategoryShowComponent', () => {
  let component: VideocategoryShowComponent;
  let fixture: ComponentFixture<VideocategoryShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocategoryShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocategoryShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
