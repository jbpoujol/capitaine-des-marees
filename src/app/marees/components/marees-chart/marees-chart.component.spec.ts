import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MareesChartComponent } from './marees-chart.component';

describe('MareesChartComponent', () => {
  let component: MareesChartComponent;
  let fixture: ComponentFixture<MareesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MareesChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MareesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
