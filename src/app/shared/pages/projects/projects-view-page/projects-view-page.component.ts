import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MaintextComponent } from '../../../components/maintext/maintext.component';

@Component({
  selector: 'app-projects-view-page',
  imports: [NavbarComponent, FooterComponent, MaintextComponent],
  templateUrl: './projects-view-page.component.html',
  styleUrl: './projects-view-page.component.css'
})
export class ProjectsViewPageComponent {

}
