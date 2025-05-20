import { Component, VERSION } from '@angular/core';

import { CardComponent } from '../../../business/components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MaintextComponent } from "../../components/maintext/maintext.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, CardComponent, MaintextComponent, MaintextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    angularVersion = VERSION.full;
  }
 