import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/person';
import { Type, ClassField } from '@angular/compiler';

@Component({
    selector: 'class-model',
    templateUrl: 'class-model.component.html',
    styleUrls: ['class-model.component.scss']
})
export class ClassModelComponent implements OnInit{
    @Input() class: any;
    methods: any;
    name:string;
    ngOnInit(): void {
        const classProperties = Object.getOwnPropertyDescriptors(this.class);
        this.name = classProperties.name.value;
        this.methods = Object.getOwnPropertyNames(classProperties.prototype.value);
    }
}
