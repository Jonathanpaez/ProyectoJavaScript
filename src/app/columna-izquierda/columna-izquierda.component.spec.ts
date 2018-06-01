import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnaIzquierdaComponent } from './columna-izquierda.component';

describe('ColumnaIzquierdaComponent', () => {
  let component: ColumnaIzquierdaComponent;
  let fixture: ComponentFixture<ColumnaIzquierdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnaIzquierdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnaIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
