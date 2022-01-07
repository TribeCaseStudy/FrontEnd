import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerefundComponent } from './pagerefund.component';

describe('PagerefundComponent', () => {
  let component: PagerefundComponent;
  let fixture: ComponentFixture<PagerefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagerefundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
