import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryChartsComponent } from './battery-charts.component';

describe('BatteryChartsComponent', () => {
  let component: BatteryChartsComponent;
  let fixture: ComponentFixture<BatteryChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BatteryChartsComponent]
    });
    fixture = TestBed.createComponent(BatteryChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
