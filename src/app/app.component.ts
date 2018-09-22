import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'stepsintovoid';
  steps: any = {
    0: false,
    1: false
  };

  activateStep = function(stepNumber) {
    this.steps[stepNumber] = true;
  };

}
