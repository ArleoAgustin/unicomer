import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUnicomerComponent } from './login-unicomer.component';

describe('LoginUnicomerComponent', () => {
  let component: LoginUnicomerComponent;
  let fixture: ComponentFixture<LoginUnicomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginUnicomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginUnicomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
