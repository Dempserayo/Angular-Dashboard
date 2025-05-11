import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, NavigationEnd, Event } from '@angular/router'; // 👈 agrega Event
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true // si estás usando standalone components (Angular 15+)
})
export class NavbarComponent {
  namePage: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)) // 👈 fix
      .subscribe((event: NavigationEnd) => {
        const currentRoute = event.urlAfterRedirects.split('/')[1];
        this.namePage = currentRoute || 'home';
      });
  }
}
