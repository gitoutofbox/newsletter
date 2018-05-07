import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { EmailListComponent } from './emails/list/list.component';

import { ApiService }  from './api.service';

const appRoutes: Routes = [
  {
    path: 'emails',
    //loadChildren: './app/emails/list/list.module#EmailsModule'
    component: EmailListComponent
  }, {
    path: 'email-update/:id',
    loadChildren: './app/emails/update/update.module#EmailUpdateModule'
  }, {
    path: 'email-add',
    //component: EmailUpdateComponent
    loadChildren: './app/emails/update/update.module#EmailUpdateModule'
  },
  
  
  {
    path: 'groups',
    loadChildren: './app/groups/list/list.module#GroupsModule'
  },{
    path: 'group-add',
    //component: EmailUpdateComponent
    loadChildren: './app/groups/update/update.module#GroupUpdateModule'
  },
  {
    path: 'group-update/:id',
    //component: EmailUpdateComponent
    loadChildren: './app/groups/update/update.module#GroupUpdateModule'
  },

  {
    path: 'send-email',
    loadChildren: './app/send.email/send.email.module#SendEmailModule'
  },
  { 
    path: '',
    redirectTo: '/emails',
    pathMatch: 'full'
  }  
];



@NgModule({
  imports:      [  BrowserModule, HttpModule, 
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    )
  ],
  declarations: [ AppComponent, EmailListComponent ],
  providers: [ApiService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
