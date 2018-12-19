import { TestBed } from '@angular/core/testing';

import { ManagementPanelService } from './management-panel.service';

describe('ManagementPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagementPanelService = TestBed.get(ManagementPanelService);
    expect(service).toBeTruthy();
  });
});
