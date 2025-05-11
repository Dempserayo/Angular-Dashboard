import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsViewPageComponent } from './projects-view-page.component';

describe('ProjectsViewPageComponent', () => {
  let component: ProjectsViewPageComponent;
  let fixture: ComponentFixture<ProjectsViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
