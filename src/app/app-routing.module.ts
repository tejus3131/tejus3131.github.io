import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AllProjectsComponent } from "./components/all-projects/all-projects.component";
import { ResumeComponent } from "./components/resume/resume.component";



const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: ResumeComponent
      }
    ]
  },
  { path: 'all-projects', component: AllProjectsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
