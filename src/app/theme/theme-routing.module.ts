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
                "loadChildren": './../theme/pages/default/member/member.module#MemberModule',
            },
            {
                "path": 'member-fee',
                "loadChildren": './../theme/pages/default/member-fee/member.fee.module#MemberFeeModule',
            },
            {
                "path": 'property',
                "loadChildren": './../theme/pages/default/property/property.module#PropertyModule',
            },
            {
                "path": 'fund',
                "loadChildren": './../theme/pages/default/funds/fund.module#FundModule',
            },
            {
                "path": 'faq',
                "loadChildren": './../theme/pages/default/faq/faq.module#FaqModule',
            },
            {
                "path": 'became',
                "loadChildren": './../theme/pages/default/became/became.module#BecameModule',
            },
            {
                "path": 'pri-placement',
                "loadChildren": './../theme/pages/default/pri-placement/pri-placement.module#PriPlacementModule',
            },
            {
                "path": 'forum',
                "loadChildren": './../theme/pages/default/forum/forum.module#ForumModule',
            },
            {
                "path": 'property-owner',
                "loadChildren": './../theme/pages/default/property-owner/property-owner.module#PropertyOwnerModule',
            },
            {
                "path": 'investor-report',
                "loadChildren": './../theme/pages/default/investor/investor.module#InvestorModule',
            },
            {
                "path": 'investor-move',
                "loadChildren": './../theme/pages/default/investor-move/investor-move.module#InvestorMoveModule',
            },
            {
                "path": 'private-perticipation',
                "loadChildren": './../theme/pages/default/private-perticipation/private-perticipation.module#PrivatePerticipationModule',
            },
            {
                "path": 'setup-llc',
                "loadChildren": './../theme/pages/default/setup-llc/setup-llc.module#SetupLlcModule',
            },
            {
                "path": 'deal-admin-assignmnt',
                "loadChildren": './../theme/pages/default/deal-admin-assignmnt/deal-admin-assignmnt.module#DealAdminAssignmntModule',
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
        "loadChildren": './../auth/auth.module#AuthModule',
    },
    {
        "path": 'signup',
        "loadChildren": './../auth/auth.module#AuthModule',
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