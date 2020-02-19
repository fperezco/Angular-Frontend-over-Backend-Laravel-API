import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthbarComponent } from './authbar.component';

describe('AuthbarComponent', () => {
  let component: AuthbarComponent;
  let fixture: ComponentFixture<AuthbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
