"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var list_component_1 = require("./emails/list/list.component");
var api_service_1 = require("./api.service");
var appRoutes = [
    {
        path: 'emails',
        //loadChildren: './app/emails/list/list.module#EmailsModule'
        component: list_component_1.EmailListComponent
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
    }, {
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: false })
        ],
        declarations: [app_component_1.AppComponent, list_component_1.EmailListComponent],
        providers: [api_service_1.ApiService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map