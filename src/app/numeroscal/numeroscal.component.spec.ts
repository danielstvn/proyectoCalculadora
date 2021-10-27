import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroscalComponent } from './numeroscal.component';

describe('NumeroscalComponent', () => {
  let component: NumeroscalComponent;
  let fixture: ComponentFixture<NumeroscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumeroscalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumeroscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
