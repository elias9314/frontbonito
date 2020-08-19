import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBienvenidaComponent } from './login-bienvenida.component';

describe('LoginBienvenidaComponent', () => {
  let component: LoginBienvenidaComponent;
  let fixture: ComponentFixture<LoginBienvenidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBienvenidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
