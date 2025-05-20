import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MaintextComponent } from '../../../components/maintext/maintext.component';

@Component({
  selector: 'app-tables-view-page',
  imports: [NavbarComponent, FooterComponent, MaintextComponent],
  templateUrl: './tables-view-page.component.html',
  styleUrl: './tables-view-page.component.css'
})
export class TablesViewPageComponent {

}
