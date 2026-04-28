import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionListPage } from './mission-list-page';

describe('MissionListPage', () => {
  let component: MissionListPage;
  let fixture: ComponentFixture<MissionListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
