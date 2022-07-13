import { Component } from '@angular/core';

@Component({
  selector: 'angular-clock',
  templateUrl: './angular-clock.component.html',
  styleUrls: ['./angular-clock.component.css'],
})
export class AngularClockComponent {
  interval: any;
  time: {
    seconds: any;
    minutes: any;
    hours: any;
  } = { seconds: 0, minutes: 0, hours: 0 }
  constructor() {


    this.interval = setInterval(() => {
    this.setTime()
    }, 1);
 
  }
    setTime(){
    this.time.seconds++
    if(this.time.seconds == 60){ this.time.minutes++};
  if(this.time.minutes == 60){this.time.hours++};
console.log(this.time);

  
  }


  
}

