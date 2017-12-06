import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from '../default.component';
import { LayoutModule } from '../../../layouts/layout.module';
import { ForumComponent } from './forum.component';

const routes: Routes = [
    {
		path: "",
		component: DefaultComponent,
		children: [
			{
				path: "",
				component: ForumComponent,
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
        ForumComponent        
    ]
})
export class ForumModule {



}