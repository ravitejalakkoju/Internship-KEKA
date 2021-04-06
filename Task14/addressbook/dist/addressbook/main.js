(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Coding\Internship\Task14\addressbook\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JnMZ":
/*!**********************************************************************!*\
  !*** ./src/app/employees/employees-list/employees-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: EmployeesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesListComponent", function() { return EmployeesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../employee.service */ "lFu7");
/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../route.service */ "gIJ7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["employees", a1]; };
function EmployeesListComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", employee_r4.id === ctx_r3.getId());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, employee_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+91 ", employee_r4.mobile, "");
} }
function EmployeesListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeesListComponent_div_3_button_1_Template, 10, 8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.employees);
} }
function EmployeesListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " EMPTY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EmployeesListComponent {
    constructor(employeeService, routeService) {
        this.employeeService = employeeService;
        this.routeService = routeService;
    }
    ngOnInit() {
        this.getEmployees();
    }
    getId() {
        let selectedId = 0;
        this.routeService.getEmployeeId().subscribe(id => selectedId = id);
        return selectedId;
    }
    getEmployees() {
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees = employees);
    }
}
EmployeesListComponent.ɵfac = function EmployeesListComponent_Factory(t) { return new (t || EmployeesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_route_service__WEBPACK_IMPORTED_MODULE_2__["RouteService"])); };
EmployeesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeesListComponent, selectors: [["employees-list"]], decls: 6, vars: 2, consts: [[1, "text-contact", "roboto", "fw-bold", "small"], [1, "overflow-y", "ms-lg-3", "mt-lg-3"], ["class", "nav flex-column nav-pills", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "nav", "flex-column", "nav-pills"], ["class", "nav-link text-left rounded-0 p-2 pt-1 border border-secondary w-100", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], [1, "nav-link", "text-left", "rounded-0", "p-2", "pt-1", "border", "border-secondary", "w-100", 3, "routerLink"], [1, "fs-5"], [1, "lh-1", "m-1", "small"], [1, "small"], [1, "text-secondary", "bg-light", "p-4"]], template: function EmployeesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CONTACTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmployeesListComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmployeesListComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employees.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".active.nav-link[_ngcontent-%COMP%] {\n  background-color: rgba(68, 186, 255, 0.301) !important;\n  color: black !important;\n}\n\n.text-contact[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\nbutton.nav-link[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.overflow-y[_ngcontent-%COMP%] {\n  max-height: 65vh;\n  overflow-y: scroll;\n}\n\n.overflow-y[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5em;\n}\n\n.overflow-y[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);\n}\n\n.overflow-y[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #e0e0e0;\n}\n\n.border-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #e4e4e4 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbXBsb3llZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNEQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsNENBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKIiwiZmlsZSI6ImVtcGxveWVlcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS5uYXYtbGlua3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY4LCAxODYsIDI1NSwgMC4zMDEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRhY3R7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuYnV0dG9uLm5hdi1saW5re1xyXG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm92ZXJmbG93LXl7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4ub3ZlcmZsb3cteTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwLjVlbTtcclxufVxyXG4gXHJcbi5vdmVyZmxvdy15Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuIFxyXG4ub3ZlcmZsb3cteTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDIyNCwgMjI0KTtcclxufVxyXG5cclxuLmJvcmRlci1zZWNvbmRhcnl7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjI4LCAyMjgsIDIyOCkgIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "MhI8":
/*!******************************************************!*\
  !*** ./src/app/employees/employee-routing.module.ts ***!
  \******************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "Pzyf");
/* harmony import */ var _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-form/employee-form.component */ "OnaP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const employeeRoutes = [
    { path: 'add', component: _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeFormComponent"] },
    { path: ':id', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeDetailsComponent"] },
    { path: ':id/edit', component: _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeFormComponent"] }
];
class EmployeeRoutingModule {
}
EmployeeRoutingModule.ɵfac = function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); };
EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EmployeeRoutingModule });
EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(employeeRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "OnaP":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-form/employee-form.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFormComponent", function() { return EmployeeFormComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../employee */ "VKZK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../route.service */ "gIJ7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../employee.service */ "lFu7");
/* harmony import */ var _employee_form_validator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../employee-form-validator.service */ "m6s1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function EmployeeFormComponent_div_18_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required * ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeeFormComponent_div_18_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Enter in correct pattern [eg., xyz.123_abc@hyd.co.in] ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeeFormComponent_div_18_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "E-Mail already exists.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeeFormComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EmployeeFormComponent_div_18_small_1_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EmployeeFormComponent_div_18_small_2_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EmployeeFormComponent_div_18_small_3_Template, 2, 0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.email.errors == null ? null : ctx_r0.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.email.errors == null ? null : ctx_r0.email.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.email.errors == null ? null : ctx_r0.email.errors.duplicate);
} }
function EmployeeFormComponent_div_24_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mobile No. is required *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeeFormComponent_div_24_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone Number should be of 10 Digits.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeeFormComponent_div_24_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Mobile Number already exists.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeeFormComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EmployeeFormComponent_div_24_small_1_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EmployeeFormComponent_div_24_small_2_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EmployeeFormComponent_div_24_small_3_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.mobile.errors == null ? null : ctx_r1.mobile.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.mobile.errors == null ? null : ctx_r1.mobile.errors.pattern);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.mobile.errors == null ? null : ctx_r1.mobile.errors.duplicate);
} }
function EmployeeFormComponent_div_33_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Wrong Pattern !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EmployeeFormComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EmployeeFormComponent_div_33_small_1_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.website.errors == null ? null : ctx_r2.website.errors.pattern);
} }
function EmployeeFormComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
} }
function EmployeeFormComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r5.employeeForm.valid);
} }
function EmployeeFormComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r7.employeeForm.valid);
} }
class EmployeeFormComponent {
    constructor(routeService, activatedRoute, employeeService, formValidator, route, location, fb) {
        this.routeService = routeService;
        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
        this.formValidator = formValidator;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.employee = new _employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
        this.employeeForm = this.fb.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.formValidator.patternValidator(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/), this.formValidator.duplicateValidator('email')]],
            'mobile': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, this.formValidator.patternValidator(/^\d{10}/), this.formValidator.duplicateValidator('mobile')]],
            'landline': [''],
            'website': ['', this.formValidator.patternValidator(/www\.[a-z0-9.-]+\.[a-z]{2,}$/)],
            'address': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
        this.routeService.updateEmployeeId(0);
    }
    ngOnInit() {
        const url = this.activatedRoute.snapshot.url;
        this.action = url[url.length - 1].path;
        if (this.action == 'edit') {
            this.activatedRoute.paramMap.subscribe(params => this.getEmployee());
            this.add = false;
        }
        else {
            this.routeService.updateEmployeeId(0);
            this.add = true;
        }
        this.routeService.updateFormAction(this.add);
        this.employeeForm.patchValue(this.employee);
    }
    get name() {
        return this.employeeForm.get('name');
    }
    get email() {
        return this.employeeForm.get('email');
    }
    get mobile() {
        return this.employeeForm.get('mobile');
    }
    get website() {
        return this.employeeForm.get('website');
    }
    get address() {
        return this.employeeForm.get('address');
    }
    getEmployee() {
        const id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.routeService.updateEmployeeId(id);
        this.employeeService.getEmployee()
            .subscribe(employee => this.employee = Object.assign({}, employee));
        if (Object.keys(this.employee).length === 0)
            this.route.navigate(['/']);
    }
    onSubmit() {
        this.add ? this.addEmployee() : this.saveEmployee();
    }
    addEmployee() {
        let id;
        this.employeeService.addEmployee(this.employeeForm.value).subscribe(returnId => id = returnId);
        this.route.navigate([`employees/${id}`]);
    }
    saveEmployee() {
        let id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.employeeService.updateEmployee(this.employeeForm.value);
        this.route.navigate([`employees/${id}`]);
    }
    goBack() {
        this.location.back();
    }
}
EmployeeFormComponent.ɵfac = function EmployeeFormComponent_Factory(t) { return new (t || EmployeeFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_employee_form_validator_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeFormValidatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
EmployeeFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EmployeeFormComponent, selectors: [["app-employee-form"]], decls: 49, vars: 19, consts: [["id", "employee-form-div", 1, "mb-5", "p-4", "bg-white", "col-11", "col-lg-7"], [3, "click"], [1, "fa", "fa-close", "position-absolute", 2, "right", "1rem", "top", "1rem"], ["novalidate", "", 1, "row", "g-3", "needs-validation", 3, "formGroup", "ngSubmit"], [1, "col-12", "col-lg-11", "col-xl-10"], [1, "col-md-12"], ["for", "employeeName", 1, "form-label", "m-0", "small", "fw-bold"], ["type", "text", "formControlName", "name", "required", "", 1, "form-control", "rounded-0", "border-dark"], [1, "text-danger"], ["for", "email", 1, "form-label", "m-0", "small", "fw-bold"], [1, "input-group", "has-validation"], ["id", "inputGroupPrepend", 1, "input-group-text", "border-dark", "rounded-0", "border-right-0"], ["type", "email", "formControlName", "email", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control", "rounded-0", "border-dark"], ["class", "col-12", 4, "ngIf"], [1, "row"], [1, "col-md-6"], ["for", "mobileNum", 1, "form-label", "m-0", "small", "fw-bold"], ["type", "number", "formControlName", "mobile", "required", "", 1, "form-control", "rounded-0", "border-dark"], [4, "ngIf"], ["for", "landline", 1, "form-label", "m-0", "small", "fw-bold"], ["type", "number", "formControlName", "landline", 1, "form-control", "rounded-0", "border-dark"], ["for", "website", 1, "form-label", "m-0", "small", "fw-bold"], ["type", "url", "formControlName", "website", "placeholder", "eg., www.google.com  ", 1, "form-control", "rounded-0", "border-dark"], ["for", "address", 1, "form-label", "m-0", "small", "fw-bold"], ["type", "textarea", "formControlName", "address", "required", "", 1, "form-control", "rounded-0", "border-dark"], [1, "col-12", "d-flex", "justify-content-end"], [1, "btn", "me-2", "btn-success", "rounded-0", "p-1", "ps-5", "pe-5", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenblock", ""], ["elseblock", ""], [1, "col-12"], ["class", "text-danger", 4, "ngIf"], ["class", "text-danger col-12", 4, "ngIf"], [1, "text-danger", "col-12"], ["type", "submit", 1, "btn", "btn-success", "rounded-0", "p-1", "ps-5", "pe-5", 3, "disabled"]], template: function EmployeeFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeeFormComponent_Template_a_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function EmployeeFormComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Name is required *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, EmployeeFormComponent_div_18_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, EmployeeFormComponent_div_24_Template, 4, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Landline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, EmployeeFormComponent_div_33_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Address is required *");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmployeeFormComponent_Template_a_click_42_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, EmployeeFormComponent_div_44_Template, 1, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, EmployeeFormComponent_ng_template_45_Template, 2, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, EmployeeFormComponent_ng_template_47_Template, 2, 1, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.employeeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.name.invalid && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", ctx.name.valid || ctx.name.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.email.invalid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.name.invalid && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mobile.invalid && ctx.mobile.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.website.invalid && ctx.website.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-invalid", ctx.name.invalid && ctx.name.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("d-none", ctx.address.valid || ctx.address.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.add)("ngIfThen", _r4)("ngIfElse", _r6);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: [".address[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: pre-line;\n}\n\n#employee-form-div[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  margin: 1rem 1rem 0 0 !important;\n  box-shadow: 0 0 10px black;\n}\n\n#close-form[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbXBsb3llZS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImVtcGxveWVlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkcmVzc3tcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG5cclxuI2VtcGxveWVlLWZvcm0tZGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggYmxhY2s7XHJcbn1cclxuXHJcbiNjbG9zZS1mb3JtOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "Pzyf":
/*!**************************************************************************!*\
  !*** ./src/app/employees/employee-details/employee-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../employee.service */ "lFu7");
/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../route.service */ "gIJ7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["edit"]; };
function EmployeeDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDetailsComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteEmployee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Address: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.employee.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r0.employee.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Mobile: +91 ", ctx_r0.employee.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Landline: ", ctx_r0.employee.landline, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Website: ", ctx_r0.employee.website, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.employee.address);
} }
function EmployeeDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No such contact exist [ wrong route ]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EmployeeDetailsComponent {
    constructor(activatedRoute, employeeService, routeService, router) {
        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
        this.routeService = routeService;
        this.router = router;
        this.activatedRoute.paramMap.subscribe(params => this.ngOnInit());
    }
    ngOnInit() {
        this.getEmployee();
    }
    ngOnDestroy() {
        this.routeService.updateEmployeeId(0);
    }
    getEmployee() {
        const id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.routeService.updateEmployeeId(id);
        this.employeeService.getEmployee()
            .subscribe(employee => this.employee = employee);
    }
    deleteEmployee() {
        if (window.confirm('Are you sure that you want to delete this address ?')) {
            this.employeeService.deleteEmployee(this.employee);
            this.router.navigate(['/']);
        }
    }
}
EmployeeDetailsComponent.ɵfac = function EmployeeDetailsComponent_Factory(t) { return new (t || EmployeeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
EmployeeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeDetailsComponent, selectors: [["employee-details"]], decls: 3, vars: 2, consts: [["class", "tabContent pt-5 pt-lg-0 position-relative", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "tabContent", "pt-5", "pt-lg-0", "position-relative"], ["id", "v-pills-tab", "role", "tabpanel", "aria-labelledby", "v-pills-id-tab", 1, "tab-pane", "fade", "show", "ms-lg-5", "position-relative"], [1, "options", "small", "position-absolute", "top-0", "end-0"], [1, "edit", "border-0", "bg-transparent", "text-secondary", "edit-employee", 3, "routerLink"], [1, "fas", "fa-pen", "me-1"], [1, "delete", "ms-md-2", "border-0", "bg-transparent", "text-secondary", "delete-employee", 3, "click"], [1, "fas", "fa-trash-alt", "me-1"], ["id", "v-pills-${employee.id}-details"], [1, "fs-4"], [1, "list-unstyled", "small", "text-dark"], [1, "mt-2", "mb-2"], [1, "roboto", 2, "font-size", "0.85rem", "white-space", "pre-wrap"], [1, "bg-light", "text-center", "text-secondary", "p-5"]], template: function EmployeeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmployeeDetailsComponent_div_0_Template, 25, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmployeeDetailsComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employee)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".edit[_ngcontent-%COMP%]:hover {\n  color: #0099ff !important;\n}\n\n.delete[_ngcontent-%COMP%]:hover {\n  color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0oiLCJmaWxlIjoiZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0OmhvdmVye1xyXG4gICAgY29sb3I6IHJnYigwLCAxNTMsIDI1NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlbGV0ZTpob3ZlcntcclxuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Q21o":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.module.ts ***!
  \***********************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee-routing.module */ "MhI8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees.component */ "Uflk");
/* harmony import */ var _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees-list/employees-list.component */ "JnMZ");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "Pzyf");
/* harmony import */ var _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-form/employee-form.component */ "OnaP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class EmployeesModule {
}
EmployeesModule.ɵfac = function EmployeesModule_Factory(t) { return new (t || EmployeesModule)(); };
EmployeesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: EmployeesModule });
EmployeesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EmployeesModule, { declarations: [_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"],
        _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeesListComponent"],
        _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailsComponent"],
        _employee_form_employee_form_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/employees.component */ "Uflk");




class AppComponent {
    constructor(location) {
        this.location = location;
        this.title = 'addressbook';
    }
    ngOnInit() {
        window.addEventListener('keydown', e => {
            if (e.keyCode === 27)
                this.location.back();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "header-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "employees");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  margin-bottom: 5rem !important;\n  padding: 0 !important;\n  font-size: 17.5px;\n}\n\n.open-sans[_ngcontent-%COMP%] {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.century-gothic[_ngcontent-%COMP%] {\n  font-family: \"Century Gothic\";\n  src: url('Century Gothic.eot');\n  src: url('Century Gothic.eot') format(\"embedded-opentype\"), url('Century Gothic.woff2') format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n.roboto[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n}\n\n*[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFLQTtFQUNJLG9DQUFBO0FBRko7O0FBS0E7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUdBQUE7RUFFQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxpQ0FBQTtBQUhKOztBQU9BO0VBQ0ksd0JBQUE7QUFKSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHZW5lcmFsXHJcblxyXG5odG1sLCBib2R5LCB1bHtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNy41cHg7XHJcbn1cclxuXHJcblxyXG4ub3Blbi1zYW5ze1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2VudHVyeS1nb3RoaWN7XHJcbiAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJztcclxuICAgIHNyYzogdXJsKCcuLi9mb250cy9DZW50dXJ5IEdvdGhpYy5lb3QnKTtcclxuICAgIHNyYzogdXJsKCcuLi9mb250cy9DZW50dXJ5IEdvdGhpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxyXG4gICAgICAgIHVybCgnLi4vZm9udHMvQ2VudHVyeSBHb3RoaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59XHJcblxyXG4ucm9ib3Rve1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4gXHJcbio6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Uflk":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees-list/employees-list.component */ "JnMZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class EmployeesComponent {
    constructor() { }
    ngOnInit() {
    }
}
EmployeesComponent.ɵfac = function EmployeesComponent_Factory(t) { return new (t || EmployeesComponent)(); };
EmployeesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeesComponent, selectors: [["employees"]], decls: 4, vars: 0, consts: [[1, "row", "m-0"], [1, "col-12", "col-lg-4", "mt-3"], [1, "col-12", "col-lg-8", "mt-2", "mt-lg-4"]], template: function EmployeesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "employees-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeesListComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbXBsb3llZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "VKZK":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
class Employee {
    constructor(id = null, name = '', email = '', mobile = '', landline = '', website = '', address = '') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _employees_employees_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees/employees.module */ "Q21o");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _employees_employees_module__WEBPACK_IMPORTED_MODULE_1__["EmployeesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _employees_employees_module__WEBPACK_IMPORTED_MODULE_1__["EmployeesModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() { }
    ngOnInit() { }
    getAction() {
        let length = window.location.hash.split('/').length;
        let action = (window.location.hash.split('/')[length - 1] == 'add');
        return action;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header-nav"]], decls: 13, vars: 2, consts: [[1, "bg-header", "p-2", "p-md-3", "navbar", "navbar-expand-lg"], [1, "century-gothic", "fs-1", "text-white"], [1, "navigation", "navbar", "navbar-expand", "bg-dark", "p-0", "m-0"], [1, "container-fluid", "fs-6", "p-0"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse", "small", "p-0"], [1, "navbar-nav", "roboto", "me-auto", "p-0", "m-0"], ["routerLink", "employees", "id", "home", 1, "link", "text-start"], ["routerLinkActive", "active", "routerLink", "employees/add", 1, "link", "text-start"], [1, "navbar-text"], ["src", "../assets/blog-icon.png", 1, "me-2", "ms-3"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Address Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "+ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.getAction());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["header.bg-header[_ngcontent-%COMP%] {\n  background-color: #1695c7;\n}\n\n.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white !important;\n  padding: 0.6rem 1rem !important;\n  font-weight: 500;\n  text-decoration: none;\n  background-color: transparent;\n  margin-right: 0.25rem !important;\n  border: 0;\n}\n\n.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #df6400 !important;\n  border-right: 2px solid white;\n  color: black;\n}\n\n.navigation[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #df6400 !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSTtFQUNJLHlCQUpHO0FBRlg7O0FBV0k7RUFDSSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0FBUlI7O0FBU1E7RUFDSSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQVBaOztBQVVJO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0FBUlIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIFZhcmlhYmxlc1xyXG4kbmF2Ymc6IHJnYig1MywgNTMsIDUzKTtcclxuJGFjdGl2ZW5hdjogcmdiKDIyMywgMTAwLCAwKTtcclxuJGhlYWRlcmJnOiByZ2IoMjIsIDE0OSwgMTk5KTtcclxuXHJcbmhlYWRlcntcclxuICAgICYuYmctaGVhZGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXJiZztcclxuICAgIH1cclxufVxyXG5cclxuLm5hdmlnYXRpb257ICAgIFxyXG4gICAgYSwgYnV0dG9ue1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNnJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmVuYXYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmVuYXYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "gIJ7":
/*!**********************************!*\
  !*** ./src/app/route.service.ts ***!
  \**********************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RouteService {
    constructor() {
        this.id = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(0);
    }
    updateEmployeeId(id) {
        this.id = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(id);
    }
    updateFormAction(add) {
        this.add = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(add);
    }
    getFormAction() {
        return this.add;
    }
    getEmployeeId() {
        return this.id;
    }
}
RouteService.ɵfac = function RouteService_Factory(t) { return new (t || RouteService)(); };
RouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouteService, factory: RouteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "lFu7":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _mock_employees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-employees */ "pn3r");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route.service */ "gIJ7");





class EmployeeService {
    constructor(activatedRoute, routeService) {
        this.activatedRoute = activatedRoute;
        this.routeService = routeService;
        this.selectedId = 0;
    }
    sortEmployees() {
        _mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"].sort((a, b) => a.name.localeCompare(b.name));
    }
    getEmployees() {
        this.sortEmployees();
        const employees = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"]);
        return employees;
    }
    getEmployee() {
        this.routeService.getEmployeeId().subscribe((id) => this.selectedId = id);
        const employee = _mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"].find(e => e.id === this.selectedId);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(employee);
    }
    addEmployee(employee) {
        employee.id = (_mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"].length > 0) ? Math.max.apply(Math, _mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"].map(e => e.id)) + 1 : 1;
        _mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"].push(employee);
        this.sortEmployees();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(employee.id);
    }
    updateEmployee(employee) {
        let employeeFound = _mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"].find(e => this.selectedId == e.id);
        Object.keys(employee).forEach(el => {
            employeeFound[el] = employee[el];
        });
    }
    deleteEmployee(employee) {
        const index = _mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"].indexOf(employee);
        if (index != -1) {
            _mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"].splice(index, 1);
        }
    }
    checkDuplicate(name, value) {
        let duplicateExist = false;
        _mock_employees__WEBPACK_IMPORTED_MODULE_0__["EMPLOYEES"].forEach(employee => {
            if (value == employee[name] && this.selectedId !== employee.id)
                duplicateExist = true;
        });
        return duplicateExist;
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_route_service__WEBPACK_IMPORTED_MODULE_4__["RouteService"])); };
EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "m6s1":
/*!**************************************************************!*\
  !*** ./src/app/employees/employee-form-validator.service.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeFormValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeFormValidatorService", function() { return EmployeeFormValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee.service */ "lFu7");


class EmployeeFormValidatorService {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    patternValidator(pattern) {
        return (control) => {
            const patternMatch = !(pattern.test(control.value) || control.value.length == 0);
            return patternMatch ? { 'pattern': { Value: control.value } } : null;
        };
    }
    duplicateValidator(type) {
        return (control) => {
            const duplicateExists = this.employeeService.checkDuplicate(type, control.value);
            return duplicateExists ? { 'duplicate': { Value: control.value } } : null;
        };
    }
}
EmployeeFormValidatorService.ɵfac = function EmployeeFormValidatorService_Factory(t) { return new (t || EmployeeFormValidatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"])); };
EmployeeFormValidatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeFormValidatorService, factory: EmployeeFormValidatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pn3r":
/*!***********************************!*\
  !*** ./src/app/mock-employees.ts ***!
  \***********************************/
/*! exports provided: EMPLOYEES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPLOYEES", function() { return EMPLOYEES; });
let EMPLOYEES = [
    { id: 1, name: 'Ravi Teja Lakkoju', email: 'ravi@technovert.com', mobile: '9292929232', landline: '040301231215', website: 'www.technovert.com', address: '123 now here, Some street, Madhapur, Hyderabad 500033' },
    { id: 2, name: 'Bharat Chillimunta', email: 'bharat@technovert.com', mobile: '9292929233', landline: '040301231215', website: 'www.technovert.com', address: '123 now here, Some street, Madhapur, Hyderabad 500033' },
    { id: 3, name: 'Pavan Kasukurthi', email: 'pavan@technovert.com', mobile: '9292929234', landline: '040301231215', website: 'www.technovert.com', address: '123 now here, Some street, Madhapur, Hyderabad 500033' },
    { id: 4, name: 'Pranay Suryapet', email: 'pranay@technovert.com', mobile: '9292929235', landline: '040301231215', website: 'www.technovert.com', address: '123 now here, Some street, Madhapur, Hyderabad 500033' },
    { id: 5, name: 'Varun Chittimella', email: 'varun@technovert.com', mobile: '9292929236', landline: '040301231215', website: 'www.technovert.com', address: '123 now here, Some street, Madhapur, Hyderabad 500033' },
    { id: 6, name: 'Chandana Jinka', email: 'chandana@technovert.com', mobile: '9292929246', landline: '040301231215', website: 'www.technovert.com', address: '123 now here, Some street, Madhapur, Hyderabad 500033' },
    { id: 7, name: 'Nikhil Reddy', email: 'nikhil@technovert.com', mobile: '9292929238', landline: '040301231215', website: 'www.technovert.com', address: '123 now here, Some street, Madhapur, Hyderabad 500033' },
    { id: 8, name: 'Ankita Patel', email: 'ankita@technovert.com', mobile: '9292929239', landline: '040301231215', website: 'www.technovert.com', address: '123 now here, Some street, Madhapur, Hyderabad 500033' },
    { id: 9, name: 'Sheetal Patnaik', email: 'sheetal@technovert.com', mobile: '9292929245', landline: '040301231215', website: 'www.technovert.com', address: '123 now here, Some street, Madhapur, Hyderabad 500033' }
];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'employees', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./employees/employees.module */ "Q21o")).then(m => m.EmployeesModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map