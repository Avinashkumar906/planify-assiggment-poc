import { Injectable } from '@angular/core';
import { Task } from '../components/taskmanage/taskmanage.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  taskList:Array<Task> = JSON.parse(localStorage.getItem('taskList')) ? JSON.parse(localStorage.getItem('taskList')) : [];
  taskChanged = new Subject<Array<Task>>();
  isEdit = new Subject<Task|boolean>()

  getTasks(){
    return this.taskList;
  }

  getByID(id:string){
    let index = this.taskList.findIndex((item)=>item.id == id)
    return index>=0 ? this.taskList[index] : null;
  }

  addTask(task:Task){
    this.taskList.push(task);
    this.taskChanged.next(this.taskList)
    localStorage.setItem('taskList',JSON.stringify(this.taskList))
    alert('Task Added!')
  }

  updateTask(task:Task){
    let index = this.taskList.findIndex((item)=>item.id === task.id)
    this.taskList[index] = task;
    this.taskChanged.next(this.taskList)
    localStorage.setItem('taskList',JSON.stringify(this.taskList))
    alert('Task Updated!')
  }

  deleteTask(task:Task){
    let index = this.taskList.findIndex((item)=>item.id === task.id)
    this.taskList.splice(index,1);
    this.taskChanged.next(this.taskList)
    localStorage.setItem('taskList',JSON.stringify(this.taskList))
    alert('Task Deleted!')
  }

  moveTask(status,taskID){
    let index = this.taskList.findIndex((item)=>item.id == taskID)
    let task = this.taskList[index]
    // Logic to move task between columns
    if(status==='progress' && task.status === 'pending'){
      task.status = status;
      this.taskList[index] = task;
    } else if(status==='progress' && task.status === 'completed'){
      task.status = status;
      this.taskList[index] = task;
    } else if(task.status === 'progress'){
      task.status = status;
      this.taskList[index] = task;
    } else {
      alert(`Can't move task directly to ${status} column`)
    }
    this.taskChanged.next(this.taskList)
    localStorage.setItem('taskList',JSON.stringify(this.taskList))
  }
}
