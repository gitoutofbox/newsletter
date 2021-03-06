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
var api_service_1 = require("../../api.service");
var GroupsComponent = (function () {
    function GroupsComponent(apiService) {
        this.apiService = apiService;
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.get('http://localhost:3003/groups')
            .subscribe(function (response) { return _this.listArr = response.data; });
    };
    return GroupsComponent;
}());
GroupsComponent = __decorate([
    core_1.Component({
        selector: 'groups',
        templateUrl: './list.template.html'
    }),
    __metadata("design:paramtypes", [api_service_1.ApiService])
], GroupsComponent);
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=list.component.js.map