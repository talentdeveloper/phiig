import { PropertyDetailComponent } from './property.detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { PropertyComponent } from './property.component';

const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        children: [
            {
                path: "",
                component: PropertyComponent,
            },
            {
                path: "detail",
                component: PropertyDetailComponent,
            }
        ]
    },
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule
    ], exports: [
        RouterModule
    ], declarations: [
        PropertyComponent,
        PropertyDetailComponent

    ]
})
export class PropertyModule {



}