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
#StudentApi Swagger Page
<img width="959" height="503" alt="1 StudentApi_Screenshot" src="https://github.com/user-attachments/assets/73d0d7c1-f409-4a50-9e16-85b796c5cd6d" />

