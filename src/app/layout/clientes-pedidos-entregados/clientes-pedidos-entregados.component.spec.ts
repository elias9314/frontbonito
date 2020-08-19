import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPedidosEntregadosComponent } from './clientes-pedidos-entregados.component';

describe('ClientesPedidosEntregadosComponent', () => {
  let component: ClientesPedidosEntregadosComponent;
  let fixture: ComponentFixture<ClientesPedidosEntregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPedidosEntregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesPedidosEntregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
