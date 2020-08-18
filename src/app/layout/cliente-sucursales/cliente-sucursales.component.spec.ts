import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSucursalesComponent } from './cliente-sucursales.component';

describe('ClienteSucursalesComponent', () => {
  let component: ClienteSucursalesComponent;
  let fixture: ComponentFixture<ClienteSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
