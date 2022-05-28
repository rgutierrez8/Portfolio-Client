import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  //url: String = "http://localhost:8080/";
  url: String = "https://portfolioarpro.herokuapp.com/";
  
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

  addExperience(job: any) {
    return this.http.post(this.url + "experience/new", job).pipe(map(data => {
      return data;
    }))
  }

  updateDataExperience(update: any): Observable<any>{
    return this.http.put(this.url + "experience/update", update).pipe(map(data => {
      return data;
    }))
  }

  deleteExperience(id: any){
    return this.http.delete(this.url + `experience/delete/${id}`).pipe(map(data => {
      return data;
    }));
  }

  //EDUCACION
  
  getEducation() {
    return this.http.get<any>(this.url + "education/findAll");
  }

  addEducation(ed: any): Observable<any>{
    return this.http.post(this.url + "education/new", ed).pipe(map(data => {
      return data;
    }))
  }

  updateEducation(update: any): Observable<any> {
    return this.http.put(this.url + "education/update", update).pipe(map(data => {
      return data;
    }))
  }

  deleteEducation(id: any): Observable<any> {
    return this.http.delete(this.url + `education/delete/${id}`).pipe(map(data => {
      return data;
    }));
  }

  //SKILLS
  
  getSkills() {
    return this.http.get<any>(this.url + "skill/findAll")
  }

  addSkill(skill: any): Observable<any> {
    return this.http.post(this.url + "skill/new", skill).pipe(map(data => {
      return data;
    }));
  }

  updateSkill(update: any): Observable<any>{
    return this.http.put(this.url + "/skill/update", update).pipe(map(data => {
      return data;
    }));
  }

  deleteSkill(id: any): Observable<any>{
    return this.http.delete(this.url + `skill/delete/${id}`).pipe(map(data => {
      return data;
    }))
  }

  //PROJECTS
  
  getProjects() {
    return this.http.get<any>(this.url + "project/findAll");
  }

  addProject(project: any): Observable<any>{
    return this.http.post(this.url + "project/new", project).pipe(map(data => {
      return data;
    }))
  }

  updateProject(project: any): Observable<any>{
    return this.http.put(this.url + "project/update", project).pipe(map(data => {
      return data;
    }));
  }

  deleteProject(id: any): Observable<any>{
    return this.http.delete(this.url + `project/delete/${id}`).pipe(map(data => {
      return data;
    }))
  }
}
