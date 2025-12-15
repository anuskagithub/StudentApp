import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from '../models/student';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'https://localhost:7100/api/students';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {}

  private authHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.getToken()}`
      })
    };
  }

  getStudents() {
    return this.http.get<Student[]>(this.apiUrl, this.authHeaders());
  }

  addStudent(student: Student) {
    return this.http.post(this.apiUrl, student, this.authHeaders());
  }

  updateStudent(student: Student) {
  return this.http.put(
    `${this.apiUrl}/${student.id}`,
    student,
    this.authHeaders());
}

  deleteStudent(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.authHeaders());
  }
}
