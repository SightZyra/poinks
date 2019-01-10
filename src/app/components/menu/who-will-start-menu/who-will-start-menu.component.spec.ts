import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWillStartMenuComponent } from './who-will-start-menu.component';

describe('WhoWillStartMenuComponent', () => {
  let component: WhoWillStartMenuComponent;
  let fixture: ComponentFixture<WhoWillStartMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWillStartMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWillStartMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
