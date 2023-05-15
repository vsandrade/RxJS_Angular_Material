import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentsMaterialModule } from '@app/shared/materials/students-mat.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    StudentsMaterialModule,
    SharedModule
  ]
})
export class StudentsModule { }
