import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { CalculatorPage } from '../pages/calculator/calculator';

@Component({
    templateUrl: 'app.html'
})

export class MyApp {
    rootPage: any = CalculatorPage;

    constructor() {}

}
