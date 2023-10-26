import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismSiteComponent } from './tourism-site.component';

describe('TourismSiteComponent', () => {
  let component: TourismSiteComponent;
  let fixture: ComponentFixture<TourismSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourismSiteComponent]
    });
    fixture = TestBed.createComponent(TourismSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
