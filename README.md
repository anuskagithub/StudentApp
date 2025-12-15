# 🎓 Student App  
### ASP.NET Core Web API + Angular + JWT Authentication + SQL Server

This is a **Student App** developed as part of an academic assignment.  
It demonstrates **CRUD operations**, **JWT-based authentication**, and **Angular frontend integration** with a **.NET 8 Web API** and **SQL Server database**.

---

## 📌 Features

### 🔐 Authentication
- User **Registration** using ASP.NET Core Identity
- User **Login** using JWT (JSON Web Token)
- Secure API endpoints using `[Authorize]`
- Logout functionality (JWT token removal)

### 👨‍🎓 Student App (CRUD)
- Add new students
- View all students
- Update student details
- Delete students
- Fields: **Id, Name, Class, Section**

### 🗄 Database
- SQL Server (LocalDB)
- Database and tables are **auto-created at runtime**
- Sample student data is seeded automatically

### 🌐 Frontend
- Angular (Standalone Components)
- Clean and professional UI
- Login & Students pages
- Token stored in `localStorage`
- Proper routing and navigation

---

## 🛠 Technologies Used

### Backend
- ASP.NET Core Web API (.NET 8)
- Entity Framework Core
- ASP.NET Core Identity
-JWT Authentication
- SQL Server (LocalDB)

### Frontend
- Angular
- TypeScript
- HTML & CSS
- Angular Router
- HttpClient

---

## 📂 Project Structure

### Backend (StudentApi)

```
StudentApi/
│── Controllers/
│ ├── AuthController.cs
│ └── StudentsController.cs
│
│── Data/
│ └── ApplicationDbContext.cs
│
│── Models/
│ ├── Student.cs
│ ├── RegisterDto.cs
│
│── Program.cs
│── appsettings.json
```

### Frontend (student-ui)
```
student-ui/
│── src/app/
│ ├── components/
│ │ ├── login/
│ │ └── students/
│ │
│ ├── services/
│ │ ├── auth.ts
│ │ └── student.service.ts
│ │
│ └── app.routes.ts
```

### Screenshots
## 1. StudentApi Swagger Page
<img width="959" height="503" alt="1 StudentApi_Screenshot" src="https://github.com/user-attachments/assets/73d0d7c1-f409-4a50-9e16-85b796c5cd6d" />

## 2. Registering a new user
<img width="959" height="500" alt="2 Registering_a_User" src="https://github.com/user-attachments/assets/ea1d19ea-fc0e-4c03-a759-fe5b54c00f58" />

## 3. Logged in with Same Crendentials
<img width="959" height="500" alt="3 LoggedIn_withSameCrendentials" src="https://github.com/user-attachments/assets/944a4aa9-06b3-460f-aa41-bb3ce203076f" />

## 4. Added 2 New Students
<img width="959" height="500" alt="4 Added_NewStudents" src="https://github.com/user-attachments/assets/806d6455-d885-488d-8eac-f52b53a88ebf" />

## 5. Edited Section for 2nd Student
<img width="959" height="501" alt="5 Edited_SecFor2ndStudent" src="https://github.com/user-attachments/assets/a2cfcbcd-01b3-4997-a0c8-3c1278b312fb" />

## 6. Deleted the Last Student
<img width="959" height="499" alt="6 Deleted_theLastStudent" src="https://github.com/user-attachments/assets/adf8c48f-86f2-4d41-8ebe-c2a48106f842" />








