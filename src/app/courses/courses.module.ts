import { CoursesRoutingModule } from './courses-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesListComponent } from './../courses-list/courses-list.component';



@NgModule({
  declarations: [CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ],
  exports: [CoursesListComponent]
})
export class CoursesModule { }
