import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { FaqComponent } from './faq.component';

const routes: Routes = [
    {
		path: "",
		component: DefaultComponent,
		children: [
			{
				path: "",
				component: FaqComponent,
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
        FaqComponent,
        
    ]
})
export class FaqModule {



}