import { useState } from 'react';

// Simplified translations for demonstration.
const translations = {
  ar: {
    appName: 'روية AI',
    dashboard: 'لوحة التحكم',
    workOrders: 'أوامر العمل',
    technicians: 'الفنيين',
    tickets: 'التذاكر',
    appointments: 'المواعيد'
  },
  en: {
    appName: 'Rooya AI',
    dashboard: 'Dashboard',
    workOrders: 'Work Orders',
    technicians: 'Technicians',
    tickets: 'Tickets',
    appointments: 'Appointments'
  }
};

// Example data arrays extracted from the original monolithic file.  These
// arrays are intentionally small to keep this file manageable while
// demonstrating how the data migration agent can parse them.  In a real
// application these arrays would be much larger and stored in a backend.

const defaultUsers = [
  { id: 1, email: 'admin@rooya.ai', password: 'admin123', name: 'System Admin', nameEn: 'System Admin', role: 'admin', active: true },
  { id: 2, email: 'user@rooya.ai', password: 'user123', name: 'Mohammed Ahmed', nameEn: 'Mohammed Ahmed', role: 'user', active: true },
  { id: 3, email: 'tech@rooya.ai', password: 'tech123', name: 'Khalid Al-Omari', nameEn: 'Khalid Al-Omari', role: 'technician', active: true }
];

const sampleTechnicians = [
  { id: 1, name: 'Ahmed Mohammed', nameEn: 'Ahmed Mohammed', status: 'available', rating: 4.8, jobs: 156, spec: 'Camera Installation', specEn: 'Camera Installation', phone: '0501234567', avatar: 'AM' },
  { id: 2, name: 'Khalid Al‑Omari', nameEn: 'Khalid Al-Omari', status: 'onJob', rating: 4.6, jobs: 132, spec: 'GPS Maintenance', specEn: 'GPS Maintenance', phone: '0507654321', avatar: 'KA' },
  { id: 3, name: 'Saad Al‑Harbi', nameEn: 'Saad Al-Harbi', status: 'available', rating: 4.9, jobs: 189, spec: 'Tracking Systems', specEn: 'Tracking Systems', phone: '0509876543', avatar: 'SH' }
];

const initialOrders = [
  { id: 'WO-2024-001', customer: 'Aramco Corp', customerEn: 'Aramco Corp', type: 'installation', priority: 'high', status: 'inProgress', tech: 1, date: '2025-02-17', location: 'Riyadh - Olaya District', locationEn: 'Riyadh - Olaya District', desc: 'Install 50 AI cameras for fleet', descEn: 'Install 50 AI cameras for fleet' },
  { id: 'WO-2024-002', customer: 'SABIC', customerEn: 'SABIC', type: 'repair', priority: 'urgent', status: 'pending', tech: 3, date: '2025-02-17', location: 'Jubail Industrial', locationEn: 'Jubail Industrial', desc: 'Repair tracking system', descEn: 'Repair tracking system' }
];

const initialTickets = [
  { id: 'TK-2024-001', subject: 'AI Camera Malfunction', subjectEn: 'AI Camera Malfunction', customer: 'Aramco', customerEn: 'Aramco', phone: '0112345678', status: 'open', priority: 'high', ticketType: 'technical', date: '2025-02-17', desc: 'Camera not recording properly', descEn: 'Camera not recording properly', tech: 1, notes: [] },
  { id: 'TK-2024-002', subject: 'Tracking System Update', subjectEn: 'Tracking System Update', customer: 'SABIC', customerEn: 'SABIC', phone: '0137654321', status: 'resolved', priority: 'medium', ticketType: 'maintenance', maintenanceType: 'preventive', date: '2025-02-16', desc: 'Software update request', descEn: 'Software update request', tech: 2, notes: ['Update completed successfully'] }
];

const initialAppointments = [
  { id: 'AP-2024-001', client: 'Aramco', clientEn: 'Aramco', phone: '0112345678', type: 'siteVisit', date: '2025-02-17', time: '09:00', status: 'confirmed', location: 'Dhahran', locationEn: 'Dhahran' },
  { id: 'AP-2024-002', client: 'SABIC', clientEn: 'SABIC', phone: '0137654321', type: 'consultation', date: '2025-02-17', time: '14:00', status: 'scheduled', location: 'Jubail', locationEn: 'Jubail' }
];

const fleetData = [
  { id: 'V-001', plate: 'ABC 1234', plateEn: 'ABC 1234', driver: 'Ahmed', driverEn: 'Ahmed', status: 'active', speed: 85, location: 'King Fahd Road', locationEn: 'King Fahd Road', safetyScore: 92, fuel: 75 },
  { id: 'V-002', plate: 'DEF 5678', plateEn: 'DEF 5678', driver: 'Mohammed', driverEn: 'Mohammed', status: 'active', speed: 62, location: 'King Abdullah Road', locationEn: 'King Abdullah Road', safetyScore: 88, fuel: 45 }
];

// Simple logo component extracted from the original App.js
function RooyaLogo({ size = 'default', theme = 'dark' }) {
  return (
    <div className={`font-black tracking-tight ${size === 'large' ? 'text-4xl' : size === 'small' ? 'text-xl' : 'text-2xl'} ${theme === 'dark' ? 'text-white' : 'text-gray-900'} flex items-center gap-1`}>
      rooya<span className="text-cyan-400">.</span>
      <span className="text-xs font-bold bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded-md border border-cyan-500/30 tracking-widest">AI</span>
    </div>
  );
}

// An additional sample component to illustrate splitting.
const SampleComponent = () => {
  return <div className="p-4 border rounded">This is a sample component.</div>;
};

// Main application component.  This is a stripped-down version of the
// original App component.  It demonstrates language switching, displays
// the logo and a simple heading, and keeps some state for orders.
export default function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const [orders, setOrders] = useState(initialOrders);

  return (
    <div className="p-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <RooyaLogo size="large" theme={lang === 'ar' ? 'dark' : 'light'} />
      <h1 className="text-2xl font-bold my-4">{t.dashboard}</h1>
      {/* Render a simple list of orders */}
      <ul className="space-y-2">
        {orders.map(o => (
          <li key={o.id} className="border p-2 rounded-md">
            <span className="font-mono text-cyan-500 mr-2">{o.id}</span>
            {lang === 'ar' ? o.customer : o.customerEn} · {t[o.status] || o.status}
          </li>
        ))}
      </ul>
      <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')} className="mt-4 px-3 py-1.5 rounded bg-cyan-500 text-white">
        {lang === 'ar' ? 'English' : 'العربية'}
      </button>
      <SampleComponent />
    </div>
  );
}