import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAssignedCoursesComponent } from './view-assigned-courses.component';

describe('ViewAssignedCoursesComponent', () => {
  let component: ViewAssignedCoursesComponent;
  let fixture: ComponentFixture<ViewAssignedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAssignedCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAssignedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
