import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateInstructorComponent } from './create-instructor/create-instructor.component';
import { ViewAssignedCoursesComponent } from './view-assigned-courses/view-assigned-courses.component';

export const routes: Routes = [
    { path: '', redirectTo: 'DashboardComponent', pathMatch:'full' },
  {path:'dashboard',component:DashboardComponent},
  {path:'create-instructor',component:CreateInstructorComponent},
  {path:'view-assigned-courses',component:ViewAssignedCoursesComponent},
  {path:'**',component:DashboardComponent}
];
