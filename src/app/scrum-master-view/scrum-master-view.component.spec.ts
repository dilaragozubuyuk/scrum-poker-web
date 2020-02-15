import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumMasterViewComponent } from './scrum-master-view.component';

describe('ScrumMasterViewComponent', () => {
  let component: ScrumMasterViewComponent;
  let fixture: ComponentFixture<ScrumMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
