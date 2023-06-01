import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripviewPage } from './tripview.page';

describe('TripviewPage', () => {
  let component: TripviewPage;
  let fixture: ComponentFixture<TripviewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TripviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
