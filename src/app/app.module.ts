import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ProjectsComponent,
    AllProjectsComponent,
    ResumeComponent,
    WorkExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
