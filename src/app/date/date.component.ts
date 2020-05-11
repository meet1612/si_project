import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  // message:string= new Date().toDateString();
  dateMessage:string;
  someNumber:number=10;

  constructor() {

    setInterval(()=>{
      let CurrentDate = new Date();
      this.dateMessage=CurrentDate.toDateString() +' '+ CurrentDate.toLocaleTimeString();
    } ,1000);
  }

  ngOnInit(): void {
  }

  addTwoNumbers(a:number, b:number){
    return a+b;
  }

}
