import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsDetail } from './cars-detail';

describe('CarsDetail', () => {
  let component: CarsDetail;
  let fixture: ComponentFixture<CarsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(CarsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
