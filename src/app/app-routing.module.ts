import { BloqueadorGuard } from './guards/bloqueador.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cursos',
    loadChildren: 'src/app/courses/courses.module#CoursesModule',
    canActivate: [BloqueadorGuard],
    canLoad: [BloqueadorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
