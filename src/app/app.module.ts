import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/header/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SocialNetworksComponent } from './components/header/social-networks/social-networks.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { PortfolioService } from './services/portfolio.service';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UpdateModalComponent } from './components/personal-data/update-modal/update-modal.component';
import { EducationCardComponent } from './components/education/education-card/education-card.component';
import { ExperienceCardComponent } from './components/experience/experience-card/experience-card.component';
import { SkillCardComponent } from './components/skills/skill-card/skill-card.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { UpdateComponent } from './components/experience/update/update.component';
import { AddExperienceComponent } from './components/experience/add-experience/add-experience.component';
import { UpdateEducationComponent } from './components/education/update-education/update-education.component';
import { AddEducationComponent } from './components/education/add-education/add-education.component';
import { AddSkillComponent } from './components/skills/add-skill/add-skill.component';
import { UpdateSkillComponent } from './components/skills/update-skill/update-skill.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { UpdateProjectComponent } from './components/projects/update-project/update-project.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HeaderComponent,
    ButtonComponent,
    SocialNetworksComponent,
    LoginFormComponent,
    PersonalDataComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    UpdateModalComponent,
    EducationCardComponent,
    ExperienceCardComponent,
    SkillCardComponent,
    ProjectCardComponent,
    UpdateComponent,
    AddExperienceComponent,
    UpdateEducationComponent,
    AddEducationComponent,
    AddSkillComponent,
    UpdateSkillComponent,
    AddProjectComponent,
    UpdateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PortfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
