import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { PopupService } from 'src/app/services/popup.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-taskmanage',
  templateUrl: './taskmanage.component.html',
  styleUrls: ['./taskmanage.component.scss']
})
export class TaskmanageComponent implements OnInit {

  isEdit:boolean = false;
  taskForm:FormGroup;
  subscription:Subscription;

  constructor(
    private formBuilder:FormBuilder,
    private taskService:TaskService,
    private popupService:PopupService,
  ) { 
    this.initForm()
  }

  ngOnInit(): void {
    this.subscription = this.taskService.isEdit.subscribe(
      (data:Task|boolean)=>{
        if(data){
          this.isEdit = true;
          this.initForm();
          this.patchForm(data)
        } else {
          this.isEdit = false;
          this.initForm()
        }
      },
      err=>console.log(err)
    )
  }

  initForm(){
    this.taskForm = this.formBuilder.group({
      id:[''],
      title:['',[Validators.required,Validators.minLength(4),Validators.maxLength(40)]],
      description:['',[Validators.required,Validators.minLength(10)]],
      status:['pending'],
      priority:['',[Validators.required]],
      date:[,[Validators.required]],
    })
  }

  patchForm(data){
    this.taskForm.patchValue(data);
  }

  submit(taskForm){
    this.isEdit ? this.update(taskForm) : this.add(taskForm)
  }

  add(formData){
    formData.value.id = Date.now();
    this.taskService.addTask(formData.value);
  }
  update(formData){
    this.taskService.updateTask(formData.value)
  }

  get control(){
    return this.taskForm.controls
  }

  close(){
    this.popupService.closeModal('taskModal');
  }
}

export class Task{
  title:string;
  description:string;
  id:string;
  status:string;
  priority:string;
  date:string;
}