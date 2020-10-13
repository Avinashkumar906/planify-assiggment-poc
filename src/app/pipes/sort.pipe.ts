import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../components/taskmanage/taskmanage.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<Task>): Array<Task> {
    let tempArray = [];

    // sorting logic
    tempArray = value.sort((one , two)=>{
      let date1:any = new Date(one.date)
      let date2:any = new Date(two.date)
      return date1 - date2;
    })

    return tempArray
  }

}
