import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuario3Component } from './listar-usuario3.component';

describe('ListarUsuario3Component', () => {
  let component: ListarUsuario3Component;
  let fixture: ComponentFixture<ListarUsuario3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarUsuario3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUsuario3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
