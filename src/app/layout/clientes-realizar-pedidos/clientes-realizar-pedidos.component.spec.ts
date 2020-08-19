import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesRealizarPedidosComponent } from './clientes-realizar-pedidos.component';

describe('ClientesRealizarPedidosComponent', () => {
  let component: ClientesRealizarPedidosComponent;
  let fixture: ComponentFixture<ClientesRealizarPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesRealizarPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesRealizarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
