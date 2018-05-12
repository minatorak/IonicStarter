import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {SecondPage} from "../second/second";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  number1: number = 1;
  number2: number = 2;
  resultValue: number = 0;
  Sawadee: string = 'Sawadee';

  myHome = [
    {text: "Text1"},
    {text: "Text2"},
    {text: "Text3"},
  ];
  employee: any;

  constructor(public navCtrl: NavController,public modalController:ModalController) {
    this.employee = [
      {icon: "add", name: "add"},
      {icon: "apps", name: "apps"}
    ]
  }

  doSomeThing(ev) {
    console.log(ev)
  }

  clickButtonCustom(st: string) {
    console.log(st)
  }

  result(value: number) {
    this.resultValue = value;
  }

  launchSeconPage() {
    let modal = this.modalController.create(SecondPage);
    modal.present();
  }
}
