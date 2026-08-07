# API Documentation

Base URL: `http://localhost:5000/api`

All protected routes require a header:
```
Authorization: Bearer <token>
```

## Auth
| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/auth/register` | Public | Register a new user (patient/doctor/admin) |
| POST | `/auth/login` | Public | Login, returns JWT |
| GET | `/auth/me` | Private | Get logged-in user's profile |

## Patients
| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/patients` | Private | Create patient profile |
| GET | `/patients` | Admin/Doctor/Nurse | List all patients |
| GET | `/patients/:id` | Private | Get patient by ID |
| PUT | `/patients/:id` | Private | Update patient profile |
| GET | `/patients/:id/history` | Private | Full medical history (visits, checkups, prescriptions, cancer/diabetes/recovery) |

## Doctors
| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/doctors` | Admin | Create doctor profile |
| GET | `/doctors` | Public | List doctors (filter by `?specialization=`) |
| GET | `/doctors/:id` | Public | Get doctor by ID |
| PUT | `/doctors/:id` | Admin/Doctor | Update doctor profile |
| GET | `/doctors/:id/available-slots` | Public | Get open slots for a date (`?date=YYYY-MM-DD`) |

## Appointments
| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/appointments` | Private | Book an appointment |
| GET | `/appointments` | Private | List appointments |
| GET | `/appointments/:id` | Private | Get appointment |
| PUT | `/appointments/:id` | Private | Update/reschedule appointment |
| DELETE | `/appointments/:id` | Admin/Doctor | Cancel appointment |

## Visits, Checkups, Prescriptions, Medicines
Same CRUD pattern as above under `/visits`, `/checkups`, `/prescriptions`, `/medicines`.

## Specialized Care
| Method | Endpoint | Description |
|---|---|---|
| `/cancer-care` | CRUD | Cancer case tracking: staging, chemo cycles, reports |
| `/diabetes-care` | CRUD | Diabetes tracking: sugar logs, HbA1c trend, diet plan |
| `/operations` | CRUD | Surgery scheduling and details |
| `/recovery-logs` | CRUD | Post-op recovery milestones (pain, mobility, wound status) |

## Notifications
| Method | Endpoint | Description |
|---|---|---|
| `/notifications` | CRUD | Appointment reminders, medicine updates, checkup due alerts |

---

### Example: Book an appointment
```http
POST /api/appointments
Authorization: Bearer <token>
Content-Type: application/json

{
  "patient": "64f...",
  "doctor": "64f...",
  "date": "2026-08-15",
  "timeSlot": "10:00 AM - 10:30 AM",
  "reason": "Routine checkup"
}
```

### Example: Log a diabetes sugar reading
```http
PUT /api/diabetes-care/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "$push": {
    "sugarLogs": {
      "fastingLevel": 105,
      "postMealLevel": 160,
      "insulinDose": "10 units",
      "date": "2026-08-07"
    }
  }
}
```
