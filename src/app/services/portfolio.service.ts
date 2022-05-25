import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url: String = "http://localhost:8080/";
  
  constructor(private http: HttpClient) { }

  //DATOS PERSONALES
  getPersonalData(): Observable<any>{
    return this.http.get<any>(this.url + "user/findByUsername/winnions");
  }

  updateData(update: any):  Observable<any> {
    return this.http.put(this.url + "user/update", update).pipe(map(data => {
      return data;
    }));
  }

  
  //EXPERIENCIA

  getExperience() {
    return this.http.get<any>(this.url + "experience/findAll");
  }

  //EDUCACION
  
  getEducation() {
    return this.http.get<any>(this.url + "education/findAll");
  }

  //SKILLS
  
  getSkills() {
    return this.http.get<any>(this.url + "skill/findAll")
  }

  //PROJECTS
  
  getProjects() {
    return this.http.get<any>(this.url + "project/findAll");
  }
}
