import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<h1>Hello {{name}}</h1><list></list><li><a routerLink='/about' routerLinkActive="active">About</a></li>`,
  templateUrl: './app.template.html'
})
export class AppComponent  { name = 'Angular'; }
