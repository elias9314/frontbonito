import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalPendientesComponent } from './sucursal-pendientes.component';

describe('SucursalPendientesComponent', () => {
  let component: SucursalPendientesComponent;
  let fixture: ComponentFixture<SucursalPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucursalPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucursalPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
