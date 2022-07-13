import { Component } from '@angular/core';

@Component({
  selector: 'angular-clock',
  templateUrl: './angular-clock.component.html',
  styleUrls: ['./angular-clock.component.css'],
})
export class AngularClockComponent {
 
  interval: any;
  time: {
    milliseconds: any;
    seconds: any;
    minutes: any;
    hours: any;
  } = { milliseconds: 0, seconds: 0, minutes: 0, hours: 0 }
  constructor() {


    this.interval = setInterval(() => {
    this.setTime()
    }, 1);
 
  }
    setTime(){
    this.time.milliseconds++
    if(this.time.milliseconds == 1000){ this.time.seconds++;
     this.time.milliseconds == 0;}
  if(this.time.seconds == 60){this.time.minutes++;
  this.time.seconds == 0};
console.log(this.time);

  
  }


  
}

