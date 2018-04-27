import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'custom',
  templateUrl: 'custom.html'
})
export class CustomComponent {

  @Input('myText') TextToUse;
  @Input('myHome') myHome;
  @Output('EvenSomeThing') evenSomeThing = new EventEmitter();
  @Output('EvenClickButton') evenClickButton = new EventEmitter();

  text: string;

  constructor() {
    this.text = 'Hello World';
    console.log(this.text);
  }

  ngAfterViewInit() {
    this.text = this.TextToUse;

    this.evenSomeThing.emit("asfqw");
    console.log("ngAfterViewInit")
  }

  clickButton(st: string) {
    this.evenClickButton.emit(st)

    console.log("clickButton")
  }


}
