import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocategorySelectComponent } from './videocategory-select.component';

describe('VideocategorySelectComponent', () => {
  let component: VideocategorySelectComponent;
  let fixture: ComponentFixture<VideocategorySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocategorySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocategorySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
