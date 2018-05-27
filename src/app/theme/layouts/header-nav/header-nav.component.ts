import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../helpers';
import { Router } from '@angular/router';

declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {


    constructor(private _router: Router) {

    }

    goToFaq() {
        this._router.navigate(["/faq"]);
    }

    signUp() {
        this._router.navigate(["/signup"]);
    }

    ngOnInit() {

    }
    ngAfterViewInit() {
        mLayout.initHeader();

    }

}