import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-displaying-data',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <p>
        {{title}}
      </p>
    </div>
    <div>
      <p>Two plus Two is {{ 2 + 2 }}</p>
      <p>Favorite Colors {{favoriteColors }}</p>
      <p>Favorite Color {{ favoriteColors[0]}} (of {{favoriteColors.length }})</p>
      <p>My Salary is {{salary}}.</p>
      <p>My Salary is {{ salary | currency}}</p>
    </div>
    <div>
      <p>My friends: {{friends }}</p>
      <p> I have {{friends.length}} friends.</p>
    
      <p>My friends: </p>
      <pre>{{ friends | json }}</pre>
      <p>First Friend {{friends[0].name}} at {{ friends[0].email }}
    </div>
    <div>
      <table>
        <thead>
          <td>Name</td>
          <td>Email</td>
          <td>Local</td>
        </thead>
        
        <tr *ngFor="let friend of friends">
          <td>{{friend.name}}</td> 
          <td>{{friend.email}}</td> 
          <td [ngClass]="{local: friend.local, remote: friend.local === false}">{{ friend.local ? "Local" : "Remote"}}</td>
</tr>
</table>
    </div>
  `,
  styles: [
    "pre { padding-left: 2rem }",
    "div { padding-left: 1rem; margin-bottom: 1rem}",
    ".local { color: green }",
    ".remote { color: red }"
  ]
})
export class DisplayingDataComponent {
  title = 'Displaying Data';
  favoriteColors = ['red', 'blue', 'orange'];
  salary = 120_000;
  friends = [{ name: 'Jamie', email: 'jamie@aol.com', local: false }, { name: 'Lee', email: 'lee@aol.com', local: true }]
}
