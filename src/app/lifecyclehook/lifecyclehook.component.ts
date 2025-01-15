import { Component, Input, input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  standalone: true,
  imports: [],
  templateUrl: './lifecyclehook.component.html',
  styleUrl: './lifecyclehook.component.css'
})
export class LifecyclehookComponent {

  @Input() title: string = '';
  name = '';


  constructor() {
    console.log('constructor');
    console.log('title', this.title);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('title', this.title);
  }

  ngOnChanges(changes : SimpleChanges) {
    console.log('ngOnChanges');
    console.log('changes', changes);
  }

  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  // changeName() {
  //   this.name = 'John';
  // }

  // changeTitle() {
  //   this.title = 'New Title';
  // }

  // resetData() {
  //   this.name = '';
  //   this.title = '';
  // }

}
