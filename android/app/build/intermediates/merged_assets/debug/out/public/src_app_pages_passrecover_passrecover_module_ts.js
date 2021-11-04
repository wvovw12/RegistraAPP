(self["webpackChunkRegistrapp"] = self["webpackChunkRegistrapp"] || []).push([["src_app_pages_passrecover_passrecover_module_ts"],{

/***/ 2266:
/*!*****************************************************************!*\
  !*** ./src/app/pages/passrecover/passrecover-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassrecoverPageRoutingModule": () => (/* binding */ PassrecoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _passrecover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passrecover.page */ 5144);




const routes = [
    {
        path: '',
        component: _passrecover_page__WEBPACK_IMPORTED_MODULE_0__.PassrecoverPage
    }
];
let PassrecoverPageRoutingModule = class PassrecoverPageRoutingModule {
};
PassrecoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PassrecoverPageRoutingModule);



/***/ }),

/***/ 9802:
/*!*********************************************************!*\
  !*** ./src/app/pages/passrecover/passrecover.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassrecoverPageModule": () => (/* binding */ PassrecoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _passrecover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passrecover-routing.module */ 2266);
/* harmony import */ var _passrecover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passrecover.page */ 5144);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);








let PassrecoverPageModule = class PassrecoverPageModule {
};
PassrecoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _passrecover_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassrecoverPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_passrecover_page__WEBPACK_IMPORTED_MODULE_1__.PassrecoverPage]
    })
], PassrecoverPageModule);



/***/ }),

/***/ 5144:
/*!*******************************************************!*\
  !*** ./src/app/pages/passrecover/passrecover.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassrecoverPage": () => (/* binding */ PassrecoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_passrecover_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./passrecover.page.html */ 2580);
/* harmony import */ var _passrecover_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passrecover.page.scss */ 9454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let PassrecoverPage = class PassrecoverPage {
    constructor(menu, alertController) {
        this.menu = menu;
        this.alertController = alertController;
        this.user = {
            username: ''
        };
    }
    ngOnInit() {
    }
    onSubmit(form) {
        console.log(this.user);
        let navextras = {
            state: {
                miusuario: this.user
            }
        };
        console.log('todo mal!!!!');
        let mensaje = 'Se ha enviado un mensaje a su correo asociado de:';
        this.presentAlert(mensaje);
    }
    presentAlert(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let usuario = this.user.username;
            const alert = yield this.alertController.create({
                cssClass: 'personalizada',
                header: 'Listo',
                message: 'Se ha enviado un mensaje de recuperacion al correo de: ' + usuario.toString(),
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    ionViewDidEnter() {
        this.menu.enable(false);
    }
    ionViewWillLeave() {
        this.menu.enable(true);
    }
};
PassrecoverPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
PassrecoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-passrecover',
        template: _raw_loader_passrecover_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_passrecover_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PassrecoverPage);



/***/ }),

/***/ 9454:
/*!*********************************************************!*\
  !*** ./src/app/pages/passrecover/passrecover.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("h1 {\n  text-align: center;\n}\n\np {\n  text-align: center;\n}\n\n.blue {\n  color: #0813ad;\n}\n\n.blueBackGr {\n  --background: rgb(8, 15, 112);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3NyZWNvdmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsNkJBQUE7QUFFRiIsImZpbGUiOiJwYXNzcmVjb3Zlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJsdWV7XHJcbiAgY29sb3I6IHJnYig4LCAxOSwgMTczKTtcclxufVxyXG5cclxuLmJsdWVCYWNrR3J7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoOCwgMTUsIDExMik7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 2580:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/passrecover/passrecover.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-logheader></app-logheader>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <h1>¿Olvidaste tu contraseña?</h1>\r\n   <p>Ingresa tu Usuario y te enviaremos un correo para cambiar la contraseña</p>\r\n  </div>\r\n\r\n  <div class=\"ion-padding\" >\r\n    <ion-grid fixed >\r\n      <ion-row>\r\n        <ion-col size=\"2\"></ion-col>\r\n        <ion-col size=\"8\">\r\n          <form #LogForm=\"ngForm\" (ngSubmit)=\"onSubmit(LogForm)\" >\r\n            <h3>Ingrese tu nombre de usuario</h3>\r\n            <ion-item class=\"animate__animated animate__fadeIn\">\r\n              <ion-label position=\"floating\">Usuario</ion-label>\r\n              <ion-input type=\"text\" required [(ngModel)]=\"user.username\" name=\"recuser\"></ion-input>\r\n            </ion-item>\r\n\r\n            <div class=\"ion-padding-top animate__animated animate__fadeIn\">\r\n              <ion-button class=\"blueBackGr\" type=\"submit\" expand=\"block\" [disabled]=\"LogForm.invalid\" routerLink=\"../login\">\r\n\r\n                Recuperar\r\n              </ion-button>\r\n              <ion-button expand=\"block\" routerLink=\"../login\" color=\"warning\">\r\n                Volver\r\n              </ion-button>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n          </form>\r\n        </ion-col>\r\n        <ion-col size=\"2\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n</ion-content>\r\n<app-duocfooter></app-duocfooter>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_passrecover_passrecover_module_ts.js.map