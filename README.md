# Hospital Management System

A full-stack hospital management system covering:
- Doctor appointment booking & slot management
- Patient visits (OPD/walk-in/follow-up/emergency)
- Daily checkup / vitals logging
- Medicine catalog & prescription/dosage updates
- Specialized care tracking: **Cancer** (chemo cycles, staging, reports), **Diabetes** (sugar logs, HbA1c trends), and **Operation Recovery** (post-op milestones)

## Stack
- Backend: Node.js, Express, MongoDB, Mongoose, JWT
- Frontend: React (Vite), React Router, Axios, Recharts

## Getting Started

### Backend
```bash
cd backend
npm install
cp .env.example .env   # update with your MongoDB URI & JWT secret
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Project Structure
See `docs/system-architecture.md` for architecture overview and `docs/ER-diagram.md` for the data model.
See `docs/API-documentation.md` for the full API reference.

## Roles
- **Admin** — manages doctors, departments, medicine inventory
- **Doctor** — manages appointments, visits, prescriptions, specialized care records
- **Nurse** — records daily checkups, recovery logs
- **Patient** — books appointments, views own medical history
