import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangotreeComponent } from './mangotree.component';

describe('MangotreeComponent', () => {
  let component: MangotreeComponent;
  let fixture: ComponentFixture<MangotreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangotreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangotreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
