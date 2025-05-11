import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-notifications-view-page',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './notifications-view-page.component.html',
  styleUrl: './notifications-view-page.component.css'
})
export class NotificationsViewPageComponent {

}
