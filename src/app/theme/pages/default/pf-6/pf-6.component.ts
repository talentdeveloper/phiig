import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { Helpers } from '../../../../helpers';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./pf-6.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class Pf6Component implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService, private _router: Router) {

    }
    ngOnInit() {
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/app/js/scripts.bundle.js')
            .then(() => {
                Helpers.setLoading(false);
            });
    }
    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper');
    }

}