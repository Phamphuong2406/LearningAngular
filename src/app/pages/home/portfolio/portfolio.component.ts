import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'portfolio',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
    protected title = 'LearningAngular';
    portfolio = [
        {
            portfolioTitle: 'Portfolio',
            portfolioIcon: '/assets/images/vector2.png',
            content: [{
                image: '/assets/images/eventospremium1.png',
                contentTitle: 'Eventos Premium',
                contentStatus: 'Elegante - Serio - Estatus'

            }, {
                image: '/assets/images/macbookpro14_13.png',
                contentTitle: 'Mi Portal U',
                contentStatus: 'Amigable - Dashboard - Simple'

            }]

        }
    ]
}
