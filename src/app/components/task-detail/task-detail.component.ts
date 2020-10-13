import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../taskmanage/taskmanage.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  task:Task;

  constructor(
    private route:ActivatedRoute,
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>this.fetchTaskDetail(params.id),
      err=>console.log(err)
    )
  }

  fetchTaskDetail(id:string){
    this.task = this.taskService.getByID(id);
  }

}
