import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'app-profile, [app-profile]',
    standalone : true,
    templateUrl: './profile.component.html',
    styleUrls: [
        './profile.component.css'
    ],
    encapsulation : ViewEncapsulation.Emulated
})
export default class ProfileComponent {

}