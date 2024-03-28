import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MareesPageComponent } from './marees-page.component';

describe('MareesPageComponent', () => {
  let component: MareesPageComponent;
  let fixture: ComponentFixture<MareesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MareesPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MareesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
