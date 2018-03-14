import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedChallengeComponent } from './accepted-challenge.component';

describe('AcceptedChallengeComponent', () => {
  let component: AcceptedChallengeComponent;
  let fixture: ComponentFixture<AcceptedChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
