import React from 'react';
import AppointmentList from '../components/appointment/AppointmentList';
import DailyCheckupForm from '../components/checkup/DailyCheckupForm';

export default function DoctorDashboard() {
  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <AppointmentList />
      <DailyCheckupForm />
    </div>
  );
}
