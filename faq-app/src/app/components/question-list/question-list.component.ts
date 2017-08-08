import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:Object[];

  constructor() { 
    this.questions = [
      {
        text:"What is your name?",
        answer:"Klemen"
      },
      {
        text:"What is your age?",
        answer:"30"
      },
      {
        text:"What is your job?",
        answer:"Programmer"
      }

    ];
  }

  ngOnInit() {
  }

}
