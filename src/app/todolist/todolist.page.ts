import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.css']
})
export class TodolistPage implements OnInit {

  todolist = [
    {
      id: 1,
      text: 'To Do 1',
      done: 'done'
    },{
      id: 2,
      text: 'To Do 2',
      done: ''
    },{
      id: 3,
      text: 'To Do 3',
      done: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  removeToDo(i:number){
    this.todolist.splice(i,1);
  }

  done(i:number){
    this.todolist[i].done = this.todolist[i].done==='done' ? '' : 'done'
  }
}
