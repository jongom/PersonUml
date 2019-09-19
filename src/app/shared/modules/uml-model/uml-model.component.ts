import { Component, Input } from '@angular/core';
import { UmlType } from './models/uml-type.enum';

@Component({
    selector: 'uml-model',
    templateUrl: 'uml-model.component.html',
    styleUrls: ['uml-model.component.scss']
})
export class UmlModelComponent {
    @Input() type : UmlType = UmlType.CLASS; 
    @Input() model: any;

    get umlType() {return UmlType;}
}
