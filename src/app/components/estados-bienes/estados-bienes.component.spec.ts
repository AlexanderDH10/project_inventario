import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosBienesComponent } from './estados-bienes.component';

describe('EstadosBienesComponent', () => {
  let component: EstadosBienesComponent;
  let fixture: ComponentFixture<EstadosBienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadosBienesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadosBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
