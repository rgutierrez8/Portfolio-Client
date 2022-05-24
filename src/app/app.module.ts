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
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PortfolioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
