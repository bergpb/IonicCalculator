webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorPage = (function () {
    function CalculatorPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.resultnormal = '';
        this.resultbin = '0';
        this.resultoct = '0';
        this.resulthex = '0';
    }
    CalculatorPage.prototype.convertBin = function (resultnormal, base) {
        this.resultbin = parseInt(resultnormal, 10).toString(2);
    };
    CalculatorPage.prototype.convertOct = function (resultnormal, base) {
        this.resultoct = parseInt(resultnormal, 10).toString(8);
    };
    CalculatorPage.prototype.convertHex = function (resultnormal, base) {
        this.resulthex = parseInt(resultnormal, 10).toString(16);
    };
    CalculatorPage.prototype.btnClicked = function (btn) {
        if (btn == 'C') {
            this.resultnormal = '';
            this.resultbin = '0';
            this.resultoct = '0';
            this.resulthex = '0';
        }
        else if (btn == '=') {
            this.resultnormal = eval(this.resultnormal);
            this.convertBin(this.resultnormal, 2);
            this.convertOct(this.resultnormal, 8);
            this.convertHex(this.resultnormal, 16);
        }
        else if (btn == '%') {
            this.resultnormal = (parseFloat(this.resultnormal) / 100).toString();
            this.convertBin(this.resultnormal, 2);
            this.convertOct(this.resultnormal, 8);
            this.convertHex(this.resultnormal, 16);
        }
        else if (btn == 'bs') {
            this.resultnormal = this.resultnormal.toString();
            this.resultnormal = this.resultnormal.substring(0, (this.resultnormal.length - 1));
            console.log(this.resultnormal);
            if (this.resultnormal == '') {
                this.resultbin = '0';
                this.resultoct = '0';
                this.resulthex = '0';
            }
            else {
                this.convertBin(this.resultnormal, 2);
                this.convertOct(this.resultnormal, 8);
                this.convertHex(this.resultnormal, 16);
            }
        }
        else {
            //aceita o 0 antes do .
            if (btn == "." && this.resultnormal == "") {
                this.resultnormal += "0" + btn;
            }
            else if (btn == 0 && (this.resultnormal == "" || this.resultnormal == "0") && this.resultnormal.search(".") == -1) {
                // faz nad
            }
            else {
                this.resultnormal += btn;
                this.convertBin(this.resultnormal, 2);
                this.convertOct(this.resultnormal, 8);
                this.convertHex(this.resultnormal, 16);
            }
        }
    };
    CalculatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calculator',template:/*ion-inline-start:"/home/bergpb/projetos/IonicCalculator/src/pages/calculator/calculator.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            IonicPwaCalculator\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n \n<ion-content>\n    <div class="container">\n        <form class="myInputRow display">\n            <ion-item>\n                <ion-input placeholder="0" name="display" [(ngModel)]="resultnormal"></ion-input>\n            </ion-item>\n        </form>\n\n        <p style="text-align: center"><strong>Binário</strong> - {{resultbin}} / <strong>Octal</strong> - {{resultoct}} / <strong>Hexadecimal</strong> - {{resulthex}}</p>\n \n        <div class="row">\n            <button style="color: orange;" class="col" ion-button color="light" (click)="btnClicked(\'C\')"> C </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'bs\')">\n              <ion-icon ios="ios-backspace" md="ios-backspace-outline"></ion-icon>\n            </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'/\')"> / </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'*\')"> X </button>\n        </div>\n \n        <div class="row">\n            <button class="col" ion-button color="light" (click)="btnClicked(\'7\')"> 7 </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'8\')"> 8 </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'9\')"> 9 </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'-\')"> - </button>\n        </div>\n \n        <div class="row">\n            <button class="col" ion-button color="light" (click)="btnClicked(\'4\')"> 4 </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'5\')"> 5 </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'6\')"> 6 </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'+\')"> + </button>\n        </div>\n \n        <div class="row">\n            <button class="col" ion-button color="light" (click)="btnClicked(\'1\')"> 1 </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'2\')"> 2 </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'3\')"> 3 </button>\n            <button style="color: #fff; background-color: orange;" class="col" (click)="btnClicked(\'=\')"> = </button>\n        </div>\n \n        <div class="row">\n            <button class="col" ion-button color="light" (click)="btnClicked(\'%\')"> % </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'0\')"> 0 </button>\n            <button class="col" ion-button color="light" (click)="btnClicked(\'.\')"> . </button>\n            <button style="color: #fff; background-color: orange;" class="col" (click)="btnClicked(\'=\')"> = </button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/bergpb/projetos/IonicCalculator/src/pages/calculator/calculator.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], CalculatorPage);
    return CalculatorPage;
    var _a;
}());

//# sourceMappingURL=calculator.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calculator_calculator__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_calculator_calculator__["a" /* CalculatorPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_calculator_calculator__["a" /* CalculatorPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_calculator_calculator__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_calculator_calculator__["a" /* CalculatorPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/bergpb/projetos/IonicCalculator/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/bergpb/projetos/IonicCalculator/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map