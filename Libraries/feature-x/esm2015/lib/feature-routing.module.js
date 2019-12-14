/**
 * @fileoverview added by tsickle
 * Generated from: lib/feature-routing.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureXComponent } from './feature-x.component';
import { uploadComponent } from './components/Upload/upload.component';
/** @type {?} */
export const featureRoutes = [
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
export class FeatureXRoutingModule {
}
FeatureXRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(featureRoutes)],
                exports: [RouterModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZS1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZlYXR1cmUteC8iLCJzb3VyY2VzIjpbImxpYi9mZWF0dXJlLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQVUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBQyxNQUFNLHNDQUFzQyxDQUFDOztBQUV0RSxNQUFNLE9BQU8sYUFBYSxHQUFXO0lBQ25DO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixTQUFTLEVBQUUsTUFBTTthQUNsQjtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxlQUFlO2FBQzNCO1NBQ0Y7S0FDRjtDQUNGO0FBTUQsTUFBTSxPQUFPLHFCQUFxQjs7O1lBSmpDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZlYXR1cmVYQ29tcG9uZW50IH0gZnJvbSAnLi9mZWF0dXJlLXguY29tcG9uZW50JztcclxuaW1wb3J0IHsgdXBsb2FkQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudHMvVXBsb2FkL3VwbG9hZC5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZlYXR1cmVSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnJyxcclxuICAgIGNvbXBvbmVudDogRmVhdHVyZVhDb21wb25lbnQsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogJ3VwbG9hZCcsXHJcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd1cGxvYWQnLFxyXG4gICAgICAgIGNvbXBvbmVudDogdXBsb2FkQ29tcG9uZW50LFxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChmZWF0dXJlUm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZlYXR1cmVYUm91dGluZ01vZHVsZSB7IH1cclxuXHJcbiJdfQ==