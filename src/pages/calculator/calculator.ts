import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-calculator',
    templateUrl: 'calculator.html'
})

export class CalculatorPage {

    resultnormal = '';
    resultbin = '0';
    resultoct = '0';
    resulthex = '0';

    constructor(public navCtrl: NavController) {}
    
    convertBin(resultnormal, base){
        this.resultbin = parseInt(resultnormal, 10).toString(2);
    }

    convertOct(resultnormal, base){
        this.resultoct = parseInt(resultnormal, 10).toString(8);
    }

    convertHex(resultnormal, base){
        this.resulthex = parseInt(resultnormal, 10).toString(16);
    }

    btnClicked(btn) {
        if (btn == 'C') {
            this.resultnormal = '';
            this.resultbin = '0';
            this.resultoct = '0';
            this.resulthex = '0';
        }
        else if (btn == '=') {
            this.resultnormal = eval(this.resultnormal);
            this.convertBin(this.resultnormal, 2);
            this.convertOct(this.resultnormal, 8);
            this.convertHex(this.resultnormal, 16);
         }
        else {
            this.resultnormal += btn;
            this.convertBin(this.resultnormal, 2);
            this.convertOct(this.resultnormal, 8);
            this.convertHex(this.resultnormal, 16);
        }
    }
}
