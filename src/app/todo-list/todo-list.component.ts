import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  num = 4;

  task : any[] =[
    {
      "name" : "Finish OS Assignment"
    },
    {
      "name" : "Finish SE Lab Assignment"
    },
    {
      "name" : "Submit the assignments"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
