import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 

    this.questions = [
      {
        text:"What is your name?",
        answer:"Klemen",
        hide:true
      },
      {
        text:"What is your age?",
        answer:"30",
        hide:false
      },
      {
        text:"What is your job?",
        answer:"Programmer",
        hide:false
      }
    ];

  }
      
  getQuestions():Question[] {
    return this.questions;
  }

}
