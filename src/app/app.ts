import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AbountmeComponent } from './pages/home/abountme/abountme.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,AbountmeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'LearningAngular';
 
}
