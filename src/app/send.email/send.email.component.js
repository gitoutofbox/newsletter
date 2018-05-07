"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SendEmailComponent = (function () {
    function SendEmailComponent(fb) {
        this.fb = fb;
        this.emailForm = this.fb.group({
            group: ['', forms_1.Validators.required],
            subject: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            mainBody: ['', forms_1.Validators.required]
        });
    }
    SendEmailComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.emailForm.valid) {
            console.log(this.emailForm);
        }
    };
    ;
    return SendEmailComponent;
}());
SendEmailComponent = __decorate([
    core_1.Component({
        selector: 'send-email',
        templateUrl: './send.email.template.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], SendEmailComponent);
exports.SendEmailComponent = SendEmailComponent;
//# sourceMappingURL=send.email.component.js.map