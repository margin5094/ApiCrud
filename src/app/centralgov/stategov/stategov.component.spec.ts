import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StategovComponent } from './stategov.component';

describe('StategovComponent', () => {
  let component: StategovComponent;
  let fixture: ComponentFixture<StategovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StategovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StategovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
