import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScreenComponent } from './show-screen.component';

describe('ShowScreenComponent', () => {
  let component: ShowScreenComponent;
  let fixture: ComponentFixture<ShowScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
