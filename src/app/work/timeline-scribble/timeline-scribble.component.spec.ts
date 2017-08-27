import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineScribbleComponent } from './timeline-scribble.component';

describe('TimelineScribbleComponent', () => {
  let component: TimelineScribbleComponent;
  let fixture: ComponentFixture<TimelineScribbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineScribbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineScribbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
