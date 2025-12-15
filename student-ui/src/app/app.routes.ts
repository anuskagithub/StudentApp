import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { StudentsComponent } from './components/students/students';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'students', component: StudentsComponent }
];
