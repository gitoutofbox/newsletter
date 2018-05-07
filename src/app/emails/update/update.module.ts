import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmailUpdateComponent } from './update.component';





const routes: Routes = [
  {
    path: '',
    component: EmailUpdateComponent
  }
  // ,
  // {
  //   path: '/add',
  //   component: GroupUpdateComponent
  // }
];



@NgModule({ 
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,
    [RouterModule.forChild(routes)]
  ],
  declarations: [EmailUpdateComponent]
})
export class EmailUpdateModule { }