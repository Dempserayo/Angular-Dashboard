import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MaintextComponent } from '../../../components/maintext/maintext.component';

@Component({
  selector: 'app-dashboard-view-page',
  imports: [NavbarComponent, FooterComponent, MaintextComponent],
  templateUrl: './dashboard-view-page.component.html',
  styleUrl: './dashboard-view-page.component.css'
})
export class DashboardViewPageComponent {

}
