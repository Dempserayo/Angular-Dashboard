import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-configurations-view-page',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './configurations-view-page.component.html',
  styleUrl: './configurations-view-page.component.css'
})
export class ConfigurationsViewPageComponent {

}
