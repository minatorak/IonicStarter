import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  employee: any;
  constructor(public navCtrl: NavController) {
    this.employee = [
      {icon:"add",name:"add"},
      {icon:"apps",name:"apps"}
    ]
  }

}
