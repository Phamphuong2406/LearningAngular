import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AbountmeComponent } from './pages/home/abountme/abountme.component';
import { PortfolioComponent } from './pages/home/portfolio/portfolio.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,AbountmeComponent,PortfolioComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'LearningAngular';
 
}
