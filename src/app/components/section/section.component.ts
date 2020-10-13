import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../taskmanage/taskmanage.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor(
    private taskService:TaskService,
  ) { }

  taskList:Array<Task> = this.taskService.getTasks();
  subscription:Subscription;
  perText:number = 0;

  ngOnInit(): void {
    this.subscription = this.taskService.taskChanged.subscribe(
      (taskList:Array<Task>)=> {
        this.taskList = taskList.map(a => ({...a}));
        this.percentage()
      },
      (error)=>console.log(error)
    )
    this.percentage()
  }

  allowDrop(ev){
    ev.preventDefault();
  }

  drop(ev,target) {
    ev.preventDefault();
    let status = target
    let id = ev.dataTransfer.getData("taskId")
    this.taskService.moveTask(status,id);
  }

  drag(ev,id) {
    ev.dataTransfer.setData("taskId", id);
  }

  percentage(){
    let total = this.taskList.length
    let completed = 0;
    this.taskList.forEach((item)=>{
      item.status === 'completed' ? completed++ : ''
    })
    this.perText = this.taskList.length !== 0 ? Math.round(completed*100/total): 0;
  }

}
