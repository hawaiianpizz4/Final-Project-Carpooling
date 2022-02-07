import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateTasks2Component } from './private-tasks2.component';

describe('PrivateTasks2Component', () => {
  let component: PrivateTasks2Component;
  let fixture: ComponentFixture<PrivateTasks2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateTasks2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateTasks2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
