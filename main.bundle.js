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
        this.logoURL = 'https://angular-indonesia.github.io/assets/angular-indonesia.png';
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
exports.push([module.i, ".main__nav ul, .main__footer .list-inline, .main__footer .list-block {\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.clearfix {\n  *zoom: 1; }\n  .clearfix:before, .clearfix:after {\n    display: table;\n    content: ' '; }\n  .clearfix:after {\n    clear: both; }\n\n.grid__row {\n  *zoom: 1;\n  margin: 0 auto;\n  max-width: 92.308em; }\n  .grid__row:before, .grid__row:after {\n    display: table;\n    content: ' '; }\n  .grid__row:after {\n    clear: both; }\n\n.grid__flex, .main__nav, .main__nav ul, .main__footer .list-inline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.grid__col-1 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-1 {\n      width: 8.33333%; } }\n\n.grid__col-m-1 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-1 {\n      width: 8.33333%; } }\n\n.grid__offset-1 {\n  margin-left: 8.33333%; }\n\n.grid__col-2 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-2 {\n      width: 16.66667%; } }\n\n.grid__col-m-2 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-2 {\n      width: 16.66667%; } }\n\n.grid__offset-2 {\n  margin-left: 16.66667%; }\n\n.grid__col-3, .main__footer .col-3 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-3, .main__footer .col-3 {\n      width: 25%; } }\n\n.grid__col-m-3 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-3 {\n      width: 25%; } }\n\n.grid__offset-3 {\n  margin-left: 25%; }\n\n.grid__col-4 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-4 {\n      width: 33.33333%; } }\n\n.grid__col-m-4 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-4 {\n      width: 33.33333%; } }\n\n.grid__offset-4 {\n  margin-left: 33.33333%; }\n\n.grid__col-5 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-5 {\n      width: 41.66667%; } }\n\n.grid__col-m-5 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-5 {\n      width: 41.66667%; } }\n\n.grid__offset-5 {\n  margin-left: 41.66667%; }\n\n.grid__col-6 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-6 {\n      width: 50%; } }\n\n.grid__col-m-6 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-6 {\n      width: 50%; } }\n\n.grid__offset-6 {\n  margin-left: 50%; }\n\n.grid__col-7 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-7 {\n      width: 58.33333%; } }\n\n.grid__col-m-7 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-7 {\n      width: 58.33333%; } }\n\n.grid__offset-7 {\n  margin-left: 58.33333%; }\n\n.grid__col-8 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-8 {\n      width: 66.66667%; } }\n\n.grid__col-m-8 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-8 {\n      width: 66.66667%; } }\n\n.grid__offset-8 {\n  margin-left: 66.66667%; }\n\n.grid__col-9 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-9 {\n      width: 75%; } }\n\n.grid__col-m-9 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-9 {\n      width: 75%; } }\n\n.grid__offset-9 {\n  margin-left: 75%; }\n\n.grid__col-10 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-10 {\n      width: 83.33333%; } }\n\n.grid__col-m-10 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-10 {\n      width: 83.33333%; } }\n\n.grid__offset-10 {\n  margin-left: 83.33333%; }\n\n.grid__col-11 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-11 {\n      width: 91.66667%; } }\n\n.grid__col-m-11 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-11 {\n      width: 91.66667%; } }\n\n.grid__offset-11 {\n  margin-left: 91.66667%; }\n\n.grid__col-12 {\n  float: left;\n  width: 100%; }\n  @media only screen and (min-width: 768px) {\n    .grid__col-12 {\n      width: 100%; } }\n\n.grid__col-m-12 {\n  float: left; }\n  @media only screen and (min-width: 600px) {\n    .grid__col-m-12 {\n      width: 100%; } }\n\n.grid__offset-12 {\n  margin-left: 100%; }\n\n.grid {\n  /*\r\n\t[class*=\"col-\"] {\r\n\r\n\t}\r\n\t*/ }\n\n.main__nav {\n  position: fixed;\n  z-index: 5;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 56px;\n  min-height: 56px;\n  padding: 0;\n  background: #1976d2;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.24);\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .main__nav .logo {\n    float: left;\n    width: 168px;\n    height: 56px;\n    margin: 0 72px 0 0;\n    padding: 0; }\n    .main__nav .logo img {\n      height: 60px; }\n    .main__nav .logo a {\n      font-size: 2rem;\n      text-decoration: none;\n      color: #fff; }\n  .main__nav ul {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    display: none; }\n    @media only screen and (min-width: 768px) {\n      .main__nav ul {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; } }\n    .main__nav ul li a {\n      font-size: 2rem;\n      position: relative;\n      padding: 14px 1em;\n      text-decoration: none;\n      color: #fff;\n      background-color: #1976d2; }\n      .main__nav ul li a:hover {\n        text-decoration: none;\n        background-color: #1e88e5; }\n\n.main__header {\n  position: relative;\n  color: #fff;\n  background-color: #1976d2; }\n  .main__header .cover {\n    height: 560px;\n    text-align: center;\n    box-sizing: border-box;\n    box-shadow: none;\n    padding: 150px 48px 32px 48px;\n    position: relative;\n    background: url(https://angular-indonesia.github.io/assets/super-hero-large.png) no-repeat bottom center, -webkit-linear-gradient(305deg, #0D47A1, #42A5F5);\n    background: url(https://angular-indonesia.github.io/assets/super-hero-large.png) no-repeat bottom center, linear-gradient(145deg, #0D47A1, #42A5F5);\n    background-blend-mode: multiply;\n    background-size: 100%; }\n    .main__header .cover .content {\n      font-size: 2.3rem; }\n  .main__header .logo-big {\n    -webkit-filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.24));\n            filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.24));\n    margin-bottom: 8px;\n    opacity: 1;\n    padding: 0;\n    width: 240px; }\n\n.main__article {\n  padding: 64px 96px;\n  max-width: 1200px;\n  margin: 0 auto;\n  color: #263238; }\n  .main__article h3 {\n    font-size: 3rem; }\n  .main__article .content {\n    font-size: 1.6rem; }\n\n.main__footer {\n  padding: 16px 48px;\n  background: #263238;\n  color: #fff;\n  *zoom: 1; }\n  .main__footer:before, .main__footer:after {\n    display: table;\n    content: ' '; }\n  .main__footer:after {\n    clear: both; }\n  .main__footer .logo-footer {\n    background: url(https://angular-indonesia.github.io/assets/angular-indonesia-white.png) 0 0/contain no-repeat;\n    height: 200px; }\n  .main__footer .col-3 h3 {\n    font-weight: 400;\n    line-height: 32px;\n    font-size: 2rem; }\n  .main__footer .list-inline {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .main__footer .list-inline li a {\n      color: #fff;\n      font-size: 2.5rem;\n      padding: 5px; }\n      .main__footer .list-inline li a:hover {\n        text-decoration: none; }\n  .main__footer .list-block li a {\n    color: #fff;\n    font-size: 1.4rem;\n    line-height: 32px; }\n", ""]);

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