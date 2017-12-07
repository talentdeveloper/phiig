import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { InvestorMoveComponent } from './investor-move.component';

const routes: Routes = [
    {
		path: "",
		component: DefaultComponent,
		children: [
			{
				path: "",
				component: InvestorMoveComponent,
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
        InvestorMoveComponent        
    ]
})
export class InvestorMoveModule {



}