import { Component, OnInit } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private popupService:PopupService,
    private taskService:TaskService
  ) { }

  ngOnInit(): void {
  }

  addTask(){
    this.taskService.isEdit.next(false);
    this.popupService.openModal('taskModal');
  }
}
