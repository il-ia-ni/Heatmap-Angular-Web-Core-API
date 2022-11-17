import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSwitcherComponent } from './graph-switcher.component';

describe('GraphSwitcherComponent', () => {
  let component: GraphSwitcherComponent;
  let fixture: ComponentFixture<GraphSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
