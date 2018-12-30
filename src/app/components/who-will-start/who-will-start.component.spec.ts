import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWillStartComponent } from './who-will-start.component';

describe('WhoWillStartComponent', () => {
  let component: WhoWillStartComponent;
  let fixture: ComponentFixture<WhoWillStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWillStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWillStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
