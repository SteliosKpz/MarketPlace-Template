import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAddSnackbarComponent } from './cart-add-snackbar.component';

describe('CartAddSnackbarComponent', () => {
  let component: CartAddSnackbarComponent;
  let fixture: ComponentFixture<CartAddSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartAddSnackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartAddSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
