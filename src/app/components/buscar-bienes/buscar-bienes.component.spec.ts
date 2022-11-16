import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarBienesComponent } from './buscar-bienes.component';

describe('BuscarBienesComponent', () => {
  let component: BuscarBienesComponent;
  let fixture: ComponentFixture<BuscarBienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarBienesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
