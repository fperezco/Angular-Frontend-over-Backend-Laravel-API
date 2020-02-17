import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoformComponent } from './videoform.component';

describe('VideoformComponent', () => {
  let component: VideoformComponent;
  let fixture: ComponentFixture<VideoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
