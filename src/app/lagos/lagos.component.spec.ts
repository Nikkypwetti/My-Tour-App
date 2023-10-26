import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LagosComponent } from './lagos.component';

describe('LagosComponent', () => {
  let component: LagosComponent;
  let fixture: ComponentFixture<LagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LagosComponent]
    });
    fixture = TestBed.createComponent(LagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
