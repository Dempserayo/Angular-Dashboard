import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MaintextComponent } from '../../../components/maintext/maintext.component';

@Component({
  selector: 'app-notifications-view-page',
  imports: [NavbarComponent, FooterComponent, MaintextComponent],
  templateUrl: './notifications-view-page.component.html',
  styleUrl: './notifications-view-page.component.css'
})
export class NotificationsViewPageComponent {

}
