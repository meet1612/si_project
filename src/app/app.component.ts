import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project..';
  user: User;
  inputText: string = "Initial Value";
  // homeRoute = "home";
  // dateRoute = "date";
  routes=[
    {linkName:'Home',url:'home'},
    {linkName:'Date',url:'date'}
  ];

  constructor(private svc: TestService, private http: HttpClient) {

    svc.printToConsole("Got The Services");

    this.user = new User();
    this.user.name = "Meet Shah";
    this.user.designation = "Software Developer";
    this.user.address = "Paldi, Ahmedabad";
    this.user.phone = [
      '8000 16 12 98',
      '123-123-123'
    ];
  }
  ngOnInit() {
    this.http.get('https://api.github.com/users/koushikkothagal').subscribe(
      (response) => console.log(response));
  }
}
