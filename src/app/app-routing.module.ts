import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamComponent } from './component/exam/exam.component';

const routes: Routes = [
  {
    path: '',
    component: ExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
