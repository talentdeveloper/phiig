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
                "path": 'property', 
                "loadChildren": './../theme/pages/default/property/property.module#PropertyModule' ,
            },
            {  
                "path": 'fund', 
                "loadChildren": './../theme/pages/default/funds/fund.module#FundModule' ,
            },
            {  
                "path": 'faq', 
                "loadChildren": './../theme/pages/default/faq/faq.module#FaqModule' ,
            },
            {  
                "path": 'became', 
                "loadChildren": './../theme/pages/default/pf-6/pf-6.module#Pf6Module' ,
            },
            {  
                "path": 'pri-placement', 
                "loadChildren": './../theme/pages/default/pf-12/pf-12.module#Pf12Module' ,
            },
            {  
                "path": 'forum', 
                "loadChildren": './../theme/pages/default/forum/forum.module#ForumModule' ,
            },
            {  
                "path": 'property-owner', 
                "loadChildren": './../theme/pages/default/property-owner/property-owner.module#PropertyOwnerModule' ,
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