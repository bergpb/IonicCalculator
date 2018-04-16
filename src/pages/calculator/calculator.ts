import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-calculator',
    templateUrl: 'calculator.html'
})
export class CalculatorPage {
    resultnormal = '';
    resultbin = '';
    resultoct = '';
    resulthex = '';

    constructor(public navCtrl: NavController) {}

    //https://gist.github.com/faisalman/4213592
    //https://angular.io/api/forms/NgModel

    btnClicked(btn) {
        if (btn == 'C') {
            this.resultnormal = '';
            this.resultbin = '';
            this.resultoct = '';
            this.resulthex = '';
        }
        else if (btn == '=') {
            this.resultnormal = eval(this.resultnormal);
            this.resultbin = 'teste';
            this.resultoct = 'teste';
            this.resulthex = 'teste';
         }
        else {
            this.resultnormal += btn;
            this.resultbin = '';
            this.resultoct = '';
            this.resulthex = '';
        }
    }
}
