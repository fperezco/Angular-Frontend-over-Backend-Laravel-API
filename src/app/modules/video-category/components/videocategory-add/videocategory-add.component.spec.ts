import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocategoryAddComponent } from './videocategory-add.component';

describe('VideocategoryAddComponent', () => {
  let component: VideocategoryAddComponent;
  let fixture: ComponentFixture<VideocategoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocategoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
