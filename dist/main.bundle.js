webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_search_search_component__ = __webpack_require__("../../../../../src/app/home/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_videos_videos_component__ = __webpack_require__("../../../../../src/app/home/videos/videos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__home_search_search_component__["a" /* SearchComponent */]
            },
            {
                path: 'videos',
                component: __WEBPACK_IMPORTED_MODULE_4__home_videos_videos_component__["a" /* VideosComponent */]
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'chien';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'chien-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_audio_directive__ = __webpack_require__("../../../../../src/app/home/audio.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_search_search_component__ = __webpack_require__("../../../../../src/app/home/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_videos_videos_component__ = __webpack_require__("../../../../../src/app/home/videos/videos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__error_error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_audio_directive__["a" /* AudioDirective */],
            __WEBPACK_IMPORTED_MODULE_12__home_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_videos_videos_component__["a" /* VideosComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__error_error_component__["a" /* ErrorComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__home_home_service__["a" /* HomeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-dialog-content>\n    <strong>{{_injectedValue}}</strong>\n  </mat-dialog-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ErrorComponent = (function () {
    function ErrorComponent(thisDialogRef, data) {
        this.thisDialogRef = thisDialogRef;
        this.data = data;
        if (this.data) {
            this._injectedValue = this.data;
        }
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent.prototype.onNoClick = function () {
        this.thisDialogRef.close();
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'chien-error',
        template: __webpack_require__("../../../../../src/app/error/error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error.component.css")],
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */]) === "function" && _a || Object, Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/audio.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AudioDirective = (function () {
    function AudioDirective(elRef) {
        this.elRef = elRef;
    }
    // SCROLLTOP apos a VIEW de carregamento de DIGITAMENTO
    AudioDirective.prototype.ngAfterViewInit = function () {
        var currentTime = __WEBPACK_IMPORTED_MODULE_1__home_service__["a" /* HomeService */].getTimeStamp();
        if (!currentTime) {
            this.elRef.nativeElement.pause();
            return;
        }
        this.elRef.nativeElement.currentTime = currentTime;
        this.elRef.nativeElement.pause();
    };
    return AudioDirective;
}());
AudioDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appAudio]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], AudioDirective);

var _a;
//# sourceMappingURL=audio.directive.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\r\n  min-height: 10vh;\r\n  max-height: 10vh;\r\n}\r\n\r\n.example-sidenav {\r\n  padding: 20px;\r\n}\r\n\r\n.example-container {\r\n  min-width: 98vw;\r\n  max-width: 98vw;\r\n  min-height: 90vh;\r\n}\r\n\r\n.example-sidenav {\r\n  padding: 0;\r\n}\r\n\r\n.content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  min-height: 90vh;\r\n  overflow: hidden;\r\n  max-width: 98vw;\r\n}\r\n\r\n.example-sidenav-content {\r\n  min-width: 5vw;\r\n  max-width: 5vw;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.example-sidenav-content button {\r\n  padding: 0;\r\n  height: 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.example-sidenav-right {\r\n  min-width: 90vw;\r\n  max-width: 90vw;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar\">\n  <span>Sistema para recuperação de vídeos a partir do áudio</span>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #sidenav class=\"example-sidenav\">\n    <mat-list>\n      <mat-list-item><button routerLink=\"\" mat-button color=\"primary\">Search</button></mat-list-item>\n      <mat-list-item><button routerLink=\"videos\" mat-button color=\"primary\">Videos</button></mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n\n  <div class=\"content\">\n    <div class=\"example-sidenav-content\">\n      <button type=\"button\" mat-button (click)=\"sidenav.open()\">\n        <mat-icon matSuffix>list</mat-icon>\n      </button>\n    </div>\n\n    <div class=\"example-sidenav-right\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'chien-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        // private url: string = `http://localhost:3001`
        this.url = "https://watson-video.herokuapp.com";
    }
    HomeService.getTimeStamp = function () {
        return this.timeStamp;
    };
    HomeService.setTimeStamp = function (time) {
        this.timeStamp = time;
    };
    HomeService.prototype.buscarTodosVideos = function () {
        return this.http.get("/apiswatson/allvideos")
            .map(function (res) { return res.json(); });
    };
    HomeService.prototype.buscarVideos = function (data) {
        var body = JSON.stringify({ data: data });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        return this.http.post('/apiswatson/trechos', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HomeService.prototype.enviarAudio = function (data) {
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-type': 'application/json' });
        return this.http.post(this.url + '/apiswatson/audio', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    HomeService.prototype.removerVideo = function (video) {
        return this.http.delete('/apiswatson/' + video)
            .map(function (res) { return res.json(); });
    };
    return HomeService;
}());
HomeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HomeService);

var _a;
//# sourceMappingURL=home.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat {\r\n    min-width: 100vw;\r\n    min-height: 100%;\r\n    margin: 2vh auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.progress {\r\n    min-width: 90vw;\r\n    max-width: 90vw;\r\n}\r\n\r\n.example-form {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: column;\r\n            flex-flow: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    min-width: 90vw;\r\n    min-height: 10vh;\r\n}\r\n\r\n.example-form button {\r\n    min-width: 90vw;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.form {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    .chat {\r\n        min-width: 80vw;\r\n    }\r\n\r\n    .progress {\r\n        min-width: 40vw;\r\n        max-width: 40vw;\r\n    }\r\n\r\n    .example-form button, .example-full-width {\r\n        min-width: 40vw;\r\n        max-width: 40vw;\r\n        margin: 3vh auto;\r\n    }\r\n\r\n    .video {\r\n        margin: 0 auto;\r\n        max-width: 40vw;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat\">\n  <div class=\"example-form\" *ngIf=\"!inProgress\">\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"enviarDados(myForm.value, myForm.valid)\" class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput autofocus formControlName=\"trecho\" \n        class=\"form-control\"\n        placeholder=\"Digite o trecho\" >\n        <mat-icon matSuffix>mode_edit</mat-icon>\n        <mat-error *ngIf=\"myForm.controls.trecho.invalid\">\n          É <strong>obrigatório</strong>\n        </mat-error>\n      </mat-form-field>\n    </form>\n  </div>\n  <div class=\"progress\">\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"inProgress\"></mat-progress-bar>\n  </div>\n  <video controls=\"controls\" autoplay=\"false\" *ngIf=\"videoUrl\" class=\"video\" appAudio matTooltip=\"{{ inputDigitado }}\">\n    <source src=\"{{ videoUrl }}\" type=\"video/mp4\"/>\n  </video>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(router, dialog, fb, homeService) {
        this.router = router;
        this.dialog = dialog;
        this.fb = fb;
        this.homeService = homeService;
        this.processando = false;
        this.fileName = 'Choose 1 file';
        this.inProgress = false;
        this.cpf = '';
        // criar o FORMULARIO
        this.myForm = fb.group({
            'trecho': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required])]
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    // abrir o DIALOG
    SearchComponent.prototype.openDialog = function (msg) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__error_error_component__["a" /* ErrorComponent */], {
            width: 'auto',
            data: msg
        });
    };
    // enviar os DADOS do FORM
    SearchComponent.prototype.enviarDados = function (post, isValid) {
        var _this = this;
        // se o form esta VALIDO
        if (isValid) {
            this.videoUrl = undefined;
            this.inProgress = true;
            this.homeService.buscarVideos(post.trecho)
                .subscribe(function (resp) {
                console.log(resp);
                _this.myForm.reset();
                _this.inProgress = false;
                _this.inputDigitado = post.trecho;
                if (resp.results.length != 0) {
                    var data = JSON.parse(resp.results[0].data);
                    data.results[0].alternatives[0].timestamps.map(function (timestamp) {
                        if (timestamp[0].toLowerCase().includes(post.trecho.split(' ')[0].toLowerCase())) {
                            __WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* HomeService */].setTimeStamp(timestamp[1]);
                            return;
                        }
                    });
                    // this.videoUrl = `https://dal.objectstorage.open.softlayer.com/v1/AUTH_07a5d8e900744943b109ea40561d202d/file/${resp.results[0].id}.mp4`
                    _this.videoUrl = "http://localhost:3001/videos-processed/" + resp.results[0].id + ".mp4";
                    return;
                }
                _this.openDialog('Não tem nenhum conteúdo!!');
            });
        }
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'chien-search',
        template: __webpack_require__("../../../../../src/app/home/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__home_service__["a" /* HomeService */]) === "function" && _d || Object])
], SearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/videos/videos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search {\r\n    max-width: 100%;\r\n    min-width: 100%;\r\n    min-height: 10vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-top: 2vh;\r\n}\r\n\r\n.fileContainer {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.fileContainer [type=file] {\r\n    cursor: inherit;\r\n    display: block;\r\n    font-size: 99px;\r\n    filter: alpha(opacity=0);\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n    opacity: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    text-align: right;\r\n    top: 0;\r\n}\r\n\r\n/* Example stylistic flourishes */\r\n\r\n.fileContainer {\r\n    background: transparent;\r\n    border-radius: .5em;\r\n    float: left;\r\n    padding: .5em;\r\n}\r\n\r\n.fileContainer [type=file] {\r\n    cursor: pointer;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    .upload {\r\n        min-width: 30vw;\r\n        margin: 0 auto;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -ms-flex-pack: distribute;\r\n            justify-content: space-around;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n\r\n    .filename {\r\n        min-width: 40%;\r\n        border-bottom: 1px dotted #000;\r\n    }\r\n\r\n    .buttons {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n\r\n    .right {\r\n        max-width: 100%;\r\n        min-height: 100%;\r\n    }\r\n\r\n    .videos {\r\n        min-width: 90vw;\r\n        padding: 0;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n\r\n    .ul_videos {\r\n        margin: 0;\r\n        padding: 0;\r\n        list-style: none;\r\n        min-width: 100%;\r\n        min-height: 100%;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: start;\r\n            -ms-flex-pack: start;\r\n                justify-content: flex-start;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: row wrap;\r\n                flex-flow: row wrap;\r\n    }\r\n\r\n    .li_videos {\r\n        margin-top: 5vh;\r\n        margin-bottom: 1vh;\r\n        margin-left: 2vw;\r\n        margin-right: 0;\r\n        max-width: 30%;\r\n        min-width: 30%;\r\n        max-height: 40%;\r\n        min-height: 40%;\r\n    }\r\n\r\n    .example-card {\r\n        padding-bottom: 0;\r\n        padding-top: 0;\r\n        padding-left: 5px;\r\n        padding-right: 5px;\r\n        min-width: 95%;\r\n        max-width: 95%;\r\n        min-height: 40vh;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n            -ms-flex-flow: column;\r\n                flex-flow: column;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n    }\r\n\r\n    .card-content {\r\n        margin: 0;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: center;\r\n            -ms-flex-pack: center;\r\n                justify-content: center;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n    }\r\n\r\n    .video {\r\n        max-width: 100%;\r\n        min-width: 100%;\r\n        max-height: 32vh;\r\n        min-height: 32vh;\r\n    }\r\n\r\n    .actions {\r\n        padding: 0;\r\n        margin-right: 0;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: end;\r\n            -ms-flex-pack: end;\r\n                justify-content: flex-end;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"right\">\n  <div class=\"search\">\n    <div class=\"upload\" *ngIf=\"!processando\">\n      <div class=\"filename\">\n        {{ fileName }}\n      </div>\n      <div class=\"buttons\">\n        <label class=\"fileContainer\">\n          <button mat-fab color=\"warn\" class=\"buttonFile\"><mat-icon matSuffix>attach_file</mat-icon></button>\n          <input type=\"file\" (change)=\"onFileChange($event)\"/>\n        </label>\n        <button mat-raised-button color=\"primary\" (click)=\"processFile()\">Process</button>\n      </div>\n    </div>\n    <mat-spinner *ngIf=\"processando\"></mat-spinner>\n  </div>\n\n  <div class=\"videos\">\n    <ul class=\"ul_videos\">\n      <li class=\"li_videos\" *ngFor=\"let video of videos\">\n        <mat-card class=\"example-card\">\n          <mat-card-content class=\"card-content\">\n            <video controls=\"controls\" autoplay=\"false\" class=\"video\" appAudio matTooltip=\"{{ video.videoName }}\">\n              <source src=\"{{ video.videoUrl }}\" type=\"video/mp4\"/>\n            </video>\n          </mat-card-content>\n          <mat-card-actions class=\"actions\">\n            <button mat-icon-button color=\"warn\" matTooltip=\"Remover\" (click)=\"removerVideo(video.videoName)\">\n              <mat-icon class=\"mat-24\">clear</mat-icon>\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/videos/videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_service__ = __webpack_require__("../../../../../src/app/home/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideosComponent = (function () {
    // private url: string = ``
    function VideosComponent(dialog, homeService) {
        this.dialog = dialog;
        this.homeService = homeService;
        this.videos = [];
        this.processando = false;
        this.fileName = 'Choose 1 file';
        // private url: string = `http://localhost:3001`
        this.url = "https://watson-video.herokuapp.com";
    }
    VideosComponent.prototype.ngOnInit = function () {
        this.buscarVideos();
    };
    // abrir o DIALOG
    VideosComponent.prototype.openDialog = function (msg) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__error_error_component__["a" /* ErrorComponent */], {
            width: 'auto',
            data: msg
        });
    };
    VideosComponent.prototype.buscarVideos = function () {
        var _this = this;
        this.homeService.buscarTodosVideos()
            .subscribe(function (res) {
            _this.videos = [];
            res.map(function (video) {
                var videos = {
                    videoName: video,
                    videoUrl: "/videos-processed/" + video
                };
                _this.videos.push(videos);
            });
        }, function (err) {
            _this.openDialog(err.json());
        });
    };
    VideosComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            this.file = event.target.files[0];
            this.fileName = this.file.name;
            reader.readAsDataURL(this.file);
            reader.onload = function () {
                _this.fileUpload = {
                    name: _this.fileName,
                    base: reader.result.split(',')[1]
                };
            };
        }
    };
    VideosComponent.prototype.processFile = function () {
        var _this = this;
        if (!this.fileUpload) {
            this.openDialog('Upload someone file!');
            return;
        }
        this.processando = true;
        this.file = null;
        this.fileName = 'Choose 1 file';
        this.homeService.enviarAudio(this.fileUpload)
            .subscribe(function (res) {
            _this.buscarVideos();
            _this.processando = false;
            _this.openDialog(res);
        }, function (err) {
            _this.processando = false;
            _this.openDialog('Error!');
        });
    };
    VideosComponent.prototype.removerVideo = function (video) {
        var _this = this;
        this.homeService.removerVideo(video)
            .subscribe(function (res) {
            var videos = _this.videos.slice(0);
            _this.videos = videos.filter(function (v) { return v.videoName != video; });
            _this.openDialog(res);
        });
    };
    return VideosComponent;
}());
VideosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-videos',
        template: __webpack_require__("../../../../../src/app/home/videos/videos.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/videos/videos.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('fade', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                    opacity: 1,
                    transform: 'scale(1.0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({
                    opacity: 0,
                    transform: 'scale(0.0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('* => *', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('500ms 0s ease-in-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__home_service__["a" /* HomeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__home_service__["a" /* HomeService */]) === "function" && _b || Object])
], VideosComponent);

var _a, _b;
//# sourceMappingURL=videos.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    api_url: "https://watson-video.herokuapp.com"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map