import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarPkmnComponent } from './tool-bar-pkmn.component';

describe('ToolBarPkmnComponent', () => {
  let component: ToolBarPkmnComponent;
  let fixture: ComponentFixture<ToolBarPkmnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolBarPkmnComponent]
    });
    fixture = TestBed.createComponent(ToolBarPkmnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
