import { Component } from '@angular/core';

@Component({
  selector: 'binding-properties',
  templateUrl: './binding-properties.component.html',
  styleUrls: ['./binding-properties.component.css'],
})
export class BindingPropertiesComponent {
  public isHidden: boolean = false;

  public toggle(): void {
    console.log(this.isHidden = !this.isHidden);
    
    
  }

  public image: { url: string; alt: string; isHidden:boolean } = {

    url: 'https://cdn.pixabay.com/photo/2022/07/01/17/58/lighthouse-7296029_960_720.jpg',
    alt: 'light house',
    isHidden: false
  };


  };



