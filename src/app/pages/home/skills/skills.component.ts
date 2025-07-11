import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  protected title = 'LearningAngular';
  skills = [{
    skilltitle: 'Skills',
    skillcontent: [
      {
        image: '/assets/images/ellip1.png',
        description: 'Figma / Adobe XD',
        percentage: '90%'
      },
      {
        image: '/assets/images/ellip1.png',
        description: 'UI Desing',
        percentage: '80%'
      },
      {
        image: '/assets/images/ellip1.png',
        description: 'Information Architecture',
        percentage: '80%'
      },
      {
        image: '/assets/images/ellip1.png',
        description: 'UX Desing',
        percentage: '70%'
      },
      {
        image: '/assets/images/ellip1.png',
        description: 'Prototyping',
        percentage: '70%'
      },
      {
        image: '/assets/images/ellip1.png',
        description: 'Box Model',
        percentage: '70%'
      },
      {
        image: '/assets/images/ellip1.png',
        description: 'Business Model Canvas',
        percentage: '70%'
      },
      {
        image: '/assets/images/ellip1.png',
        description: 'Desing Systems',
        percentage: '70%'
      },
    ]
  }]

}
