import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsViewPageComponent } from './graphics-view-page.component';

describe('GraphicsViewPageComponent', () => {
  let component: GraphicsViewPageComponent;
  let fixture: ComponentFixture<GraphicsViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicsViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
