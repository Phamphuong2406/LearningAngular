import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
   standalone: true, 
  imports: [CommonModule], 
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    navbar = [{
        avata: '/assets/images/avata.png', name: 'Cristian Muñoz', buttontitle: 'Contact Mes',
        select: [{
            title: 'Home'
        },
        { title: 'Skills' },
        { title: 'Portfolio' },
        { title: 'Blog' }
        ]
    }]
}
