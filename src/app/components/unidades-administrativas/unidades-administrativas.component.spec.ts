import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesAdministrativasComponent } from './unidades-administrativas.component';

describe('UnidadesAdministrativasComponent', () => {
  let component: UnidadesAdministrativasComponent;
  let fixture: ComponentFixture<UnidadesAdministrativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnidadesAdministrativasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadesAdministrativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
