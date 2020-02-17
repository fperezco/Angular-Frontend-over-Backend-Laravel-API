import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocategorySelectCVLComponent } from './videocategory-select-cvl.component';

describe('VideocategorySelectCVLComponent', () => {
  let component: VideocategorySelectCVLComponent;
  let fixture: ComponentFixture<VideocategorySelectCVLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocategorySelectCVLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocategorySelectCVLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
