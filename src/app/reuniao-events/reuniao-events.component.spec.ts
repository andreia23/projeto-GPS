import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuniaoEventsComponent } from './reuniao-events.component';

describe('ReuniaoEventsComponent', () => {
  let component: ReuniaoEventsComponent;
  let fixture: ComponentFixture<ReuniaoEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReuniaoEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuniaoEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
