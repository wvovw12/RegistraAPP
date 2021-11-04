(self["webpackChunkRegistrapp"] = self["webpackChunkRegistrapp"] || []).push([["default-src_app_pages_clases_clases_module_ts"],{

/***/ 5170:
/*!*******************************************************!*\
  !*** ./src/app/pages/clases/clases-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasesPageRoutingModule": () => (/* binding */ ClasesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _clases_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clases.page */ 1558);




const routes = [
    {
        path: '',
        component: _clases_page__WEBPACK_IMPORTED_MODULE_0__.ClasesPage
    }
];
let ClasesPageRoutingModule = class ClasesPageRoutingModule {
};
ClasesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClasesPageRoutingModule);



/***/ }),

/***/ 7086:
/*!***********************************************!*\
  !*** ./src/app/pages/clases/clases.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasesPageModule": () => (/* binding */ ClasesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _clases_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clases-routing.module */ 5170);
/* harmony import */ var _clases_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clases.page */ 1558);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);








let ClasesPageModule = class ClasesPageModule {
};
ClasesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _clases_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClasesPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_clases_page__WEBPACK_IMPORTED_MODULE_1__.ClasesPage]
    })
], ClasesPageModule);



/***/ }),

/***/ 1558:
/*!*********************************************!*\
  !*** ./src/app/pages/clases/clases.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClasesPage": () => (/* binding */ ClasesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_clases_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clases.page.html */ 390);
/* harmony import */ var _clases_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clases.page.scss */ 5062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ClasesPage = class ClasesPage {
    constructor() {
        this.personas = [{
                nombre: 'Programacion AppMoviles 003D',
                apellido: 'Alejandro Sanhueza',
                asistencia: '120%',
                detalles: '03-05-2021: ✔..................................................... 02-06-2021: X',
            },
            {
                nombre: 'Estadistica Descriptiva A005',
                apellido: 'Manolo Suazo',
                asistencia: '10%',
                detalles: `a0                         s`
            },
            {
                nombre: 'Ingles D007',
                apellido: 'Claudio Palma',
                asistencia: '68%',
                detalles: '03-05-2021: ✔ 02-06-2021: X'
            },
            {
                nombre: 'Arquitectura 003D',
                apellido: 'Jazna muñoz',
                asistencia: '85%',
                detalles: '03-05-2021: ✔ 02-06-2021: X'
            },
            {
                nombre: 'Calidad de Software 002D',
                apellido: 'Carlos Riffo',
                asistencia: '70%',
                detalles: '03-05-2021: ✔ 02-06-2021: X'
            },
            {
                nombre: 'Etica para el trabajo 002D',
                apellido: 'Claudia Palma',
                asistencia: '100%',
                detalles: '03-05-2021: ✔ 02-06-2021: X'
            },
            {
                nombre: 'Proceso Portafolio 420D',
                apellido: 'Andres Trujillo',
                asistencia: '0%',
                detalles: '03-05-2021: ✔ 02-06-2021: X'
            },
        ];
    }
    ngOnInit() {
    }
};
ClasesPage.ctorParameters = () => [];
ClasesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-asignaturas',
        template: _raw_loader_clases_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clases_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClasesPage);



/***/ }),

/***/ 5062:
/*!***********************************************!*\
  !*** ./src/app/pages/clases/clases.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: #cc071ee6;\n  color: #fff;\n}\n\n#faq ul {\n  padding: 0;\n}\n\n#faq ul li {\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  background: #fff;\n  box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.1);\n}\n\n#faq ul li + li {\n  margin-top: 15px;\n}\n\n#faq ul li i {\n  position: absolute;\n  transform: translate(-6px, 0);\n  margin-top: 28px;\n  right: 15px;\n}\n\n#faq ul li i:before {\n  content: \"\";\n  position: absolute;\n  transition: all 0.3s;\n  background-color: #cc071e;\n  width: 3px;\n  height: 9px;\n  transform: translate(-2px, 0) rotate(45deg);\n}\n\n#faq ul li i:after {\n  transform: translate(2px, 0) rotate(-45deg);\n  transition: all 0.3s;\n  content: \"\";\n  position: absolute;\n  background-color: #cc071ee6;\n  width: 3px;\n  height: 9px;\n}\n\n#faq ul li input[type=checkbox] {\n  position: absolute;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0;\n  touch-action: manipulation;\n}\n\n#faq ul li input[type=checkbox]:checked ~ h2 {\n  color: #000;\n}\n\n#faq ul li input[type=checkbox]:checked ~ p {\n  max-height: 0;\n  transition: 0.3s;\n}\n\n#faq ul li input[type=checkbox]:checked ~ i:before {\n  transform: translate(2px, 0) rotate(45deg);\n}\n\n#faq ul li input[type=checkbox]:checked ~ i:after {\n  transform: translate(-2px, 0) rotate(-45deg);\n}\n\n#faq ul .no-select {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n#faq ul h2 {\n  color: #cc071ee6;\n  font-size: 20px;\n  line-height: 34px;\n  text-align: left;\n  padding: 15px 15px 0;\n  text-transform: none;\n  font-weight: 300;\n  letter-spacing: 1px;\n  display: block;\n  margin: 0;\n  cursor: pointer;\n  transition: 0.2s;\n}\n\n#faq ul p {\n  color: #333;\n  text-align: left;\n  font-size: 14px;\n  line-height: 1, 45px;\n  position: relative;\n  overflow: hidden;\n  max-height: 250px;\n  will-change: max-height;\n  contain: layout;\n  display: inline-block;\n  opacity: 1;\n  transform: translate(0, 0);\n  margin-top: 5px;\n  margin-bottom: 15px;\n  padding: 0 50px 0 15px;\n  transition: 0.3s opacity, 0.6s max-height;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFJSTtFQUNJLFVBQUE7QUFEUjs7QUFFUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7QUFBWjs7QUFFZ0I7RUFDSSxnQkFBQTtBQUFwQjs7QUFHWTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFEZDs7QUFFYztFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FBQWxCOztBQUVjO0VBQ0ksMkNBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBbEI7O0FBSVk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFGaEI7O0FBS3dCO0VBQ0ksV0FBQTtBQUg1Qjs7QUFLd0I7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFINUI7O0FBTTRCO0VBQ0ksMENBQUE7QUFKaEM7O0FBTTRCO0VBQ0ksNENBQUE7QUFKaEM7O0FBV1E7RUFDSSx5QkFBQTtVQUFBLGlCQUFBO0FBVFo7O0FBV1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRaOztBQVdRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FBVFoiLCJmaWxlIjoiY2xhc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjY2MwNzFlZTY7XHJcbiAgICBjb2xvcjojZmZmO1xyXG5cclxufVxyXG5cclxuI2ZhcXtcclxuICAgIHVse1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCAtMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgICAgK3tcclxuICAgICAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC02cHgsIDApO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6MjhweDtcclxuICAgICAgICAgICAgICByaWdodDoxNXB4O1xyXG4gICAgICAgICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDcxZTtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6M3B4O1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6OXB4O1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LDApcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LDApIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjNzO1xyXG4gICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwNzFlZTY7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOjNweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OjlweDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuICAgICAgICAgICAgICAgICY6Y2hlY2tlZHtcclxuICAgICAgICAgICAgICAgICAgICB+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsMCkgcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vLXNlbGVjdHtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBjb2xvcjogI2NjMDcxZWU2O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBjb2xvcjojMzMzO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLDQ1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBtYXgtaGVpZ2h0O1xyXG4gICAgICAgICAgICBjb250YWluOmxheW91dDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNTBweCAwIDE1cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3Mgb3BhY2l0eSwwLjZzIG1heC1oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 390:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/clases/clases.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-item class=\"animate__animated animate__fadeInLeft\" >\r\n<ion-header [translucent]=\"true\" color=\"primary\">\r\n\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"first\" color=\"primary\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Asignaturas\r\n    </ion-title>\r\n    <ion-button slot=\"end\" fill=\"clear\">\r\n      <ion-icon slot=\"icon-only\" name=\"book\"  ></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n\r\n</ion-header>\r\n</ion-item>\r\n\r\n<ion-content>\r\n  \r\n\r\n  <ion-content >\r\n    \r\n    <div id=\"faq\">\r\n      <ul>\r\n        <ion-list *ngFor=\"let per of personas\" class=\"animate__animated animate__fadeInLeft\">\r\n          <li>\r\n            <input type=\"checkbox\" checked>\r\n            <i></i>\r\n           \r\n            <h2>{{per.nombre}} </h2>    <h2>Asistencia: {{per.asistencia}}</h2> \r\n            <p>{{per.detalles}}\r\n            </p>\r\n          </li>\r\n        </ion-list>\r\n         \r\n      </ul>\r\n    \r\n    \r\n    \r\n    </div>\r\n    \r\n    </ion-content>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_clases_clases_module_ts.js.map