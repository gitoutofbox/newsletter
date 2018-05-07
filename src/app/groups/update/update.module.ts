import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GroupUpdateComponent } from './update.component';





const routes: Routes = [
  {
    path: '',
    component: GroupUpdateComponent
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
  declarations: [GroupUpdateComponent]
})
export class GroupUpdateModule { }