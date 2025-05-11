import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesViewPageComponent } from './tables-view-page.component';

describe('TablesViewPageComponent', () => {
  let component: TablesViewPageComponent;
  let fixture: ComponentFixture<TablesViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablesViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
