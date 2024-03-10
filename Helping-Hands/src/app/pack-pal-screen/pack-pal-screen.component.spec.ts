import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackPalScreenComponent } from './pack-pal-screen.component';

describe('PackPalScreenComponent', () => {
  let component: PackPalScreenComponent;
  let fixture: ComponentFixture<PackPalScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackPalScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackPalScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
