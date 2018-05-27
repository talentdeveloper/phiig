import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import { Helpers } from '../../../../helpers';


@Component({
    selector: ".m-grid__item.m-grid__item--fluid.m-wrapper",
    templateUrl: "./investor-move.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class InvestorMoveComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService, private _router: Router) {

    }

    ngOnInit() {
        this._script.load('body', 'assets/vendors/base/vendors.bundle.js', 'assets/app/js/scripts.bundle.js')
            .then(() => {
                Helpers.setLoading(false);
            });
    }
    ngAfterViewInit() {
        this._script.load('.m-grid__item.m-grid__item--fluid.m-wrapper',
            'assets/demo/default/custom/components/forms/widgets/select2.js', 'assets/demo/default/custom/components/forms/widgets/bootstrap-datepicker.js');
    }

}