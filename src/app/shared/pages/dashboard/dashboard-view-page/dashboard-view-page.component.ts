import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-dashboard-view-page',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './dashboard-view-page.component.html',
  styleUrl: './dashboard-view-page.component.css'
})
export class DashboardViewPageComponent {

}
