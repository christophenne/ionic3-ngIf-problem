import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage()
export class HomePage {

  selected : number;

  constructor(public navCtrl: NavController) {

  }

  click(val : number){
    console.log("click(" + val + ")");
    this.selected = val;
    console.log("this.selected = " + this.selected);
  }

}
