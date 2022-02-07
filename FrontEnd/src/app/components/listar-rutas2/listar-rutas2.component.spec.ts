import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRutas2Component } from './listar-rutas2.component';

describe('ListarRutas2Component', () => {
  let component: ListarRutas2Component;
  let fixture: ComponentFixture<ListarRutas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRutas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRutas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
