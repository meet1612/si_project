import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  routes=[
    {linkName:'Profile',url:'profile'},
    {linkName:'Contact',url:'contact'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
