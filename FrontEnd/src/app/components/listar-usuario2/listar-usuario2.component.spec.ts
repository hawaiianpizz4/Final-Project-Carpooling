import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuario2Component } from './listar-usuario2.component';

describe('ListarUsuario2Component', () => {
  let component: ListarUsuario2Component;
  let fixture: ComponentFixture<ListarUsuario2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUsuario2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
