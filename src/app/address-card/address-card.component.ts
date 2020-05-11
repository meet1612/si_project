import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user:any;

  constructor() {
    this.user={
      name:'Meet Shah',
      title:'Software Developer',
      address:'Paldi,Ahmedabad',
      phone:[
      '123-123-123',
      '8000161298',
      '225-225-225'
      ]
    };
  }

  ngOnInit(): void {
  }

}
