import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalEntregadosComponent } from './sucursal-entregados.component';

describe('SucursalEntregadosComponent', () => {
  let component: SucursalEntregadosComponent;
  let fixture: ComponentFixture<SucursalEntregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalEntregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalEntregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
