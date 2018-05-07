"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var send_email_component_1 = require("./send.email.component");
//import { CKEditorModule } from 'ngx-ckeditor';
var angular2_tinymce_1 = require("angular2-tinymce");
var routes = [
    {
        path: '',
        component: send_email_component_1.SendEmailComponent
    }
];
var SendEmailModule = (function () {
    function SendEmailModule() {
    }
    return SendEmailModule;
}());
SendEmailModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, angular2_tinymce_1.TinymceModule.withConfig({}),
            [router_1.RouterModule.forChild(routes)]
        ],
        declarations: [send_email_component_1.SendEmailComponent]
    })
], SendEmailModule);
exports.SendEmailModule = SendEmailModule;
//# sourceMappingURL=send.email.module.js.map