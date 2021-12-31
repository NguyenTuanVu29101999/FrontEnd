import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherforeastComponent } from './weatherforeast.component';

describe('WeatherforeastComponent', () => {
  let component: WeatherforeastComponent;
  let fixture: ComponentFixture<WeatherforeastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherforeastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherforeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
