import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-angular-app';
  currentPath: string;

  // onPathChanged(path: string) {
  //   this.currentPath = path;
  // }
}
