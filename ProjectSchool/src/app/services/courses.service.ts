import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Course } from '@app/shared/models/course';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseURL = `${environment.apiURL}courses`;
  private http = inject(HttpClient);

  public get(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}`)
  }

  public getById(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseURL}/${id}`)
  }

  public post(course: Course): Observable<Course[]> {
    return this.http.post<Course[]>(`${this.baseURL}`, course)
  }

  public put(id: number, course: Course): Observable<Course[]> {
    return this.http.put<Course[]>(`${this.baseURL}/${id}`, course)
  }

  public delete(id: number): Observable<Course[]> {
    return this.http.delete<Course[]>(`${this.baseURL}/${id}`)
  }
}
