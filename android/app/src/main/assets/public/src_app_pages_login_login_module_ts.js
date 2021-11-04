(self["webpackChunkRegistrapp"] = self["webpackChunkRegistrapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/components.module */ 5642);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 1628);








let LoginPage = class LoginPage {
    constructor(router, alertController, menu, storage) {
        this.router = router;
        this.alertController = alertController;
        this.menu = menu;
        this.storage = storage;
        this.usuario = {
            username: '',
            password: '',
        };
        this.logeado = {
            desc: 'Habilitado',
            user: '',
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        this.logInUser();
        /*
          let navextras:NavigationExtras={
            state:{
              miusuario:this.user
            }
          };
    
          this.router.navigate(['/home'],navextras);
        }*/
    }
    logInUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let userOk = yield this.storage.get(this.usuario.username);
            if (userOk != null) {
                console.log('Usuario encontrado: ' + userOk.username);
                const val = yield this.storage.set(this.logeado.desc, this.usuario.username);
                console.log(val);
                document.location.href = 'home';
            }
            else {
                this.presentAlert('No hemos encontrado ningún usuario con esas credenciales');
            }
        });
    }
    presentAlert(mensaje) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'personalizada',
                header: 'Error al Ingresar',
                subHeader: 'Usuario no encontrado',
                message: mensaje,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".blue {\n  color: #0813ad;\n}\n\n.blueBackGr {\n  --background: rgb(8, 15, 112);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWV7XHJcbiAgY29sb3I6IHJnYig4LCAxOSwgMTczKTtcclxufVxyXG5cclxuLmJsdWVCYWNrR3J7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoOCwgMTUsIDExMik7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-logheader></app-logheader>\r\n\r\n<ion-content>\r\n  <div>\r\n    <ion-grid fixed class=\"ion-padding-top\">\r\n      <ion-row>\r\n        <ion-col size=\"2\"></ion-col>\r\n        <ion-col size=\"8\" class=\"ion-padding\">\r\n          <form #LogForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\r\n\r\n            <ion-title></ion-title>\r\n            <h3>Ingrese sus datos</h3>\r\n            <ion-item class=\"ion-padding-top animate__animated animate__fadeIn\">\r\n\r\n              <ion-label position=\"floating\">Usuario</ion-label>\r\n              <ion-input type=\"text\" required [(ngModel)]=\"usuario.username\" name=\"loguser\"></ion-input>\r\n            </ion-item>\r\n            <ion-item class=\"ion-padding-top animate__animated animate__fadeIn\">\r\n              <ion-label position=\"floating\">Contraseña</ion-label>\r\n              <ion-input type=\"password\" [(ngModel)]=\"usuario.password\" required name=\"logpass\" ></ion-input>\r\n\r\n            </ion-item>\r\n            <ion-text color=\"primary\" routerLink=\"../passrecover\" >\r\n              <p class=\"animate__animated animate__fadeIn\">¿Olvidaste tu Contraseña?</p>\r\n            </ion-text>\r\n\r\n            <ion-text color=\"primary\" routerLink=\"../registro\">\r\n              <p class=\"animate__animated animate__fadeIn\">Registrarse</p>\r\n            </ion-text>\r\n\r\n            <div class=\"ion-padding-top  animate__animated animate__fadeIn\">\r\n              <ion-button class=\"blueBackGr\" type=\"submit\" expand=\"block\" [disabled]=\"LogForm.invalid\"  mode=\"md\">\r\n                Ingresar\r\n\r\n              </ion-button>\r\n            </div>\r\n\r\n\r\n\r\n\r\n\r\n          </form>\r\n        </ion-col>\r\n        <ion-col size=\"2\"></ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<app-duocfooter></app-duocfooter>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map