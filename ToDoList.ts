import {Component} from '@angular/core';
import {DemoService} from './ServicesList';
import {Observable} from 'rxjs/Rx';

@Component({
  selector:'todo',
  template:`<label>Enter WorkItem:</label>
  <input #textbox type="text" required/>
  <button (click)="AddElements(textbox.value)">Add Record</button>
  <table border='1px solid'>
  <tr >
    <th>SerialNumber</th>
    <th>WorkItem</th>
    <th>Modification</th>
  </tr>

  <tr *ngFor="let item of newWorkItem; let i = index">
    <td>{{i+1}}</td>
    <td>{{item}}</td>
    <td><button (click)="SaveRecord(i+1,item)">Save</button><button (click)="DeleteRecord(i+1)">Delete</button></td>
  </tr>
  </table>`,
  providers:[DemoService]
})

export class TodoComponent{
  myList;
  newWorkItem: string[]=[];
  rowNum = 0;
  items;

    constructor(private _demoService: DemoService) { }

  AddElements(value: string){
    this.newWorkItem.push(value);
  }

  SaveRecord(value,item){
      let todoitem = {name: name};
      this._demoService.saveRecord(value,todoitem).subscribe(
         data => {
           return true;
         },
         error => {
           console.error("Error saving food!");
           return Observable.throw(error);
         }
      );
       console.log(value, item);
    }

    DeleteRecord(value)
    {
      console.log(value);
      this._demoService.deleteRecord(value).subscribe(
        data => {
          return true;
        },
        error => {
          console.error("Error deleting food!");
          return Observable.throw(error);
        }
     );
    }

  }
