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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var router_2 = require("@angular/router");
var api_service_1 = require("../../api.service");
var EmailUpdateComponent = (function () {
    function EmailUpdateComponent(route, fb, router, apiService) {
        var _this = this;
        this.route = route;
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.updateForm = this.fb.group({
            id: [''],
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email, this.duplicateCheck.bind(this)])]
        });
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    EmailUpdateComponent.prototype.duplicateCheck = function (c) {
        if (!c.value) {
            return { duplicateCheck: true };
        }
        var email = c.value;
        var id = c.root.controls.id.value;
        return this.apiService.post('http://localhost:3003/duplicate/', { type: 'email', field: 'email', id: id, value: email })
            .subscribe(function (response) {
            return { duplicateCheck: response.data ? true : false };
        });
    };
    EmailUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id) {
            this.apiService.get('http://localhost:3003/email/' + this.id)
                .subscribe(function (data) { _this.setupEditData(data.data); });
        }
    };
    EmailUpdateComponent.prototype.setupEditData = function (editDataObj) {
        this.editData = { id: editDataObj.id, name: editDataObj.name, email: editDataObj.email };
        this.updateForm.setValue(this.editData);
    };
    EmailUpdateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.updateForm.valid) {
            var postData = {
                id: this.updateForm.value.id,
                name: this.updateForm.value.name,
                email: this.updateForm.value.email
            };
            if (this.updateForm.value.id != '') {
                this.apiService.put('http://localhost:3003/email', postData).subscribe(function (data) {
                    _this.router.navigate(['/emails']);
                });
            }
            else {
                this.apiService.post('http://localhost:3003/email', postData).subscribe(function (data) {
                    _this.router.navigate(['/emails']);
                });
            }
        }
    };
    ;
    return EmailUpdateComponent;
}());
EmailUpdateComponent = __decorate([
    core_1.Component({
        selector: 'email-update',
        templateUrl: './update.template.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, forms_1.FormBuilder, router_2.Router, api_service_1.ApiService])
], EmailUpdateComponent);
exports.EmailUpdateComponent = EmailUpdateComponent;
//# sourceMappingURL=update.component.js.map