import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';
import { Helpers } from '../../../helpers';
import { Router } from '@angular/router';
import { LoginCustom } from '../../../auth/_helpers/login-custom';



@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService, private _router: Router) {

    }


    signUp(){
        this._router.navigate(["/signup"]);
    }

    ngOnInit() {

    }
    ngAfterViewInit() {
        Helpers.bodyClass('m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default');

    }

}