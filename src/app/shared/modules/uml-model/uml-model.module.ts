// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { UmlModelComponent } from './uml-model.component';
import { SharedModule } from '../../shared.module';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { ClassModelComponent } from './components/class-model/class-model.component';

const declarables = [UmlModelComponent, ClassModelComponent]

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        declarables,
    ],
    exports: [
        declarables,
    ]
})
export class UmlModelModule {

}
