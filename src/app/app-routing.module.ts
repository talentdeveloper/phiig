import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from "./auth/logout/logout.component";

const routes: Routes = [
    {                
        "path": "",
        "redirectTo": "home",
        "pathMatch": "full"
    },
    {
        "path": "home",
        "loadChildren": ".\/theme\/pages\/home\/home.module#HomeModule"
    },
    {   "path": 'login', 
        "loadChildren": './auth/auth.module#AuthModule' ,
    },
    {   "path": 'signup', 
        "loadChildren": './auth/auth.module#AuthModule' ,
    },
    { path: 'logout', component: LogoutComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }