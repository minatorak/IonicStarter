import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'custom',
  templateUrl: 'custom.html'
})
export class CustomComponent {

  @Input() myText:string;
  @Input('myHome') myHome;
  @Input() Number1 : number;
  @Input() Number2 : number;
  @Output() calculate : EventEmitter<number> = new EventEmitter();
  @Output('EvenSomeThing') evenSomeThing = new EventEmitter();
  @Output('EvenClickButton') evenClickButton = new EventEmitter();

  text: string;

  constructor() {
    this.text = 'Hello World';
    console.log(this.text);
  }
  onCalculate(){
    this.calculate.emit(this.Number1+this.Number2);
  }

  ngAfterViewInit() {
    this.text = this.myText;
    this.evenSomeThing.emit("asfqw");
    console.log("ngAfterViewInit")
  }

  clickButton(st: string) {
    this.evenClickButton.emit(st)
    console.log("clickButton")
  }
}
