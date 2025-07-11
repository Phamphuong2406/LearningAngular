import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'abountme',
  imports: [CommonModule],
  templateUrl: './abountme.component.html',
  styleUrl: './abountme.component.scss'
})
export class AbountmeComponent {
  abountme = [
    {
      title: 'Abount Me',
      content: [{
        image: '/assets/images/maskgroup.png',
        percent: '100%',
        description: 'Colombian'
      },

      {
        image: '/assets/images/icono1.png',
        percent: '100%',
        description: 'Responsibility'
      },
      {
        image: '/assets/images/icono2.png',
        percent: '100%',
        description: 'Puntuality'
      }
      ]

    }
  ]
}