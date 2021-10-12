import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  idCounter = 1 ;
  tasks:any = [] ;
  @Input() task: any ;
  constructor() {

   }

  ngOnInit(): void {

  }
  ngOnChanges() :void {
    this.tasks.push({
      name :this.task ,
      id :this.idCounter ,
      completed:false
    }) ;
    this.idCounter++ ;
  }

  deleteTask(event: any) {
    let id =  event.currentTarget.id ;
    this.tasks.forEach((element:any , index:any) => {
      if(element.id == id) {
        this.tasks.splice(index,1) ;
      }
    });
  }
  completeTask(event:any) {
    let id =  event.currentTarget.id ;
    console.log(id) ;
    this.tasks.forEach((element:any) => {
      if(element.id == id) {
        console.log(element)
        element.completed = true ;
      }
    });
    console.log(this.tasks) ;
  }
}
