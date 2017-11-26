import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { MemberFeeComponent } from './member.fee.component';

const routes: Routes = [
    {
		path: "",
		component: DefaultComponent,
		children: [
			{
				path: "",
				component: MemberFeeComponent,
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
        MemberFeeComponent,
        
    ]
})
export class MemberFeeModule {



}