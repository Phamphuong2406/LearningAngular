import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'skills',
  imports: [ CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  protected title = 'LearningAngular';
  skills=[{
    skilltitle:'Skills',
    skillcontent:[
      {image:'/assets/images/ellip1.png',
      description:'Figma / Adobe XD'},
     {image:'',
      description:'UI Desing'},
     {image:'',
      description:'Information Architecture'},
     {image:'',
      description:'UX Desing'},
    ]
  }]
  
}
