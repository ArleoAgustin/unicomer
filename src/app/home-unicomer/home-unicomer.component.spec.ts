import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUnicomerComponent } from './home-unicomer.component';

describe('HomeUnicomerComponent', () => {
  let component: HomeUnicomerComponent;
  let fixture: ComponentFixture<HomeUnicomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeUnicomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeUnicomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
