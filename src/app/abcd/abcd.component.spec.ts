import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcdComponent } from './abcd.component';

describe('AbcdComponent', () => {
  let component: AbcdComponent;
  let fixture: ComponentFixture<AbcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
