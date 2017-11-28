import { Component } from '@angular/core';

interface TodoList {
    text: string;
    checked: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list:TodoList[];
  txtItem:"";
  constructor() {
    this.list=[];
    }
addItem()
{
  this.list.push({text:this.txtItem,checked:false});
}
checkItem(item){
  item.checked=!item.checked;
}
deleteItem(index){
  this.list.splice(index,1);
}

}
