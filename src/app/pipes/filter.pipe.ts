import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../components/taskmanage/taskmanage.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Task>, key:string): Array<Task> {
    let temp:Array<Task> = [];
    value.forEach((item,index)=>{
      if(item.status === key){
        temp.push(item)
      }
    })
    return temp;
  }

}
