import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { Pf6Component } from './pf-6.component';

const routes: Routes = [
    {
        path: "",
        component: DefaultComponent,
        children: [
            {
                path: "",
                component: Pf6Component,
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
        Pf6Component,

    ]
})
export class Pf6Module {



}