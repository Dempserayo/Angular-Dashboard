import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationsViewPageComponent } from './configurations-view-page.component';

describe('ConfigurationsViewPageComponent', () => {
  let component: ConfigurationsViewPageComponent;
  let fixture: ComponentFixture<ConfigurationsViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurationsViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurationsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
