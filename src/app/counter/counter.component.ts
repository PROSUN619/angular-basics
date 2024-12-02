import { Component, Input } from "@angular/core";
import { changeValue } from "./counter.service";

@Component({
    selector: 'app-counter',
    standalone : true,
    templateUrl: './counter.component.html',
    styleUrls: [
        './counter.component.css'
    ]
})
export default class CounterComponent {
    @Input({required : true, transform: changeValue}) count : number = 0; 
}