import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signups2Component } from './signups2.component';

describe('Signups2Component', () => {
  let component: Signups2Component;
  let fixture: ComponentFixture<Signups2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Signups2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Signups2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
