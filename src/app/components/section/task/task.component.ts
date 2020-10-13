import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../taskmanage/taskmanage.component';
import { PopupService } from 'src/app/services/popup.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input('task') task:Task;
  constructor(
    private taskService:TaskService,
    private popupService:PopupService
  ) { }

  ngOnInit(): void {
    // console.log(this.task)
  }

  editTask(){
    this.taskService.isEdit.next(this.task);
    this.popupService.openModal('taskModal');
  }

  deleteTask(){
    let result = window.confirm('are you sure want to delete task?')
    result ? this.taskService.deleteTask(this.task): '';
  }

}
