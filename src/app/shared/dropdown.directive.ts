import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open')  isOpen = false;

  // the prvious version
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['event']) toggleOpen() {
    this.isOpen = this.elRef.nativeElement.contains(event.target) // clicking inside of the current element?
                  ? !this.isOpen // if true, like the prvious version, clicking the element to toggle the "open" in classes
                  : false; // if not, clicking outside of the current element can close the dropdown
  }

  constructor(private elRef: ElementRef) {

  }
}