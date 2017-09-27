import { Component } from '@angular/core';
@Component({
selector: 'app-home',
templateUrl: './home.html',

})
export class HomeComponent {
  readEvent = 'app';


  OnUserInput(event) {
    this.readEvent = event.target.value;
  }

  onSubmit() {
    console.log('testing if it is working')
  }
}
