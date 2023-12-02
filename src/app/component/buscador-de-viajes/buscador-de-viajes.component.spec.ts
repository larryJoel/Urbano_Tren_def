import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscadorDeViajesComponent } from './buscador-de-viajes.component';

describe('BuscadorDeViajesComponent', () => {
  let component: BuscadorDeViajesComponent;
  let fixture: ComponentFixture<BuscadorDeViajesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscadorDeViajesComponent]
    });
    fixture = TestBed.createComponent(BuscadorDeViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
