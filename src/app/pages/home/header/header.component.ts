import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  introduce= [
   {
    title: 'Hi, I am Cristian 🎨', 
    descripsion:'I am a UI/UX Designer, I like to make interfaces simple and aesthetically pleasing for users; The idea is not to create an interface for creating it, it is that users prefer you because your product is easy to use.',
    buttontitle:'¡Contact Me!',
    image:'/assets/images/vector.png'
  }
];
}
