(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@lib/shared-module'), require('@angular/forms'), require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('feature-x', ['exports', '@angular/common', '@lib/shared-module', '@angular/forms', '@angular/core', '@angular/router'], factory) :
    (factory((global['feature-x'] = {}),global.ng.common,global.sharedModule,global.ng.forms,global.ng.core,global.ng.router));
}(this, (function (exports,common,sharedModule,forms,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/feature-x.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureXService = /** @class */ (function () {
        function FeatureXService() {
        }
        FeatureXService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FeatureXService.ctorParameters = function () { return []; };
        /** @nocollapse */ FeatureXService.ngInjectableDef = i0.defineInjectable({ factory: function FeatureXService_Factory() { return new FeatureXService(); }, token: FeatureXService, providedIn: "root" });
        return FeatureXService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/feature-x.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureXComponent = /** @class */ (function () {
        function FeatureXComponent() {
        }
        /**
         * @return {?}
         */
        FeatureXComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FeatureXComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-FeatureX',
                        template: "\n  <router-outlet ></router-outlet>\n  "
                    }] }
        ];
        /** @nocollapse */
        FeatureXComponent.ctorParameters = function () { return []; };
        return FeatureXComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/Upload/upload.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var uploadComponent = /** @class */ (function () {
        function uploadComponent() {
            this.status = false;
        }
        /**
         * @return {?}
         */
        uploadComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
            };
        uploadComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'featurex-upload',
                        template: "<div class=\"upload-container\">\r\n<cust-fileupload [autoUpload]=\"true\"></cust-fileupload>\r\n</div>>\r\n",
                        styles: [".upload-container{padding:15px}"]
                    }] }
        ];
        /** @nocollapse */
        uploadComponent.ctorParameters = function () { return []; };
        return uploadComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/feature-routing.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var featureRoutes = [
        {
            path: '',
            component: FeatureXComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'upload',
                    pathMatch: 'full'
                },
                {
                    path: 'upload',
                    component: uploadComponent,
                }
            ]
        },
    ];
    var FeatureXRoutingModule = /** @class */ (function () {
        function FeatureXRoutingModule() {
        }
        FeatureXRoutingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [router.RouterModule.forChild(featureRoutes)],
                        exports: [router.RouterModule]
                    },] }
        ];
        return FeatureXRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/feature-x.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FeatureXModule = /** @class */ (function () {
        function FeatureXModule() {
        }
        FeatureXModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [FeatureXComponent, uploadComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            router.RouterModule,
                            sharedModule.SharedModule,
                            FeatureXRoutingModule
                        ],
                        exports: [FeatureXComponent, uploadComponent]
                    },] }
        ];
        return FeatureXModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: feature-x.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FeatureXService = FeatureXService;
    exports.FeatureXComponent = FeatureXComponent;
    exports.FeatureXModule = FeatureXModule;
    exports.ɵa = uploadComponent;
    exports.ɵc = FeatureXRoutingModule;
    exports.ɵb = featureRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=feature-x.umd.js.map