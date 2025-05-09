import { Component, VERSION } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from "../footer/footer.component";
import { CardComponent } from '../../../business/components/card/card.component';
import { TablesComponent } from "../../../business/components/tables/tables.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, SidebarComponent, FooterComponent, CardComponent, TablesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    angularVersion = VERSION.full;
  }
 