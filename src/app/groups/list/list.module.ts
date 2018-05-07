import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GroupsComponent } from './list.component';





const routes: Routes = [
  {
    path: '',
    component: GroupsComponent
  }
  // ,
  // {
  //   path: '/add',
  //   component: GroupUpdateComponent
  // }
];



@NgModule({ 
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  declarations: [GroupsComponent]
})
export class GroupsModule { }