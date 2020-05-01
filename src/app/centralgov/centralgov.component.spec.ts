import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralgovComponent } from './centralgov.component';

describe('CentralgovComponent', () => {
  let component: CentralgovComponent;
  let fixture: ComponentFixture<CentralgovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralgovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralgovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
