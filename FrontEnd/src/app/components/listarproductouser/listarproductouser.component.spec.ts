import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproductouserComponent } from './listarproductouser.component';

describe('ListarproductouserComponent', () => {
  let component: ListarproductouserComponent;
  let fixture: ComponentFixture<ListarproductouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarproductouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproductouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
