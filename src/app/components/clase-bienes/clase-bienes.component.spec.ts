import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseBienesComponent } from './clase-bienes.component';

describe('ClaseBienesComponent', () => {
  let component: ClaseBienesComponent;
  let fixture: ComponentFixture<ClaseBienesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaseBienesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaseBienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
