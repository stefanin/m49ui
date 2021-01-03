import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatinsComponent } from './locatins.component';

describe('LocatinsComponent', () => {
  let component: LocatinsComponent;
  let fixture: ComponentFixture<LocatinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocatinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
