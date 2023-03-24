import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadroDetallesComponent } from './cuadro-detalles.component';

describe('CuadroDetallesComponent', () => {
  let component: CuadroDetallesComponent;
  let fixture: ComponentFixture<CuadroDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadroDetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuadroDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
