import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  @Output() pathChanged = new EventEmitter<string>();

  onSelect(path: string) {
    this.pathChanged.emit(path);
  }

}