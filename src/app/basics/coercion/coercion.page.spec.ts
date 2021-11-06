import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoercionPage } from './coercion.page';

describe('CoercionPage', () => {
  let component: CoercionPage;
  let fixture: ComponentFixture<CoercionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoercionPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoercionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
