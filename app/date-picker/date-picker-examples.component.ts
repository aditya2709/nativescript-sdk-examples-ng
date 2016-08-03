import { Component } from "@angular/core";
import { COMMON_DIRECTIVES } from '../directives';
import { NS_ROUTER_DIRECTIVES } from 'nativescript-angular/router';

@Component({
    selector: 'date-picker-component',
    directives: [NS_ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    templateUrl: 'date-picker/date-picker-examples.component.html'
})

export class DatePickerExamplesComponent {
}