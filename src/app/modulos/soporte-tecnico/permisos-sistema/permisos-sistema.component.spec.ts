import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermisosSistemaComponent } from './permisos-sistema.component';

describe('PermisosSistemaComponent', () => {
  let component: PermisosSistemaComponent;
  let fixture: ComponentFixture<PermisosSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermisosSistemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermisosSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
