import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparadorPkmnComponent } from './comparador-pkmn.component';

describe('ComparadorPkmnComponent', () => {
  let component: ComparadorPkmnComponent;
  let fixture: ComponentFixture<ComparadorPkmnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparadorPkmnComponent]
    });
    fixture = TestBed.createComponent(ComparadorPkmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
