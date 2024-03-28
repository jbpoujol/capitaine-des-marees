import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MareesFormComponent } from './marees-form.component';

describe('MareesFormComponent', () => {
  let component: MareesFormComponent;
  let fixture: ComponentFixture<MareesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MareesFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MareesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
