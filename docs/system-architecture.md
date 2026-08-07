# System Architecture

## Stack
- **Backend**: Node.js + Express + MongoDB (Mongoose)
- **Frontend**: React (Vite) + React Router + Axios + Recharts
- **Auth**: JWT-based, role-based access control (admin / doctor / nurse / patient)

## High-level flow
```
[React Frontend] --HTTP/JSON--> [Express API] --Mongoose--> [MongoDB]
                                       |
                                       +--> JWT auth middleware
                                       +--> Role-based access middleware
                                       +--> Services (notifications, stock, reports)
```

## Core modules
1. **Identity & Access** — User, Patient, Doctor, Department
2. **Scheduling** — Appointment booking & slot availability
3. **Clinical events** — Visit (encounter), DailyCheckup (vitals)
4. **Pharmacy** — Medicine catalog, Prescription, MedicineUpdate (dosage/refill history)
5. **Specialized chronic/critical care**
   - CancerCase — staging, chemo cycles, reports
   - DiabetesRecord — sugar logs, HbA1c trend
   - Operation + RecoveryLog — surgery + post-op milestone tracking
6. **Notifications** — reminders and alerts across all modules

## Suggested next steps
- Add file storage (S3 / Cloudinary) for cancer reports & scan uploads
- Add a scheduled job (node-cron) for appointment reminders and checkup-due notifications
- Add audit logging for medicine stock changes and prescription edits
- Add role-based UI guards on the frontend beyond route-level protection
- Write integration tests for the appointment slot-conflict logic
