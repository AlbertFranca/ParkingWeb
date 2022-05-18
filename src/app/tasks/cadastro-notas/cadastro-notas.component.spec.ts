import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNotasComponent } from './cadastro-notas.component';

describe('CadastroNotasComponent', () => {
  let component: CadastroNotasComponent;
  let fixture: ComponentFixture<CadastroNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
