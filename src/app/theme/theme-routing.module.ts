import { NgModule } from '@angular/core';
import { ThemeComponent } from './theme.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../auth/_guards/auth.guard";

const routes: Routes = [
    {
        "path": "",
        "component": ThemeComponent,
        // "canActivate": [AuthGuard],
        "children": [
            {
                "path": "index",
                "loadChildren": ".\/pages\/default\/index\/index.module#IndexModule"
            },
            {  
                "path": 'member', 
                "loadChildren": './../theme/pages/default/member/member.module#MemberModule' ,
            },
            {  
                "path": 'member-fee', 
                "loadChildren": './../theme/pages/default/member-fee/member.fee.module#MemberFeeModule' ,
            },
            

            {
                "path": "404",
                "loadChildren": ".\/pages\/default\/not-found\/not-found\/not-found.module#NotFoundModule"
            },
            {
                "path": "",
                "redirectTo": "index",
                "pathMatch": "full"
            }
        ]
    },
    {   
        "path": 'login', 
        "loadChildren": './../auth/auth.module#AuthModule' ,
    },
    {  
        "path": 'signup', 
        "loadChildren": './../auth/auth.module#AuthModule' ,
    },
    
    {
        "path": "**",
        "redirectTo": "404",
        "pathMatch": "full"
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }