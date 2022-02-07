import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProducto2Component } from './listar-producto2.component';

describe('ListarProducto2Component', () => {
  let component: ListarProducto2Component;
  let fixture: ComponentFixture<ListarProducto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProducto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProducto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
