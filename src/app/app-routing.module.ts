import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateInstructorComponent } from './create-instructor/create-instructor.component';
import { ViewAssignedCoursesComponent } from './view-assigned-courses/view-assigned-courses.component';

const routes: Routes = [
    { path: '', redirectTo: 'DashboardComponent', pathMatch:'full' },
  {path:'dashboard',component:DashboardComponent},
  {path:'create-instructor',component:CreateInstructorComponent},
  {path:'view-assigned-courses',component:ViewAssignedCoursesComponent},
  {path:'**',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
