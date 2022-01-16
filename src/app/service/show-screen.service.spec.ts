import { TestBed } from '@angular/core/testing';

import { ShowScreenService } from './show-screen.service';

describe('ShowScreenService', () => {
  let service: ShowScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
