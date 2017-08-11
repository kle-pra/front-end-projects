import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions: Question[];

  constructor() {

    this.questions = [
      {
        text: "What is your name?",
        answer: "Klemen",
        hide: true
      },
      {
        text: "What is your age?",
        answer: "30",
        hide: false
      },
      {
        text: "What is your job?",
        answer: "Programmer",
        hide: false
      }
    ];

  }

  getQuestions(): Question[] {
    return this.questions;
  }

  addQuestion(question: Question): void {
    this.questions.unshift(question);
  }

  deleteQuestion(question: Question): void {
    for(let i=0; i<this.questions.length; i++){
      if(question.text=== this.questions[i].text && question.answer=== this.questions[i].answer){
        this.questions.splice(i,1);
      }
    }
  }
}