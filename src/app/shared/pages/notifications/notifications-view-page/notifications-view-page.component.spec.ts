import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationsViewPageComponent } from './notifications-view-page.component';

describe('NotificationsViewPageComponent', () => {
  let component: NotificationsViewPageComponent;
  let fixture: ComponentFixture<NotificationsViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationsViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
