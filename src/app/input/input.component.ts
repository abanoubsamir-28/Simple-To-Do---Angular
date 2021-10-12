import { Component, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  task : string = "" ;
  @Output() taskEvent = new EventEmitter() ;
  constructor() { }

  sendTask() {
    if(this.validateInput(this.task)) {
      this.taskEvent.emit(this.task)
    }
  }
  validateInput(task:string) {
    if(task.length == 0) {
      alert("Task Not Valid!!") ;
      return false ;
    } else {
      return true ;
    }
  }
  ngOnInit(): void {
  }

}
