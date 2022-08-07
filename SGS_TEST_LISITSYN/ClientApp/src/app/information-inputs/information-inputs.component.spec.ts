import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationInputsComponent } from './information-inputs.component';

describe('InformationInputsComponent', () => {
  let component: InformationInputsComponent;
  let fixture: ComponentFixture<InformationInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
