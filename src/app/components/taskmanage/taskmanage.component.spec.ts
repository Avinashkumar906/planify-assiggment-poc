import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmanageComponent } from './taskmanage.component';

describe('TaskmanageComponent', () => {
  let component: TaskmanageComponent;
  let fixture: ComponentFixture<TaskmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
