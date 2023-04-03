import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalInfoComponent } from './medical-info.component';

describe('MedicalInfoComponent', () => {
  let component: MedicalInfoComponent;
  let fixture: ComponentFixture<MedicalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
