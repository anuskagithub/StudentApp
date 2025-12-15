import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './students.html',
  styleUrls: ['./students.css']
})
export class StudentsComponent {

  // 🔹 Signals instead of normal variables
  students = signal<Student[]>([]);

  newStudent = signal<Student>({
    id: 0,
    name: '',
    class: '',
    section: ''
  });

  editMode = signal(false);

  constructor(private studentService: StudentService) {
    this.loadStudents(); // same as ngOnInit, but safer
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students.set(data);
    });
  }

  addStudent(): void {
    this.studentService.addStudent(this.newStudent()).subscribe(() => {
      this.loadStudents();
      this.resetForm();
    });
  }

  editStudent(student: Student): void {
    this.newStudent.set({ ...student });
    this.editMode.set(true);
  }

  updateStudent(): void {
    this.studentService.updateStudent(this.newStudent()).subscribe(() => {
      this.loadStudents();
      this.resetForm();
    });
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }

  resetForm(): void {
    this.newStudent.set({
      id: 0,
      name: '',
      class: '',
      section: ''
    });
    this.editMode.set(false);
  }

  // 🔹 Field updaters (important for template safety)
  updateName(value: string) {
    this.newStudent.set({ ...this.newStudent(), name: value });
  }

  updateClass(value: string) {
    this.newStudent.set({ ...this.newStudent(), class: value });
  }

  updateSection(value: string) {
    this.newStudent.set({ ...this.newStudent(), section: value });
  }
}
