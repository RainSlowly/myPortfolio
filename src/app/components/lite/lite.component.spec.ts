import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteComponent } from './lite.component';

describe('LiteComponent', () => {
  let component: LiteComponent;
  let fixture: ComponentFixture<LiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
