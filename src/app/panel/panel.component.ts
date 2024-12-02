import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  @Output() dataEvent = new EventEmitter<string>();

  parentClick() {
    console.log('parentClick');
    this.dataEvent.emit('emitted from panel component');
  }
}
