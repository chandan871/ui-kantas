import { Component, OnInit } from '@angular/core';

// import FroalaEditor from 'froala-editor';
@Component({
  selector: 'app-manegment',
  templateUrl: './manegment.component.html',
  styleUrls: ['./manegment.component.css']
})
export class ManegmentComponent implements OnInit {
  answerlist: string[] = [];
  constructor() { }
  public addansers(answer): void {
    console.log(answer);
    this.answerlist.push(answer);
    console.log(this.answerlist);
  }

public removeanser(i: number): void {
const deletedans =  this.answerlist.splice(i, 1);
console.log(deletedans);
}

public addquestion(quest): void {
console.log(quest);
}

  ngOnInit() {
  }

}
