import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  task = "" ;
  taskSent(task:string) {
    console.log("from Parent",task) ;
    this.task = task ;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
