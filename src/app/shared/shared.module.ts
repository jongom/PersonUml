import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { UmlModelModule } from './modules/uml-model/uml-model.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    UmlModelModule
  ]
})
export class SharedModule {}
