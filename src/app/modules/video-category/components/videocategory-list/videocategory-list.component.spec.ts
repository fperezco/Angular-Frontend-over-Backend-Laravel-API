import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocategoryListComponent } from './videocategory-list.component';

describe('VideocategoryListComponent', () => {
  let component: VideocategoryListComponent;
  let fixture: ComponentFixture<VideocategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
