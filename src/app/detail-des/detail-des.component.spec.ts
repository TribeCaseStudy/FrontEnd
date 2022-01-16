import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDesComponent } from './detail-des.component';

describe('DetailDesComponent', () => {
  let component: DetailDesComponent;
  let fixture: ComponentFixture<DetailDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
