import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurComponent } from './sur.component';

describe('SurComponent', () => {
  let component: SurComponent;
  let fixture: ComponentFixture<SurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurComponent]
    });
    fixture = TestBed.createComponent(SurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
