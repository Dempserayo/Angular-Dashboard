import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-graphics-view-page',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './graphics-view-page.component.html',
  styleUrl: './graphics-view-page.component.css'
})
export class GraphicsViewPageComponent {

}
