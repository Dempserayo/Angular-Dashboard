import { Component, VERSION } from '@angular/core';

import { TablesComponent } from "../../../business/components/tables/tables.component";
import { CardComponent } from '../../../business/components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, SidebarComponent, FooterComponent, CardComponent, TablesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    angularVersion = VERSION.full;
  }
 