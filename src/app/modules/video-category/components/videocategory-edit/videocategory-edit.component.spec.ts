import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocategoryEditComponent } from './videocategory-edit.component';

describe('VideocategoryEditComponent', () => {
  let component: VideocategoryEditComponent;
  let fixture: ComponentFixture<VideocategoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocategoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
