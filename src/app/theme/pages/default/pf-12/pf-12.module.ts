import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { Pf12Component } from './pf-12.component';

const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        children: [
            {
                path: "",
                component: Pf12Component,
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
        Pf12Component
    ]
})
export class Pf12Module {



}