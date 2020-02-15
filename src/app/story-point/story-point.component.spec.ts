import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPointComponent } from './story-point.component';

describe('StoryPointComponent', () => {
  let component: StoryPointComponent;
  let fixture: ComponentFixture<StoryPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
