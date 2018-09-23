import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string = 'stepsintovoid';
  steps: any = {
    0: false,
    1: false,
    2: false,
    3: false
  };
  activeStep: number = 0;

  activateStep = function(stepNumber, stepSpeed) {
    this.steps[stepNumber] = true;
    setTimeout(function(){
      this.activeStep = stepNumber + 1;
    }.bind(this), stepSpeed);
  };

}
