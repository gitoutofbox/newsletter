import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EmailListComponent } from './list.component';


const routes: Routes = [
  {
    path: '',
    component: EmailListComponent
  }
];

@NgModule({ 
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  declarations: [EmailListComponent]
})
export class EmailsModule { }