import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  openModal(target:string){
    document.getElementById('taskModal').classList.add('show')
  }

  closeModal(target:string){
    document.getElementById('taskModal').classList.remove('show')
  }

}
