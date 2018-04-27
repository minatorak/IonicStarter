import {Component, Input} from '@angular/core';

@Component({
  selector: 'custom',
  templateUrl: 'custom.html'
})
export class CustomComponent {

  @Input('myText') TextToUse;
  @Input('myHome') myHome;
  text: string;

  constructor() {
    this.text = 'Hello World';
    console.log(this.text);
  }

  ngAfterViewInit(){
    this.text = this.TextToUse;
    console.log("ngAfterViewInit")
  }

}
