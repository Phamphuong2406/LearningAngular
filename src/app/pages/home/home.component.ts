import { Component } from '@angular/core';
import { NavbarComponent } from '../../Shared/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';



@Component({
  selector: 'home',
  imports: [NavbarComponent, CommonModule,HeaderComponent,SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected title = 'LearningAngular';
  
}
