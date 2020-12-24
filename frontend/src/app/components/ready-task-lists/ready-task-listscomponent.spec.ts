import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadyTaskListsComponent } from './ready-task-lists.component';

describe('ReadyTaskListsComponent', () => {
  let component: ReadyTaskListsComponent;
  let fixture: ComponentFixture<ReadyTaskListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyTaskListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyTaskListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
