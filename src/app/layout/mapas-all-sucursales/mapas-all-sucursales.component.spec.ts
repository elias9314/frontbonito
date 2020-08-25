import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasAllSucursalesComponent } from './mapas-all-sucursales.component';

describe('MapasAllSucursalesComponent', () => {
  let component: MapasAllSucursalesComponent;
  let fixture: ComponentFixture<MapasAllSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapasAllSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapasAllSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
