webpackJsonp([1,4],{

/***/ 289:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 289;


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(400);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular Indonesia';
        this.rootURL = 'https://angular-indonesia.github.io/';
        this.logoURL = 'https://angular-indonesia.github.io/dist/assets/angular-indonesia.png';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(456),
            styles: [__webpack_require__(454)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(398);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(189)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<nav class=\"main__nav\">\r\n    <div class=\"logo\">\r\n        <a [attr.href]=\"rootURL\">\r\n            <img [src]=\"logoURL\" alt=\"Angular Indonesia\">\r\n        </a>\r\n    </div>\r\n    <ul>\r\n        <li>\r\n            <a href=\"#tentang-kami\" title=\"\">Tentang Kami</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"#hubungi-kami\" title=\"\">Hubungi Kami</a>\r\n        </li>\r\n        <li>\r\n            <a href=\"/blogs/\" title=\"\">Blog</a>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n<header class=\"main__header\">\r\n    <div class=\"cover\">\r\n        <img [src]=\"logoURL\" class=\"logo-big\">\r\n        <div class=\"content\">\r\n        \tKomunitas Pengguna Angular Indonesia\r\n        </div>\r\n    </div>\r\n</header>\r\n\r\n<article class=\"main__article\">\r\n\t<h3 id=\"tentang-kami\">Tentang Kami</h3>\r\n\t<div class=\"content\">\r\n        <p>\r\n            Kami merupakan komunitas yang pengguna Angular di Indonesia, \r\n            kami saling bertukar informasi, sharing knowledge, bertanya jawab berbagai permasalahan mengenai Angular. Kami sadar bahwa untuk menemukan artikel mengenai Angular serta berbagai macam tips, trik dan pemecahan masalah menggunakan framework Angular tidaklah mudah apalagi bila mencari berbahasa Indonesia, untuk itulah tujuan kami adalah saling memudahkan sesama pengguna Angular dalam menerapkan framework Angular kedalam kode mereka.\r\n        </p>\r\n        <p>\r\n            Kami berawal dari <a href=\"https://m.facebook.com/groups/462764390497214\">Facebook Group</a>, kemudian membuat satu Github Organization yang selanjutnya ingin membuat satu blog atau publikasi untuk memuat berbagai artikel yang kami kumpulkan mengenai Angular dalam bahasa Indonesia.\r\n        </p>\r\n\t</div>\r\n</article>\r\n\r\n<footer class=\"main__footer\">\r\n\t<div class=\"col-3\">\r\n\t\t<div class=\"logo-footer\"></div>\r\n\t</div>\r\n\t<div class=\"col-3\">\r\n\t\t<h3>Bacaan Menarik</h3>\r\n\r\n\t\t<ul class=\"list-block\">\r\n            <li>\r\n                <a rel=\"nofollow\" href=\"https://angular.io/docs/ts/latest/\">\r\n                    Dokumentasi Angular\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a rel=\"nofollow\" href=\"https://angular.io/docs/ts/latest/quickstart.html\">\r\n                    Quick Start Angular\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a rel=\"nofollow\" href=\"https://angular.io/resources/\">\r\n                    Librari & Tools\r\n                </a>\r\n            </li>\r\n        </ul>\t\r\n\t</div>\r\n\t<div class=\"col-3\">\r\n\t\t<h3>Bantuan</h3>\t\r\n\r\n\t\t<ul class=\"list-block\">\r\n            <li>\r\n                <a rel=\"nofollow\" href=\"https://m.facebook.com/groups/462764390497214\">\r\n                    Facebook\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a rel=\"nofollow\" href=\"http://stackoverflow.com/questions/tagged/angular2\">\r\n                    Stackoverflow\r\n                </a>\r\n            </li>\r\n        </ul>\t\r\n\t</div>\r\n\t<div class=\"col-3\" id=\"hubungi-kami\">\r\n\t\t<h3>Sosial Media</h3>\t\r\n\t\t<ul class=\"list-inline\">\r\n            <li>\r\n                <a rel=\"nofollow\" href=\"https://m.facebook.com/groups/462764390497214\">\r\n                    <i class=\"fa fa-facebook-square\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a rel=\"nofollow\" href=\"https://github.com/angular-indonesia\">\r\n                    <i class=\"fa fa-github\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a rel=\"nofollow\" href=\"https://angular-indonesia.github.io\">\r\n                    <i class=\"fa fa-globe\"></i>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a rel=\"nofollow\" href=\"https://angular-indonesia.github.io/blogs\">\r\n                    <i class=\"fa fa-wordpress\"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\t\r\n\t</div>\r\n</footer>\r\n"

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ })

},[469]);
//# sourceMappingURL=main.bundle.js.map