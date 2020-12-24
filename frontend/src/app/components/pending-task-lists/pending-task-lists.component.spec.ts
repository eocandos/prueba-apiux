import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTaskListsComponent } from './pending-task-lists.component';

describe('PendingTaskListsComponent', () => {
  let component: PendingTaskListsComponent;
  let fixture: ComponentFixture<PendingTaskListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingTaskListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingTaskListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
