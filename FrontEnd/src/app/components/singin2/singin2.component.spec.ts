import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singin2Component } from './singin2.component';

describe('Singin2Component', () => {
  let component: Singin2Component;
  let fixture: ComponentFixture<Singin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Singin2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Singin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
