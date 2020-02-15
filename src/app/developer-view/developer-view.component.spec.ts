import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperViewComponent } from './developer-view.component';

describe('DeveloperViewComponent', () => {
  let component: DeveloperViewComponent;
  let fixture: ComponentFixture<DeveloperViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
