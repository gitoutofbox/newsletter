import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendEmailComponent } from './send.email.component';
//import { CKEditorModule } from 'ngx-ckeditor';
import { TinymceModule } from 'angular2-tinymce';





const routes: Routes = [
  {
    path: '',
    component: SendEmailComponent
  }
];



@NgModule({ 
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,  TinymceModule.withConfig({}), 
    [RouterModule.forChild(routes)]
  ],
  declarations: [SendEmailComponent]
})
export class SendEmailModule { }