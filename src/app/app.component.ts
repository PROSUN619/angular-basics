import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.component';
import CounterComponent from './counter/counter.component';
import { GetterInputComponent } from './getter-input/getter-input.component';
import { PanelComponent } from './panel/panel.component';
import { CardComponent } from './card/card.component';
import { HoverClickComponent } from './hover-click/hover-click.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileComponent,
    CounterComponent, GetterInputComponent, PanelComponent, CardComponent, HoverClickComponent,
    LifecyclehookComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basics';
  count = 20;
  datafromChild = '';
  isActive = true;

  dataReceived(data: string) {
    console.log(data);
    alert('Hello');
    this.datafromChild = data;
  }

  changeTitle() {
    this.title = 'New Title' + Math.random();
  }

  toogle(){
    this.isActive = !this.isActive;
  }
}
