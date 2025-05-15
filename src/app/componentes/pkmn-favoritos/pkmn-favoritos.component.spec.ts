import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmnFavoritosComponent } from './pkmn-favoritos.component';

describe('PkmnFavoritosComponent', () => {
  let component: PkmnFavoritosComponent;
  let fixture: ComponentFixture<PkmnFavoritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PkmnFavoritosComponent]
    });
    fixture = TestBed.createComponent(PkmnFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
