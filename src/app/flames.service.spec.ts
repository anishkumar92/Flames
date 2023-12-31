import { TestBed } from '@angular/core/testing';

import { FlamesService } from './flames.service';

describe('FlamesService', () => {
  let service: FlamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return Love for names John and Jane', () => {
    expect(service.calculateFlames('John', 'Jane')).toBe('Enemies');
  });
});
