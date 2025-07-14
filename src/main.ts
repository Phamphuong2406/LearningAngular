import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { PortfolioComponent } from './app/pages/home/portfolio/portfolio.component';
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


// bootstrapApplication(PortfolioComponent)
//   .catch(err => console.error(err));

