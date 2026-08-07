import React from 'react';
import BookAppointment from '../components/appointment/BookAppointment';
import AppointmentList from '../components/appointment/AppointmentList';
import VisitHistory from '../components/visit/VisitHistory';

export default function PatientDashboard() {
  return (
    <div>
      <h1>Patient Dashboard</h1>
      <BookAppointment />
      <AppointmentList />
      <VisitHistory />
    </div>
  );
}
