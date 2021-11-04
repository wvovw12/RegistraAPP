(self["webpackChunkRegistrapp"] = self["webpackChunkRegistrapp"] || []).push([["src_app_pages_escanear_escanear_module_ts"],{

/***/ 2983:
/*!***********************************************************!*\
  !*** ./src/app/pages/escanear/escanear-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscanearPageRoutingModule": () => (/* binding */ EscanearPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _escanear_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escanear.page */ 753);




const routes = [
    {
        path: '',
        component: _escanear_page__WEBPACK_IMPORTED_MODULE_0__.EscanearPage
    }
];
let EscanearPageRoutingModule = class EscanearPageRoutingModule {
};
EscanearPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EscanearPageRoutingModule);



/***/ }),

/***/ 7770:
/*!***************************************************!*\
  !*** ./src/app/pages/escanear/escanear.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscanearPageModule": () => (/* binding */ EscanearPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _escanear_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escanear-routing.module */ 2983);
/* harmony import */ var _escanear_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escanear.page */ 753);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let EscanearPageModule = class EscanearPageModule {
};
EscanearPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _escanear_routing_module__WEBPACK_IMPORTED_MODULE_0__.EscanearPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_escanear_page__WEBPACK_IMPORTED_MODULE_1__.EscanearPage]
    })
], EscanearPageModule);



/***/ }),

/***/ 753:
/*!*************************************************!*\
  !*** ./src/app/pages/escanear/escanear.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EscanearPage": () => (/* binding */ EscanearPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_escanear_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./escanear.page.html */ 9110);
/* harmony import */ var _escanear_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escanear.page.scss */ 5927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let EscanearPage = class EscanearPage {
    constructor() { }
    ngOnInit() {
    }
};
EscanearPage.ctorParameters = () => [];
EscanearPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-escanear',
        template: _raw_loader_escanear_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_escanear_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EscanearPage);



/***/ }),

/***/ 5927:
/*!***************************************************!*\
  !*** ./src/app/pages/escanear/escanear.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc2NhbmVhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 9110:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/escanear/escanear.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item class=\"animate__animated animate__fadeInRight\" >\n<ion-header [translucent]=\"true\" color=\"primary\">\n\n\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"first\" color=\"primary\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Escanear\n    </ion-title>\n    <ion-button slot=\"end\" fill=\"clear\">\n      <ion-icon slot=\"icon-only\" name=\"qr-code-outline\"  ></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n\n\n\n</ion-header>\n<ion-content>\n\n \n\n</ion-content>\n\n\n\n\n</ion-item>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_escanear_escanear_module_ts.js.map