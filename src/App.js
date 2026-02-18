import { useState, useEffect, useCallback } from "react";
import {
  LayoutDashboard, ClipboardList, Users, BarChart3, Settings, Bell, Search,
  Plus, ChevronRight, Clock, CheckCircle, Wrench, Truck, Phone, Star,
  TrendingUp, TrendingDown, Activity, Eye, Edit, Menu, X, Globe, Moon, Sun,
  User, LogOut, Briefcase, Shield, Layers, Ticket, CalendarDays, CalendarCheck,
  AlertCircle, Car, Camera, MapPin, Gauge, AlertTriangle, Cpu, Zap, Navigation,
  Video, Wifi, Battery, Route, ShieldCheck, Play, Signal, ChevronLeft, Radio,
  MessageCircle, Download, Trash2, Lock, Unlock, FileText, Check, RefreshCw,
  UserCheck, UserX, Key, MoreVertical, Filter, ChevronDown
} from "lucide-react";

// ─── TRANSLATIONS ───────────────────────────────────────────────────────────
const translations = {
  ar: {
    appName: "روية AI", appSubtitle: "منصة التليماتيكس الذكية",
    dashboard: "لوحة التحكم", workOrders: "أوامر العمل", technicians: "الفنيين",
    customers: "العملاء", tickets: "التذاكر", appointments: "المواعيد",
    fleet: "إدارة الأسطول", analytics: "التحليلات", reports: "التقارير",
    settings: "الإعدادات", search: "بحث...", notifications: "الإشعارات",
    totalOrders: "إجمالي الأوامر", activeOrders: "الأوامر النشطة",
    completedToday: "مكتملة اليوم", avgResponse: "متوسط الاستجابة",
    pending: "قيد الانتظار", inProgress: "قيد التنفيذ", completed: "مكتملة",
    cancelled: "ملغاة", urgent: "عاجل", high: "عالي", medium: "متوسط", low: "منخفض",
    newOrder: "أمر عمل جديد", allStatuses: "جميع الحالات", allPriorities: "جميع الأولويات",
    orderID: "رقم الأمر", customer: "العميل", type: "النوع", priority: "الأولوية",
    status: "الحالة", assignedTo: "مُسند إلى", date: "التاريخ", actions: "الإجراءات",
    available: "متاح", onJob: "في مهمة", offline: "غير متصل", rating: "التقييم",
    jobsCompleted: "المهام المنجزة", recentActivity: "النشاط الأخير",
    weeklyOverview: "نظرة أسبوعية", topTechnicians: "أفضل الفنيين",
    customerSatisfaction: "رضا العملاء", language: "اللغة", profile: "الملف الشخصي",
    logout: "تسجيل الخروج", viewAll: "عرض الكل", details: "التفاصيل", edit: "تعديل",
    save: "حفظ", cancel: "إلغاء", close: "إغلاق", welcome: "مرحباً بك",
    quickActions: "إجراءات سريعة", systemHealth: "صحة النظام", uptime: "وقت التشغيل",
    activeUsers: "المستخدمون النشطون", installation: "تركيب", maintenance: "صيانة",
    repair: "إصلاح", inspection: "فحص", minutes: "دقائق", noData: "لا توجد بيانات",
    orderDetails: "تفاصيل أمر العمل", description: "الوصف", location: "الموقع",
    submit: "إرسال", createWorkOrder: "إنشاء أمر عمل", totalTechnicians: "إجمالي الفنيين",
    login: "تسجيل الدخول", register: "إنشاء حساب", email: "البريد الإلكتروني",
    password: "كلمة المرور", confirmPassword: "تأكيد كلمة المرور", fullName: "الاسم الكامل",
    noAccount: "ليس لديك حساب؟", haveAccount: "لديك حساب بالفعل؟",
    loginError: "البريد الإلكتروني أو كلمة المرور غير صحيحة", passwordMismatch: "كلمات المرور غير متطابقة",
    admin: "مدير النظام", user: "مستخدم", technician: "فني", role: "الدور",
    users: "المستخدمين", manageUsers: "إدارة المستخدمين", ticketID: "رقم التذكرة",
    newTicket: "تذكرة جديدة", openTickets: "التذاكر المفتوحة", closedTickets: "التذاكر المغلقة",
    ticketSubject: "موضوع التذكرة", ticketDescription: "وصف المشكلة",
    open: "مفتوحة", closed: "مغلقة", resolved: "تم الحل",
    newAppointment: "موعد جديد", appointmentDate: "تاريخ الموعد",
    appointmentTime: "وقت الموعد", appointmentType: "نوع الموعد",
    scheduled: "مجدول", confirmed: "مؤكد", todayAppointments: "مواعيد اليوم",
    upcomingAppointments: "المواعيد القادمة", consultation: "استشارة",
    siteVisit: "زيارة موقع", followUp: "متابعة", clientName: "اسم العميل",
    clientPhone: "رقم الهاتف", adminPanel: "لوحة الإدارة", totalTickets: "إجمالي التذاكر",
    totalAppointments: "إجمالي المواعيد", darkMode: "الوضع الداكن", lightMode: "الوضع الفاتح",
    liveTracking: "التتبع المباشر", aiAlerts: "تنبيهات AI", vehicles: "المركبات",
    drivers: "السائقين", safetyScore: "نقاط السلامة", activeVehicles: "المركبات النشطة",
    totalDistance: "إجمالي المسافة", fuelEfficiency: "كفاءة الوقود",
    aiDetections: "اكتشافات AI", speed: "السرعة", fuel: "الوقود",
    plateNumber: "رقم اللوحة", specialization: "التخصص", call: "اتصال", assign: "تعيين",
    sendWhatsApp: "إرسال واتساب", exportExcel: "تصدير Excel", weeklyReport: "التقرير الأسبوعي",
    deleteConfirm: "هل أنت متأكد من الحذف؟", delete: "حذف", accessControl: "التحكم بالصلاحيات",
    permissions: "الصلاحيات", activate: "تفعيل", deactivate: "تعطيل",
    active: "نشط", inactive: "معطل", phoneNumber: "رقم الهاتف",
    maintenanceType: "نوع الصيانة", preventive: "وقائية", corrective: "تصحيحية",
    assignTech: "تعيين فني", notes: "ملاحظات", addNote: "إضافة ملاحظة",
    ticketType: "نوع التذكرة", technical: "تقني", billing: "فوترة",
    general: "عام", exportReport: "تصدير التقرير"
  },
  en: {
    appName: "Rooya AI", appSubtitle: "Smart Telematics Platform",
    dashboard: "Dashboard", workOrders: "Work Orders", technicians: "Technicians",
    customers: "Customers", tickets: "Tickets", appointments: "Appointments",
    fleet: "Fleet Management", analytics: "Analytics", reports: "Reports",
    settings: "Settings", search: "Search...", notifications: "Notifications",
    totalOrders: "Total Orders", activeOrders: "Active Orders",
    completedToday: "Completed Today", avgResponse: "Avg Response",
    pending: "Pending", inProgress: "In Progress", completed: "Completed",
    cancelled: "Cancelled", urgent: "Urgent", high: "High", medium: "Medium", low: "Low",
    newOrder: "New Work Order", allStatuses: "All Statuses", allPriorities: "All Priorities",
    orderID: "Order ID", customer: "Customer", type: "Type", priority: "Priority",
    status: "Status", assignedTo: "Assigned To", date: "Date", actions: "Actions",
    available: "Available", onJob: "On Job", offline: "Offline", rating: "Rating",
    jobsCompleted: "Jobs Completed", recentActivity: "Recent Activity",
    weeklyOverview: "Weekly Overview", topTechnicians: "Top Technicians",
    customerSatisfaction: "Customer Satisfaction", language: "Language",
    profile: "Profile", logout: "Logout", viewAll: "View All", details: "Details",
    edit: "Edit", save: "Save", cancel: "Cancel", close: "Close", welcome: "Welcome",
    quickActions: "Quick Actions", systemHealth: "System Health", uptime: "Uptime",
    activeUsers: "Active Users", installation: "Installation", maintenance: "Maintenance",
    repair: "Repair", inspection: "Inspection", minutes: "minutes", noData: "No data available",
    orderDetails: "Work Order Details", description: "Description", location: "Location",
    submit: "Submit", createWorkOrder: "Create Work Order", totalTechnicians: "Total Technicians",
    login: "Login", register: "Register", email: "Email", password: "Password",
    confirmPassword: "Confirm Password", fullName: "Full Name",
    noAccount: "Don't have an account?", haveAccount: "Already have an account?",
    loginError: "Invalid email or password", passwordMismatch: "Passwords do not match",
    admin: "Admin", user: "User", technician: "Technician", role: "Role",
    users: "Users", manageUsers: "Manage Users", ticketID: "Ticket ID",
    newTicket: "New Ticket", openTickets: "Open Tickets", closedTickets: "Closed Tickets",
    ticketSubject: "Ticket Subject", ticketDescription: "Problem Description",
    open: "Open", closed: "Closed", resolved: "Resolved",
    newAppointment: "New Appointment", appointmentDate: "Appointment Date",
    appointmentTime: "Appointment Time", appointmentType: "Appointment Type",
    scheduled: "Scheduled", confirmed: "Confirmed", todayAppointments: "Today's Appointments",
    upcomingAppointments: "Upcoming Appointments", consultation: "Consultation",
    siteVisit: "Site Visit", followUp: "Follow Up", clientName: "Client Name",
    clientPhone: "Phone Number", adminPanel: "Admin Panel", totalTickets: "Total Tickets",
    totalAppointments: "Total Appointments", darkMode: "Dark Mode", lightMode: "Light Mode",
    liveTracking: "Live Tracking", aiAlerts: "AI Alerts", vehicles: "Vehicles",
    drivers: "Drivers", safetyScore: "Safety Score", activeVehicles: "Active Vehicles",
    totalDistance: "Total Distance", fuelEfficiency: "Fuel Efficiency",
    aiDetections: "AI Detections", speed: "Speed", fuel: "Fuel",
    plateNumber: "Plate Number", specialization: "Specialization", call: "Call", assign: "Assign",
    sendWhatsApp: "Send WhatsApp", exportExcel: "Export Excel", weeklyReport: "Weekly Report",
    deleteConfirm: "Are you sure you want to delete?", delete: "Delete",
    accessControl: "Access Control", permissions: "Permissions",
    activate: "Activate", deactivate: "Deactivate", active: "Active", inactive: "Inactive",
    phoneNumber: "Phone Number", maintenanceType: "Maintenance Type",
    preventive: "Preventive", corrective: "Corrective", assignTech: "Assign Technician",
    notes: "Notes", addNote: "Add Note", ticketType: "Ticket Type",
    technical: "Technical", billing: "Billing", general: "General", exportReport: "Export Report"
  }
};

// ─── SAMPLE DATA ────────────────────────────────────────────────────────────
const defaultUsers = [
  { id: 1, email: "admin@rooya.ai", password: "admin123", name: "مدير النظام", nameEn: "System Admin", role: "admin", active: true },
  { id: 2, email: "user@rooya.ai", password: "user123", name: "محمد أحمد", nameEn: "Mohammed Ahmed", role: "user", active: true },
  { id: 3, email: "tech@rooya.ai", password: "tech123", name: "خالد العمري", nameEn: "Khalid Al-Omari", role: "technician", active: true }
];

const sampleTechnicians = [
  { id: 1, name: "أحمد محمد", nameEn: "Ahmed Mohammed", status: "available", rating: 4.8, jobs: 156, spec: "تركيب كاميرات", specEn: "Camera Installation", phone: "0501234567", avatar: "AM" },
  { id: 2, name: "خالد العمري", nameEn: "Khalid Al-Omari", status: "onJob", rating: 4.6, jobs: 132, spec: "صيانة GPS", specEn: "GPS Maintenance", phone: "0507654321", avatar: "KA" },
  { id: 3, name: "سعد الحربي", nameEn: "Saad Al-Harbi", status: "available", rating: 4.9, jobs: 189, spec: "أنظمة التتبع", specEn: "Tracking Systems", phone: "0509876543", avatar: "SH" },
  { id: 4, name: "فهد السالم", nameEn: "Fahd Al-Salem", status: "offline", rating: 4.3, jobs: 98, spec: "صيانة عامة", specEn: "General Maintenance", phone: "0503456789", avatar: "FS" },
  { id: 5, name: "عمر الدوسري", nameEn: "Omar Al-Dosari", status: "onJob", rating: 4.7, jobs: 145, spec: "كاميرات AI", specEn: "AI Cameras", phone: "0502345678", avatar: "OD" }
];

const initialOrders = [
  { id: "WO-2024-001", customer: "شركة أرامكو", customerEn: "Aramco Corp", type: "installation", priority: "high", status: "inProgress", tech: 1, date: "2025-02-17", location: "الرياض - حي العليا", locationEn: "Riyadh - Olaya District", desc: "تركيب 50 كاميرا AI للأسطول", descEn: "Install 50 AI cameras for fleet" },
  { id: "WO-2024-002", customer: "شركة سابك", customerEn: "SABIC", type: "repair", priority: "urgent", status: "pending", tech: 3, date: "2025-02-17", location: "الجبيل الصناعية", locationEn: "Jubail Industrial", desc: "إصلاح نظام التتبع", descEn: "Repair tracking system" },
  { id: "WO-2024-003", customer: "شركة الراجحي", customerEn: "Al Rajhi Company", type: "maintenance", priority: "medium", status: "completed", tech: 2, date: "2025-02-16", location: "الرياض - طريق الملك فهد", locationEn: "Riyadh - King Fahd Road", desc: "صيانة دورية للكاميرات", descEn: "Routine camera maintenance" },
  { id: "WO-2024-004", customer: "شركة المراعي", customerEn: "Almarai", type: "inspection", priority: "low", status: "pending", tech: null, date: "2025-02-18", location: "الخرج", locationEn: "Al Kharj", desc: "فحص أنظمة التليماتيكس", descEn: "Telematics system inspection" },
  { id: "WO-2024-005", customer: "أمانة الرياض", customerEn: "Riyadh Municipality", type: "installation", priority: "high", status: "inProgress", tech: 5, date: "2025-02-17", location: "الرياض - وسط المدينة", locationEn: "Riyadh - Downtown", desc: "تركيب نظام مراقبة الأسطول", descEn: "Fleet monitoring system installation" }
];

const initialTickets = [
  { id: "TK-2024-001", subject: "عطل في كاميرا AI", subjectEn: "AI Camera Malfunction", customer: "شركة أرامكو", customerEn: "Aramco", phone: "0112345678", status: "open", priority: "high", ticketType: "technical", date: "2025-02-17", desc: "الكاميرا لا تسجل بشكل صحيح", descEn: "Camera not recording properly", tech: 1, notes: [] },
  { id: "TK-2024-002", subject: "تحديث نظام التتبع", subjectEn: "Tracking System Update", customer: "شركة سابك", customerEn: "SABIC", phone: "0137654321", status: "resolved", priority: "medium", ticketType: "maintenance", maintenanceType: "preventive", date: "2025-02-16", desc: "طلب تحديث البرنامج", descEn: "Software update request", tech: 2, notes: ["تم التحديث بنجاح"] },
  { id: "TK-2024-003", subject: "مشكلة في GPS", subjectEn: "GPS Issue", customer: "شركة المراعي", customerEn: "Almarai", phone: "0115678901", status: "open", priority: "urgent", ticketType: "technical", date: "2025-02-17", desc: "إشارة GPS ضعيفة جداً", descEn: "Very weak GPS signal", tech: null, notes: [] },
  { id: "TK-2024-004", subject: "صيانة وقائية للأسطول", subjectEn: "Fleet Preventive Maintenance", customer: "أمانة الرياض", customerEn: "Riyadh Municipality", phone: "0114567890", status: "closed", priority: "low", ticketType: "maintenance", maintenanceType: "preventive", date: "2025-02-15", desc: "جدولة صيانة وقائية شهرية", descEn: "Monthly preventive maintenance schedule", tech: 3, notes: [] }
];

const initialAppointments = [
  { id: "AP-2024-001", client: "شركة أرامكو", clientEn: "Aramco", phone: "0112345678", type: "siteVisit", date: "2025-02-17", time: "09:00", status: "confirmed", location: "الظهران", locationEn: "Dhahran" },
  { id: "AP-2024-002", client: "شركة سابك", clientEn: "SABIC", phone: "0137654321", type: "consultation", date: "2025-02-17", time: "14:00", status: "scheduled", location: "الجبيل", locationEn: "Jubail" },
  { id: "AP-2024-003", client: "أمانة الرياض", clientEn: "Riyadh Municipality", phone: "0114567890", type: "followUp", date: "2025-02-18", time: "11:00", status: "confirmed", location: "الرياض", locationEn: "Riyadh" },
  { id: "AP-2024-004", client: "شركة المراعي", clientEn: "Almarai", phone: "0115678901", type: "siteVisit", date: "2025-02-19", time: "10:00", status: "scheduled", location: "الخرج", locationEn: "Al Kharj" }
];

const fleetData = [
  { id: "V-001", plate: "أ ب ج 1234", plateEn: "ABC 1234", driver: "أحمد", driverEn: "Ahmed", status: "active", speed: 85, location: "طريق الملك فهد", locationEn: "King Fahd Road", safetyScore: 92, fuel: 75 },
  { id: "V-002", plate: "د ه و 5678", plateEn: "DEF 5678", driver: "محمد", driverEn: "Mohammed", status: "active", speed: 62, location: "طريق الملك عبدالله", locationEn: "King Abdullah Road", safetyScore: 88, fuel: 45 },
  { id: "V-003", plate: "ز ح ط 9012", plateEn: "GHI 9012", driver: "خالد", driverEn: "Khalid", status: "idle", speed: 0, location: "موقف الشركة", locationEn: "Company Parking", safetyScore: 95, fuel: 90 },
  { id: "V-004", plate: "ي ك ل 3456", plateEn: "JKL 3456", driver: "سعد", driverEn: "Saad", status: "alert", speed: 120, location: "الدائري الشرقي", locationEn: "Eastern Ring Road", safetyScore: 65, fuel: 30 }
];

// ─── UTILITY: EXCEL EXPORT ───────────────────────────────────────────────────
function exportToCSV(data, filename, headers) {
  const csvHeaders = headers.join(",");
  const csvRows = data.map(row => headers.map(h => {
    const val = String(row[h] || "").replace(/,/g, ";");
    return `"${val}"`;
  }).join(","));
  const csv = [csvHeaders, ...csvRows].join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}_${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function sendWhatsApp(phone, message) {
  const cleaned = phone.replace(/[^0-9]/g, "");
  const intl = cleaned.startsWith("0") ? "966" + cleaned.slice(1) : cleaned;
  const url = `https://wa.me/${intl}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

// ─── UI COMPONENTS ──────────────────────────────────────────────────────────
function RooyaLogo({ size = "default", theme = "dark" }) {
  const sizes = { small: "text-xl", default: "text-2xl", large: "text-4xl" };
  const colors = theme === "dark" ? "text-white" : "text-gray-900";
  return (
    <div className={`font-black tracking-tight ${sizes[size]} ${colors} flex items-center gap-1`}>
      rooya<span className="text-cyan-400">.</span>
      <span className="text-xs font-bold bg-cyan-500/20 text-cyan-400 px-1.5 py-0.5 rounded-md border border-cyan-500/30 tracking-widest">AI</span>
    </div>
  );
}

function PulsingDot({ color = "bg-cyan-400" }) {
  return (
    <span className="relative flex h-3 w-3">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`}></span>
      <span className={`relative inline-flex rounded-full h-3 w-3 ${color}`}></span>
    </span>
  );
}

function GlowingCard({ children, className = "", glow = "cyan" }) {
  const glowColors = { cyan: "hover:shadow-cyan-500/20", green: "hover:shadow-emerald-500/20", orange: "hover:shadow-orange-500/20", red: "hover:shadow-red-500/20" };
  return <div className={`rounded-2xl transition-all duration-300 hover:shadow-2xl ${glowColors[glow]} ${className}`}>{children}</div>;
}

function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const end = parseInt(String(value).replace(/[^0-9]/g, "")) || 0;
    let start = 0;
    if (start === end) { setCount(end); return; }
    const step = Math.ceil(end / 30);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 40);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count.toLocaleString()}</span>;
}

function CircularProgress({ value, size = 120, strokeWidth = 8, color = "#00D4FF" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth={strokeWidth} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth={strokeWidth} fill="none"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          className="transition-all duration-1000 ease-out" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{value}%</span>
      </div>
    </div>
  );
}

function StatusBadge({ status, t, isDark }) {
  const configs = {
    pending: { bg: "bg-yellow-500/15", text: "text-yellow-400", border: "border-yellow-500/30", label: t.pending },
    inProgress: { bg: "bg-cyan-500/15", text: "text-cyan-400", border: "border-cyan-500/30", label: t.inProgress },
    completed: { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30", label: t.completed },
    cancelled: { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/30", label: t.cancelled },
    open: { bg: "bg-orange-500/15", text: "text-orange-400", border: "border-orange-500/30", label: t.open },
    closed: { bg: "bg-gray-500/15", text: "text-gray-400", border: "border-gray-500/30", label: t.closed },
    resolved: { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30", label: t.resolved },
    scheduled: { bg: "bg-purple-500/15", text: "text-purple-400", border: "border-purple-500/30", label: t.scheduled },
    confirmed: { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30", label: t.confirmed },
    active: { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30", label: t.active || "Active" },
    idle: { bg: "bg-gray-500/15", text: "text-gray-400", border: "border-gray-500/30", label: "Idle" },
    alert: { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/30", label: "Alert" },
    available: { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30", label: t.available },
    onJob: { bg: "bg-cyan-500/15", text: "text-cyan-400", border: "border-cyan-500/30", label: t.onJob },
    offline: { bg: "bg-gray-500/15", text: "text-gray-400", border: "border-gray-500/30", label: t.offline }
  };
  const c = configs[status] || configs.pending;
  return (
    <span className={`${c.bg} ${c.text} border ${c.border} px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap`}>
      {c.label}
    </span>
  );
}

function PriorityBadge({ priority, t }) {
  const configs = {
    urgent: { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/30", dot: "bg-red-500", label: t.urgent },
    high: { bg: "bg-orange-500/15", text: "text-orange-400", border: "border-orange-500/30", dot: "bg-orange-500", label: t.high },
    medium: { bg: "bg-yellow-500/15", text: "text-yellow-400", border: "border-yellow-500/30", dot: "bg-yellow-500", label: t.medium },
    low: { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30", dot: "bg-emerald-500", label: t.low }
  };
  const c = configs[priority] || configs.medium;
  return (
    <span className={`${c.bg} ${c.text} border ${c.border} px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 w-fit`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} ${priority === "urgent" ? "animate-pulse" : ""}`}></span>
      {c.label}
    </span>
  );
}

function StatCard({ icon: Icon, label, value, change, color, onClick, isDark, glow = "cyan" }) {
  return (
    <GlowingCard glow={glow} className={`${isDark ? "bg-gray-800/60 border-gray-700/50" : "bg-white border-gray-200"} border backdrop-blur-sm p-5 cursor-pointer`}>
      <div onClick={onClick} className="h-full">
        <div className="flex items-center justify-between mb-3">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color} shadow-lg`}>
            <Icon size={22} className="text-white" />
          </div>
          {change !== undefined && (
            <span className={`text-xs font-semibold flex items-center gap-1 ${change > 0 ? "text-emerald-400" : "text-red-400"}`}>
              {change > 0 ? <TrendingUp size={13} /> : <TrendingDown size={13} />}{Math.abs(change)}%
            </span>
          )}
        </div>
        <p className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
          <AnimatedCounter value={value} />
        </p>
        <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{label}</p>
      </div>
    </GlowingCard>
  );
}

function MiniBarChart({ data, isDark }) {
  const max = Math.max(...data.map(d => d.v)) || 1;
  return (
    <div className="flex items-end gap-2 h-32">
      {data.map((d, i) => (
        <div key={i} className="flex flex-col items-center flex-1 group">
          <div
            className="w-full rounded-t-lg bg-gradient-to-t from-cyan-600 to-cyan-400 transition-all duration-500 group-hover:from-cyan-500 group-hover:to-blue-400"
            style={{ height: `${Math.max((d.v / max) * 100, 8)}%` }}
          ></div>
          <span className={`text-xs mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{d.l}</span>
        </div>
      ))}
    </div>
  );
}

// ─── MODAL WRAPPER ───────────────────────────────────────────────────────────
function Modal({ open, onClose, title, subtitle, children, isDark, maxWidth = "max-w-lg" }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}>
      <div className={`${isDark ? "bg-gray-850 border-gray-700" : "bg-white border-gray-200"} bg-gray-900 rounded-2xl w-full ${maxWidth} shadow-2xl border max-h-[90vh] overflow-y-auto`}
        style={{ backgroundColor: isDark ? "#111827" : "white" }}
        onClick={e => e.stopPropagation()}>
        <div className={`p-6 border-b ${isDark ? "border-gray-800" : "border-gray-100"} flex items-center justify-between sticky top-0`}
          style={{ backgroundColor: isDark ? "#111827" : "white" }}>
          <div>
            <h2 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{title}</h2>
            {subtitle && <p className="text-cyan-400 font-mono text-sm mt-0.5">{subtitle}</p>}
          </div>
          <button onClick={onClose} className={`p-2 rounded-xl ${isDark ? "hover:bg-gray-800 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}>
            <X size={20} />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("ar");
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState("login");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showNewOrder, setShowNewOrder] = useState(false);
  const [editOrder, setEditOrder] = useState(null);
  const [orders, setOrders] = useState(initialOrders);
  const [notifOpen, setNotifOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(defaultUsers);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirm, setRegConfirm] = useState("");
  const [regError, setRegError] = useState("");
  const [tickets, setTickets] = useState(initialTickets);
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editTicket, setEditTicket] = useState(null);
  const [appointments, setAppointments] = useState(initialAppointments);
  const [showNewAppt, setShowNewAppt] = useState(false);
  const [selectedAppt, setSelectedAppt] = useState(null);
  const [editAppt, setEditAppt] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [toast, setToast] = useState(null);

  // New item form state
  const [nCust, setNCust] = useState(""); const [nLoc, setNLoc] = useState("");
  const [nType, setNType] = useState("installation"); const [nPrio, setNPrio] = useState("medium");
  const [nDesc, setNDesc] = useState("");
  const [nTSub, setNTSub] = useState(""); const [nTDesc, setNTDesc] = useState("");
  const [nTPrio, setNTPrio] = useState("medium"); const [nTType, setNTType] = useState("technical");
  const [nTPhone, setNTPhone] = useState(""); const [nTMaint, setNTMaint] = useState("preventive");
  const [nTTech, setNTTech] = useState("");
  const [nAClient, setNAClient] = useState(""); const [nAPhone, setNAPhone] = useState("");
  const [nADate, setNADate] = useState(""); const [nATime, setNATime] = useState("");
  const [nAType, setNAType] = useState("consultation"); const [nALoc, setNALoc] = useState("");

  const t = translations[lang];
  const isRTL = lang === "ar";
  const isDark = theme === "dark";

  const bg = isDark ? "bg-gray-950" : "bg-gray-50";
  const cardBg = isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const tp = isDark ? "text-white" : "text-gray-900";
  const ts = isDark ? "text-gray-400" : "text-gray-500";
  const inputCls = isDark
    ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
    : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-cyan-500";
  const inputBase = `w-full border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm ${inputCls}`;

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = () => {
    const u = users.find(x => x.email === loginEmail && x.password === loginPassword);
    if (u) { if (!u.active) { setLoginError(isRTL ? "الحساب معطل" : "Account deactivated"); return; } setCurrentUser(u); setIsLoggedIn(true); setPage("dashboard"); setLoginError(""); }
    else setLoginError(t.loginError);
  };

  const handleRegister = () => {
    if (regPassword !== regConfirm) { setRegError(t.passwordMismatch); return; }
    const nu = { id: users.length + 1, email: regEmail, password: regPassword, name: regName, nameEn: regName, role: "user", active: true };
    setUsers(prev => [...prev, nu]); setCurrentUser(nu); setIsLoggedIn(true); setPage("dashboard");
    setRegError(""); setRegName(""); setRegEmail(""); setRegPassword(""); setRegConfirm("");
  };

  const handleLogout = () => { setIsLoggedIn(false); setCurrentUser(null); setPage("login"); };
  const getTechName = id => { const t2 = sampleTechnicians.find(tc => tc.id === id); return t2 ? (lang === "ar" ? t2.name : t2.nameEn) : "—"; };

  const filteredOrders = orders.filter(o => {
    const name = lang === "ar" ? o.customer : o.customerEn;
    const ms = !searchQuery || o.id.toLowerCase().includes(searchQuery.toLowerCase()) || name.toLowerCase().includes(searchQuery.toLowerCase());
    return ms && (statusFilter === "all" || o.status === statusFilter) && (priorityFilter === "all" || o.priority === priorityFilter);
  });

  const handleCreateOrder = () => {
    const o = { id: `WO-2024-${String(orders.length + 1).padStart(3, "0")}`, customer: nCust || "New Customer", customerEn: nCust || "New Customer", type: nType, priority: nPrio, status: "pending", tech: null, date: new Date().toISOString().split("T")[0], location: nLoc, locationEn: nLoc, desc: nDesc, descEn: nDesc };
    setOrders(prev => [o, ...prev]); setShowNewOrder(false);
    setNCust(""); setNLoc(""); setNType("installation"); setNPrio("medium"); setNDesc("");
    showToast(isRTL ? "تم إنشاء أمر العمل" : "Work order created");
  };

  const handleSaveOrder = (updated) => {
    setOrders(prev => prev.map(o => o.id === updated.id ? { ...o, ...updated } : o));
    setEditOrder(null); setSelectedOrder(null);
    showToast(isRTL ? "تم الحفظ بنجاح" : "Saved successfully");
  };

  const handleDeleteOrder = (id) => {
    setOrders(prev => prev.filter(o => o.id !== id));
    setDeleteConfirm(null); setSelectedOrder(null);
    showToast(isRTL ? "تم الحذف" : "Deleted", "error");
  };

  const handleCreateTicket = () => {
    const tk = { id: `TK-2024-${String(tickets.length + 1).padStart(3, "0")}`, subject: nTSub, subjectEn: nTSub, customer: currentUser?.name || "", customerEn: currentUser?.nameEn || "", phone: nTPhone, status: "open", priority: nTPrio, ticketType: nTType, maintenanceType: nTType === "maintenance" ? nTMaint : undefined, date: new Date().toISOString().split("T")[0], desc: nTDesc, descEn: nTDesc, tech: nTTech ? parseInt(nTTech) : null, notes: [] };
    setTickets(prev => [tk, ...prev]); setShowNewTicket(false);
    setNTSub(""); setNTDesc(""); setNTPrio("medium"); setNTType("technical"); setNTPhone(""); setNTMaint("preventive"); setNTTech("");
    showToast(isRTL ? "تم إنشاء التذكرة" : "Ticket created");
  };

  const handleSaveTicket = (updated) => {
    setTickets(prev => prev.map(tk => tk.id === updated.id ? { ...tk, ...updated } : tk));
    setEditTicket(null); setSelectedTicket(null);
    showToast(isRTL ? "تم الحفظ" : "Saved");
  };

  const handleDeleteTicket = (id) => {
    setTickets(prev => prev.filter(tk => tk.id !== id));
    setDeleteConfirm(null); setSelectedTicket(null);
    showToast(isRTL ? "تم الحذف" : "Deleted", "error");
  };

  const handleAddNote = (ticketId) => {
    if (!noteText.trim()) return;
    setTickets(prev => prev.map(tk => tk.id === ticketId ? { ...tk, notes: [...(tk.notes || []), noteText.trim()] } : tk));
    setNoteText("");
    showToast(isRTL ? "تمت إضافة الملاحظة" : "Note added");
  };

  const handleCreateAppt = () => {
    const a = { id: `AP-2024-${String(appointments.length + 1).padStart(3, "0")}`, client: nAClient, clientEn: nAClient, phone: nAPhone, type: nAType, date: nADate, time: nATime, status: "scheduled", location: nALoc, locationEn: nALoc };
    setAppointments(prev => [a, ...prev]); setShowNewAppt(false);
    setNAClient(""); setNAPhone(""); setNADate(""); setNATime(""); setNAType("consultation"); setNALoc("");
    showToast(isRTL ? "تم إنشاء الموعد" : "Appointment created");
  };

  const handleDeleteAppt = (id) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
    setDeleteConfirm(null); setSelectedAppt(null);
    showToast(isRTL ? "تم الحذف" : "Deleted", "error");
  };

  const handleToggleUser = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, active: !u.active } : u));
    showToast(isRTL ? "تم تحديث الصلاحية" : "Permission updated");
  };

  const handleChangeRole = (id, role) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, role } : u));
    showToast(isRTL ? "تم تغيير الدور" : "Role changed");
  };

  const exportWeeklyReport = () => {
    const data = orders.map(o => ({
      ID: o.id, Customer: lang === "ar" ? o.customer : o.customerEn,
      Type: t[o.type] || o.type, Priority: t[o.priority] || o.priority,
      Status: t[o.status] || o.status, Technician: getTechName(o.tech), Date: o.date,
      Location: lang === "ar" ? o.location : o.locationEn
    }));
    exportToCSV(data, "Rooya_WeeklyReport", ["ID", "Customer", "Type", "Priority", "Status", "Technician", "Date", "Location"]);
    showToast(isRTL ? "تم تصدير التقرير" : "Report exported");
  };

  const exportTicketsReport = () => {
    const data = tickets.map(tk => ({
      ID: tk.id, Subject: lang === "ar" ? tk.subject : tk.subjectEn,
      Customer: lang === "ar" ? tk.customer : tk.customerEn,
      Phone: tk.phone, Type: t[tk.ticketType] || tk.ticketType,
      Priority: t[tk.priority] || tk.priority, Status: t[tk.status] || tk.status, Date: tk.date
    }));
    exportToCSV(data, "Rooya_Tickets", ["ID", "Subject", "Customer", "Phone", "Type", "Priority", "Status", "Date"]);
    showToast(isRTL ? "تم تصدير التقرير" : "Report exported");
  };

  const today = new Date().toISOString().split("T")[0];
  const activeVehicles = fleetData.filter(v => v.status === "active").length;
  const openTicketsCount = tickets.filter(tk => tk.status === "open").length;
  const todayAppts = appointments.filter(a => a.date === today).length;

  const weekData = [
    { l: isRTL ? "سبت" : "Sat", v: 12 }, { l: isRTL ? "أحد" : "Sun", v: 19 },
    { l: isRTL ? "اثن" : "Mon", v: 15 }, { l: isRTL ? "ثلا" : "Tue", v: 22 },
    { l: isRTL ? "أرب" : "Wed", v: 18 }, { l: isRTL ? "خمي" : "Thu", v: 25 }, { l: isRTL ? "جمع" : "Fri", v: 8 }
  ];

  const navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: t.dashboard },
    { id: "fleet", icon: Car, label: t.fleet },
    { id: "workOrders", icon: ClipboardList, label: t.workOrders },
    { id: "tickets", icon: Ticket, label: t.tickets },
    { id: "appointments", icon: CalendarDays, label: t.appointments },
    { id: "technicians", icon: Users, label: t.technicians },
    { id: "analytics", icon: BarChart3, label: t.analytics },
    { id: "settings", icon: Settings, label: t.settings },
    ...(currentUser?.role === "admin" ? [{ id: "adminPanel", icon: Shield, label: t.adminPanel }] : [])
  ];

  const notifications = [
    { id: 1, text: isRTL ? "تنبيه سرعة زائدة - مركبة V-004" : "Speeding Alert - Vehicle V-004", time: "2m", urgent: true },
    { id: 2, text: isRTL ? "اكتمل تركيب الكاميرا - WO-001" : "Camera install complete - WO-001", time: "15m", urgent: false },
    { id: 3, text: isRTL ? "تذكرة جديدة تحتاج مراجعة" : "New ticket needs review", time: "30m", urgent: true }
  ];

  // ── RENDER LOGIN ──
  if (!isLoggedIn && page === "login") return (
    <div className={`min-h-screen ${isDark ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"} flex items-center justify-center p-4 relative overflow-hidden`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-96 h-96 ${isDark ? "bg-cyan-500/8" : "bg-cyan-200/40"} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 ${isDark ? "bg-blue-500/8" : "bg-blue-200/40"} rounded-full blur-3xl`}></div>
        {isDark && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl"></div>}
      </div>
      <div className={`${isDark ? "bg-gray-900/90 border-gray-800" : "bg-white/90 border-gray-200"} backdrop-blur-2xl rounded-3xl shadow-2xl w-full max-w-md p-8 border relative z-10`}>
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/30">
              <Camera size={40} className="text-white" />
            </div>
          </div>
          <RooyaLogo size="large" theme={theme} />
          <p className={`${ts} mt-2 text-sm`}>{t.appSubtitle}</p>
        </div>
        {loginError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-4 flex items-center gap-2 text-sm"><AlertCircle size={16} />{loginError}</div>}
        <div className="space-y-4">
          <div><label className={`block text-sm font-medium ${ts} mb-1.5`}>{t.email}</label>
            <input type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()} className={inputBase} placeholder="admin@rooya.ai" /></div>
          <div><label className={`block text-sm font-medium ${ts} mb-1.5`}>{t.password}</label>
            <input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && handleLogin()} className={inputBase} placeholder="••••••••" /></div>
          <button onClick={handleLogin} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2">
            <Zap size={18} />{t.login}
          </button>
        </div>
        <div className="mt-5 text-center text-sm">
          <span className={ts}>{t.noAccount} </span>
          <button onClick={() => setPage("register")} className="text-cyan-400 font-semibold hover:underline">{t.register}</button>
        </div>
        <div className={`mt-5 pt-5 border-t ${isDark ? "border-gray-800" : "border-gray-100"}`}>
          <p className={`text-xs ${ts} text-center mb-2`}>{isRTL ? "بيانات تجريبية:" : "Demo credentials:"}</p>
          <div className={`${isDark ? "bg-gray-800/50" : "bg-gray-50"} rounded-xl p-3 text-xs ${ts} space-y-1`}>
            <p><span className="text-cyan-400 font-semibold">Admin:</span> admin@rooya.ai / admin123</p>
            <p><span className="text-purple-400 font-semibold">User:</span> user@rooya.ai / user123</p>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className={`text-sm ${ts} hover:text-cyan-400 flex items-center gap-1 transition-colors`}><Globe size={14} />{lang === "ar" ? "EN" : "عربي"}</button>
          <button onClick={() => setTheme(isDark ? "light" : "dark")} className={`text-sm ${ts} hover:text-cyan-400 flex items-center gap-1 transition-colors`}>{isDark ? <Sun size={14} /> : <Moon size={14} />}{isDark ? "Light" : "Dark"}</button>
        </div>
      </div>
    </div>
  );

  if (!isLoggedIn && page === "register") return (
    <div className={`min-h-screen ${isDark ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"} flex items-center justify-center p-4`} dir={isRTL ? "rtl" : "ltr"}>
      <div className={`${isDark ? "bg-gray-900/90 border-gray-800" : "bg-white/90 border-gray-200"} backdrop-blur-2xl rounded-3xl shadow-2xl w-full max-w-md p-8 border`}>
        <div className="text-center mb-6"><RooyaLogo size="large" theme={theme} /><p className={`${ts} mt-1`}>{t.register}</p></div>
        {regError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-4 text-sm">{regError}</div>}
        <div className="space-y-4">
          <div><label className={`block text-sm font-medium ${ts} mb-1.5`}>{t.fullName}</label><input value={regName} onChange={e => setRegName(e.target.value)} className={inputBase} /></div>
          <div><label className={`block text-sm font-medium ${ts} mb-1.5`}>{t.email}</label><input type="email" value={regEmail} onChange={e => setRegEmail(e.target.value)} className={inputBase} /></div>
          <div><label className={`block text-sm font-medium ${ts} mb-1.5`}>{t.password}</label><input type="password" value={regPassword} onChange={e => setRegPassword(e.target.value)} className={inputBase} /></div>
          <div><label className={`block text-sm font-medium ${ts} mb-1.5`}>{t.confirmPassword}</label><input type="password" value={regConfirm} onChange={e => setRegConfirm(e.target.value)} className={inputBase} /></div>
          <button onClick={handleRegister} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold">{t.register}</button>
        </div>
        <div className="mt-5 text-center text-sm"><span className={ts}>{t.haveAccount} </span><button onClick={() => setPage("login")} className="text-cyan-400 font-semibold hover:underline">{t.login}</button></div>
      </div>
    </div>
  );

  // ── SIDEBAR ──
  const Sidebar = () => (
    <div className={`${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} h-screen flex flex-col transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"} ${isRTL ? "border-l" : "border-r"} flex-shrink-0`}>
      <div className={`p-4 flex items-center gap-3 border-b ${isDark ? "border-gray-800" : "border-gray-200"} h-16`}>
        <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25">
          <Camera size={18} className="text-white" />
        </div>
        {sidebarOpen && <RooyaLogo size="small" theme={theme} />}
      </div>
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map(item => {
          const active = page === item.id;
          return (
            <button key={item.id} onClick={() => { setPage(item.id); setShowMobileMenu(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${active
                ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/20"
                : `${isDark ? "text-gray-400 hover:bg-gray-800 hover:text-gray-200" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}`}>
              <item.icon size={19} className="flex-shrink-0" />
              {sidebarOpen && <span className="flex-1 text-start">{item.label}</span>}
              {active && sidebarOpen && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>}
            </button>
          );
        })}
      </nav>
      <div className={`p-3 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`w-full flex items-center justify-center p-2 rounded-xl ${isDark ? "text-gray-500 hover:bg-gray-800" : "text-gray-400 hover:bg-gray-100"}`}>
          {sidebarOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </div>
  );

  // ── HEADER ──
  const Header = () => (
    <header className={`${isDark ? "bg-gray-900/95 border-gray-800" : "bg-white/95 border-gray-200"} backdrop-blur-xl border-b px-6 py-3 flex items-center justify-between sticky top-0 z-30 h-16`}>
      <div className="flex items-center gap-3">
        <button className="lg:hidden" onClick={() => setShowMobileMenu(v => !v)}><Menu size={22} className={tp} /></button>
        <div className="relative hidden sm:block">
          <Search size={16} className={`absolute top-1/2 -translate-y-1/2 ${ts} ${isRTL ? "right-3" : "left-3"}`} />
          <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder={t.search}
            className={`${inputBase} ${isRTL ? "pr-9 pl-4" : "pl-9 pr-4"} w-56`} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => setTheme(isDark ? "light" : "dark")}
          className={`p-2 rounded-xl ${isDark ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"} transition-colors`}>
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button onClick={() => setLang(lang === "ar" ? "en" : "ar")}
          className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm ${isDark ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"} transition-colors`}>
          <Globe size={15} />{lang === "ar" ? "EN" : "عربي"}
        </button>
        <div className="relative">
          <button onClick={() => setNotifOpen(v => !v)}
            className={`relative p-2 rounded-xl ${isDark ? "bg-gray-800 text-gray-300 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"} transition-colors`}>
            <Bell size={17} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">3</span>
          </button>
          {notifOpen && (
            <div className={`absolute top-12 w-80 ${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} rounded-2xl shadow-2xl border z-50 overflow-hidden ${isRTL ? "left-0" : "right-0"}`}>
              <div className={`p-4 border-b ${isDark ? "border-gray-800" : "border-gray-100"} font-semibold ${tp} text-sm`}>{t.notifications}</div>
              {notifications.map(n => (
                <div key={n.id} className={`p-3 ${isDark ? "hover:bg-gray-800/50 border-gray-800/50" : "hover:bg-gray-50 border-gray-50"} cursor-pointer flex gap-3 border-b items-start`}>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${n.urgent ? "bg-red-500/20 text-red-400" : "bg-cyan-500/20 text-cyan-400"}`}><AlertTriangle size={16} /></div>
                  <div className="flex-1 min-w-0"><p className={`text-sm ${tp} leading-snug`}>{n.text}</p><p className={`text-xs ${ts} mt-0.5`}>{n.time}</p></div>
                  {n.urgent && <PulsingDot color="bg-red-500" />}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-9 h-9 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-cyan-500/25">
          {(currentUser?.name || "U").charAt(0)}
        </div>
        <button onClick={handleLogout} title={t.logout}
          className={`p-2 rounded-xl ${isDark ? "text-gray-500 hover:bg-red-500/15 hover:text-red-400" : "text-gray-400 hover:bg-red-50 hover:text-red-500"} transition-colors`}>
          <LogOut size={17} />
        </button>
      </div>
    </header>
  );

  // ── DASHBOARD ──
  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className={`text-2xl font-bold ${tp}`}>{t.welcome}{isRTL ? `، ${currentUser?.name}` : `, ${currentUser?.nameEn}`} 👋</h1>
          <p className={`${ts} mt-1 flex items-center gap-2 text-sm`}><PulsingDot color="bg-emerald-500" />{isRTL ? "جميع الأنظمة تعمل بشكل طبيعي" : "All systems operational"}</p>
        </div>
        <div className="flex gap-2">
          <button onClick={exportWeeklyReport} className={`${isDark ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"} border px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors`}>
            <Download size={16} />{t.weeklyReport}
          </button>
          <button onClick={() => { setPage("workOrders"); setShowNewOrder(true); }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 text-sm shadow-lg shadow-cyan-500/20 hover:from-cyan-600 hover:to-blue-700 transition-all">
            <Plus size={16} />{t.newOrder}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Car} label={t.activeVehicles} value={activeVehicles} change={8} color="bg-gradient-to-br from-cyan-500 to-blue-600" onClick={() => setPage("fleet")} isDark={isDark} glow="cyan" />
        <StatCard icon={Camera} label={t.aiDetections} value={156} change={23} color="bg-gradient-to-br from-emerald-500 to-green-600" isDark={isDark} glow="green" />
        <StatCard icon={AlertTriangle} label={t.aiAlerts} value={12} change={-15} color="bg-gradient-to-br from-orange-500 to-red-600" isDark={isDark} glow="orange" />
        <StatCard icon={ShieldCheck} label={t.safetyScore} value={92} color="bg-gradient-to-br from-purple-500 to-indigo-600" isDark={isDark} glow="cyan" />
      </div>

      <GlowingCard className={`${cardBg} border backdrop-blur-sm p-5`} glow="cyan">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-bold ${tp} flex items-center gap-2`}><PulsingDot color="bg-cyan-500" />{t.liveTracking}</h3>
          <button onClick={() => setPage("fleet")} className="text-cyan-400 text-sm hover:underline flex items-center gap-1">{t.viewAll}<ChevronRight size={14} /></button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {fleetData.map(v => (
            <div key={v.id} className={`${isDark ? "bg-gray-800/60 border-gray-700/50 hover:border-cyan-500/40" : "bg-gray-50 border-gray-200 hover:border-cyan-400"} border rounded-xl p-4 transition-all cursor-pointer`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2"><Car size={16} className={v.status === "alert" ? "text-red-400" : "text-cyan-400"} /><span className={`font-mono text-xs ${tp}`}>{lang === "ar" ? v.plate : v.plateEn}</span></div>
                <StatusBadge status={v.status} t={t} isDark={isDark} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center"><span className={`text-xs ${ts}`}>{t.speed}</span><span className={`text-sm font-bold ${v.speed > 100 ? "text-red-400" : "text-emerald-400"}`}>{v.speed} km/h</span></div>
                <div className="flex items-center gap-2"><div className={`flex-1 h-1.5 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`}><div className={`h-full rounded-full ${v.safetyScore > 80 ? "bg-emerald-500" : v.safetyScore > 60 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${v.safetyScore}%` }}></div></div><span className={`text-xs ${tp}`}>{v.safetyScore}%</span></div>
              </div>
            </div>
          ))}
        </div>
      </GlowingCard>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <GlowingCard className={`lg:col-span-2 ${cardBg} border p-5`} glow="cyan">
          <h3 className={`font-bold ${tp} mb-4`}>{t.weeklyOverview}</h3>
          <MiniBarChart data={weekData} isDark={isDark} />
        </GlowingCard>
        <GlowingCard className={`${cardBg} border p-5`} glow="green">
          <h3 className={`font-bold ${tp} mb-4`}>{t.safetyScore}</h3>
          <div className="flex justify-center my-2"><CircularProgress value={92} color="#00D4FF" /></div>
          <p className={`text-center ${ts} text-sm mt-2`}>{isRTL ? "أداء ممتاز هذا الأسبوع" : "Excellent performance this week"}</p>
        </GlowingCard>
      </div>
    </div>
  );

  // ── FLEET ──
  const renderFleet = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${tp}`}>{t.fleet}</h1>
        <div className="flex items-center gap-2"><PulsingDot color="bg-emerald-500" /><span className={`${ts} text-sm`}>{activeVehicles} {t.activeVehicles}</span></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Car} label={t.vehicles} value={fleetData.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" isDark={isDark} glow="cyan" />
        <StatCard icon={Navigation} label={t.totalDistance} value={12450} color="bg-gradient-to-br from-emerald-500 to-green-600" isDark={isDark} glow="green" />
        <StatCard icon={Gauge} label={t.fuelEfficiency} value={94} color="bg-gradient-to-br from-purple-500 to-indigo-600" isDark={isDark} glow="cyan" />
        <StatCard icon={AlertTriangle} label={t.aiAlerts} value={12} color="bg-gradient-to-br from-orange-500 to-red-500" isDark={isDark} glow="orange" />
      </div>
      <GlowingCard className={`${cardBg} border overflow-hidden`} glow="cyan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={`${isDark ? "bg-gray-800/80" : "bg-gray-50"}`}>
              <tr className={ts}>
                {[t.plateNumber, t.drivers, t.status, t.speed, t.location, t.safetyScore, t.fuel].map(h => (
                  <th key={h} className="text-start p-4 font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fleetData.map(v => (
                <tr key={v.id} className={`border-t ${isDark ? "border-gray-800 hover:bg-gray-800/40" : "border-gray-100 hover:bg-gray-50"}`}>
                  <td className={`p-4 font-mono ${tp}`}>{lang === "ar" ? v.plate : v.plateEn}</td>
                  <td className={`p-4 ${tp}`}>{lang === "ar" ? v.driver : v.driverEn}</td>
                  <td className="p-4"><StatusBadge status={v.status} t={t} isDark={isDark} /></td>
                  <td className={`p-4 font-bold ${v.speed > 100 ? "text-red-400" : "text-emerald-400"}`}>{v.speed} km/h</td>
                  <td className={`p-4 ${ts} text-xs`}>{lang === "ar" ? v.location : v.locationEn}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-16 h-1.5 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`}>
                        <div className={`h-full rounded-full ${v.safetyScore > 80 ? "bg-emerald-500" : "bg-yellow-500"}`} style={{ width: `${v.safetyScore}%` }}></div>
                      </div>
                      <span className={`text-sm ${tp}`}>{v.safetyScore}%</span>
                    </div>
                  </td>
                  <td className="p-4"><div className="flex items-center gap-1.5"><Battery size={15} className={v.fuel > 50 ? "text-emerald-400" : "text-yellow-400"} /><span className={tp}>{v.fuel}%</span></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowingCard>
    </div>
  );

  // ── WORK ORDERS ──
  const EditOrderModal = ({ order, onSave, onClose }) => {
    const [form, setForm] = useState({ ...order });
    return (
      <Modal open={true} onClose={onClose} title={t.edit} subtitle={form.id} isDark={isDark}>
        <div className="space-y-3">
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.customer}</label><input value={form.customer} onChange={e => setForm(f => ({ ...f, customer: e.target.value, customerEn: e.target.value }))} className={inputBase} /></div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.location}</label><input value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value, locationEn: e.target.value }))} className={inputBase} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.type}</label>
              <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} className={inputBase}>
                <option value="installation">{t.installation}</option><option value="maintenance">{t.maintenance}</option>
                <option value="repair">{t.repair}</option><option value="inspection">{t.inspection}</option>
              </select></div>
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.status}</label>
              <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} className={inputBase}>
                <option value="pending">{t.pending}</option><option value="inProgress">{t.inProgress}</option>
                <option value="completed">{t.completed}</option><option value="cancelled">{t.cancelled}</option>
              </select></div>
          </div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.priority}</label>
            <select value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))} className={inputBase}>
              <option value="low">{t.low}</option><option value="medium">{t.medium}</option>
              <option value="high">{t.high}</option><option value="urgent">{t.urgent}</option>
            </select></div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.description}</label><textarea value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value, descEn: e.target.value }))} rows={3} className={inputBase}></textarea></div>
          <div className="flex gap-3 pt-2">
            <button onClick={() => onSave(form)} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm">{t.save}</button>
            <button onClick={onClose} className={`flex-1 border ${isDark ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} py-2.5 rounded-xl font-medium text-sm`}>{t.cancel}</button>
          </div>
        </div>
      </Modal>
    );
  };

  const renderWorkOrders = () => (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className={`text-2xl font-bold ${tp}`}>{t.workOrders}</h1>
        <div className="flex gap-2">
          <button onClick={exportWeeklyReport} className={`${isDark ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"} border px-3 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors`}>
            <Download size={15} />{t.exportExcel}
          </button>
          <button onClick={() => setShowNewOrder(true)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 text-sm shadow-lg shadow-cyan-500/20">
            <Plus size={16} />{t.newOrder}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className={`${inputBase} w-auto`}>
          <option value="all">{t.allStatuses}</option><option value="pending">{t.pending}</option>
          <option value="inProgress">{t.inProgress}</option><option value="completed">{t.completed}</option>
          <option value="cancelled">{t.cancelled}</option>
        </select>
        <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)} className={`${inputBase} w-auto`}>
          <option value="all">{t.allPriorities}</option><option value="urgent">{t.urgent}</option>
          <option value="high">{t.high}</option><option value="medium">{t.medium}</option><option value="low">{t.low}</option>
        </select>
      </div>

      <GlowingCard className={`${cardBg} border overflow-hidden`} glow="cyan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={`${isDark ? "bg-gray-800/80" : "bg-gray-50"}`}>
              <tr className={ts}>
                {[t.orderID, t.customer, t.type, t.priority, t.status, t.assignedTo, t.date, t.actions].map(h => (
                  <th key={h} className="text-start p-4 font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(o => (
                <tr key={o.id} className={`border-t ${isDark ? "border-gray-800 hover:bg-cyan-500/5" : "border-gray-100 hover:bg-cyan-50/50"}`}>
                  <td className="p-4 font-mono text-cyan-400 cursor-pointer hover:underline text-sm" onClick={() => setSelectedOrder(o)}>{o.id}</td>
                  <td className={`p-4 ${tp} whitespace-nowrap`}>{lang === "ar" ? o.customer : o.customerEn}</td>
                  <td className={`p-4 ${tp}`}>{t[o.type] || o.type}</td>
                  <td className="p-4"><PriorityBadge priority={o.priority} t={t} /></td>
                  <td className="p-4"><StatusBadge status={o.status} t={t} isDark={isDark} /></td>
                  <td className={`p-4 ${ts} text-sm whitespace-nowrap`}>{getTechName(o.tech)}</td>
                  <td className={`p-4 ${ts} text-sm whitespace-nowrap`}>{o.date}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setSelectedOrder(o)} className={`p-1.5 rounded-lg ${isDark ? "hover:bg-cyan-500/20 text-cyan-400" : "hover:bg-cyan-50 text-cyan-600"}`}><Eye size={15} /></button>
                      {currentUser?.role === "admin" && <>
                        <button onClick={() => setEditOrder(o)} className={`p-1.5 rounded-lg ${isDark ? "hover:bg-yellow-500/20 text-yellow-400" : "hover:bg-yellow-50 text-yellow-600"}`}><Edit size={15} /></button>
                        <button onClick={() => setDeleteConfirm({ type: "order", id: o.id })} className={`p-1.5 rounded-lg ${isDark ? "hover:bg-red-500/20 text-red-400" : "hover:bg-red-50 text-red-500"}`}><Trash2 size={15} /></button>
                      </>}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr><td colSpan={8} className="text-center py-16"><ClipboardList size={40} className={`mx-auto mb-3 ${ts} opacity-30`} /><p className={ts}>{t.noData}</p></td></tr>
              )}
            </tbody>
          </table>
        </div>
      </GlowingCard>

      {/* View Order Modal */}
      <Modal open={!!selectedOrder && !editOrder} onClose={() => setSelectedOrder(null)} title={t.orderDetails} subtitle={selectedOrder?.id} isDark={isDark}>
        {selectedOrder && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {[[t.customer, lang === "ar" ? selectedOrder.customer : selectedOrder.customerEn], [t.location, lang === "ar" ? selectedOrder.location : selectedOrder.locationEn], [t.type, t[selectedOrder.type] || selectedOrder.type], [t.date, selectedOrder.date]].map(([label, val]) => (
                <div key={label}><p className={`text-xs ${ts} mb-1`}>{label}</p><p className={`font-semibold ${tp} text-sm`}>{val}</p></div>
              ))}
              <div><p className={`text-xs ${ts} mb-1`}>{t.priority}</p><PriorityBadge priority={selectedOrder.priority} t={t} /></div>
              <div><p className={`text-xs ${ts} mb-1`}>{t.status}</p><StatusBadge status={selectedOrder.status} t={t} isDark={isDark} /></div>
            </div>
            <div><p className={`text-xs ${ts} mb-1`}>{t.description}</p><p className={`text-sm ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-gray-700"} p-3 rounded-xl`}>{lang === "ar" ? selectedOrder.desc : selectedOrder.descEn}</p></div>
            <div className="flex gap-2 pt-1">
              {currentUser?.role === "admin" && <button onClick={() => { setEditOrder(selectedOrder); }} className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"><Edit size={15} />{t.edit}</button>}
              <button onClick={() => setSelectedOrder(null)} className={`flex-1 border ${isDark ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} py-2.5 rounded-xl font-medium text-sm`}>{t.close}</button>
            </div>
          </div>
        )}
      </Modal>

      {/* New Order Modal */}
      <Modal open={showNewOrder} onClose={() => setShowNewOrder(false)} title={t.createWorkOrder} isDark={isDark}>
        <div className="space-y-3">
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.customer}</label><input value={nCust} onChange={e => setNCust(e.target.value)} className={inputBase} /></div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.location}</label><input value={nLoc} onChange={e => setNLoc(e.target.value)} className={inputBase} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.type}</label>
              <select value={nType} onChange={e => setNType(e.target.value)} className={inputBase}>
                <option value="installation">{t.installation}</option><option value="maintenance">{t.maintenance}</option>
                <option value="repair">{t.repair}</option><option value="inspection">{t.inspection}</option>
              </select></div>
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.priority}</label>
              <select value={nPrio} onChange={e => setNPrio(e.target.value)} className={inputBase}>
                <option value="low">{t.low}</option><option value="medium">{t.medium}</option>
                <option value="high">{t.high}</option><option value="urgent">{t.urgent}</option>
              </select></div>
          </div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.description}</label><textarea value={nDesc} onChange={e => setNDesc(e.target.value)} rows={3} className={inputBase}></textarea></div>
          <div className="flex gap-3 pt-2">
            <button onClick={handleCreateOrder} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm">{t.submit}</button>
            <button onClick={() => setShowNewOrder(false)} className={`flex-1 border ${isDark ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} py-2.5 rounded-xl font-medium text-sm`}>{t.cancel}</button>
          </div>
        </div>
      </Modal>

      {editOrder && <EditOrderModal order={editOrder} onSave={handleSaveOrder} onClose={() => setEditOrder(null)} />}
    </div>
  );

  // ── TICKETS ──
  const EditTicketModal = ({ ticket, onSave, onClose }) => {
    const [form, setForm] = useState({ ...ticket });
    return (
      <Modal open={true} onClose={onClose} title={t.edit} subtitle={form.id} isDark={isDark}>
        <div className="space-y-3">
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.ticketSubject}</label><input value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value, subjectEn: e.target.value }))} className={inputBase} /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.ticketType}</label>
              <select value={form.ticketType} onChange={e => setForm(f => ({ ...f, ticketType: e.target.value }))} className={inputBase}>
                <option value="technical">{t.technical}</option><option value="maintenance">{t.maintenance}</option>
                <option value="billing">{t.billing}</option><option value="general">{t.general}</option>
              </select></div>
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.status}</label>
              <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))} className={inputBase}>
                <option value="open">{t.open}</option><option value="resolved">{t.resolved}</option><option value="closed">{t.closed}</option>
              </select></div>
          </div>
          {form.ticketType === "maintenance" && (
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.maintenanceType}</label>
              <select value={form.maintenanceType || "preventive"} onChange={e => setForm(f => ({ ...f, maintenanceType: e.target.value }))} className={inputBase}>
                <option value="preventive">{t.preventive}</option><option value="corrective">{t.corrective}</option>
              </select></div>
          )}
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.priority}</label>
            <select value={form.priority} onChange={e => setForm(f => ({ ...f, priority: e.target.value }))} className={inputBase}>
              <option value="low">{t.low}</option><option value="medium">{t.medium}</option>
              <option value="high">{t.high}</option><option value="urgent">{t.urgent}</option>
            </select></div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.assignTech}</label>
            <select value={form.tech || ""} onChange={e => setForm(f => ({ ...f, tech: e.target.value ? parseInt(e.target.value) : null }))} className={inputBase}>
              <option value="">—</option>
              {sampleTechnicians.map(tc => <option key={tc.id} value={tc.id}>{lang === "ar" ? tc.name : tc.nameEn}</option>)}
            </select></div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.description}</label><textarea value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value, descEn: e.target.value }))} rows={3} className={inputBase}></textarea></div>
          <div className="flex gap-3 pt-2">
            <button onClick={() => onSave(form)} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm">{t.save}</button>
            <button onClick={onClose} className={`flex-1 border ${isDark ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} py-2.5 rounded-xl font-medium text-sm`}>{t.cancel}</button>
          </div>
        </div>
      </Modal>
    );
  };

  const renderTickets = () => (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className={`text-2xl font-bold ${tp}`}>{t.tickets}</h1>
        <div className="flex gap-2">
          <button onClick={exportTicketsReport} className={`${isDark ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"} border px-3 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors`}>
            <Download size={15} />{t.exportExcel}
          </button>
          <button onClick={() => setShowNewTicket(true)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 text-sm shadow-lg shadow-cyan-500/20">
            <Plus size={16} />{t.newTicket}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard icon={Ticket} label={t.totalTickets} value={tickets.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" isDark={isDark} glow="cyan" />
        <StatCard icon={AlertCircle} label={t.openTickets} value={openTicketsCount} color="bg-gradient-to-br from-orange-500 to-red-500" isDark={isDark} glow="orange" />
        <StatCard icon={CheckCircle} label={t.closedTickets} value={tickets.filter(tk => tk.status !== "open").length} color="bg-gradient-to-br from-emerald-500 to-green-600" isDark={isDark} glow="green" />
      </div>

      <GlowingCard className={`${cardBg} border overflow-hidden`} glow="cyan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={`${isDark ? "bg-gray-800/80" : "bg-gray-50"}`}>
              <tr className={ts}>
                {[t.ticketID, t.ticketSubject, t.customer, t.clientPhone, t.ticketType, t.priority, t.status, t.date, t.actions].map(h => (
                  <th key={h} className="text-start p-4 font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tickets.map(tk => (
                <tr key={tk.id} className={`border-t ${isDark ? "border-gray-800 hover:bg-cyan-500/5" : "border-gray-100 hover:bg-cyan-50/50"}`}>
                  <td className="p-4 font-mono text-cyan-400 text-sm">{tk.id}</td>
                  <td className={`p-4 ${tp} whitespace-nowrap`}>{lang === "ar" ? tk.subject : tk.subjectEn}</td>
                  <td className={`p-4 ${tp} whitespace-nowrap`}>{lang === "ar" ? tk.customer : tk.customerEn}</td>
                  <td className={`p-4 ${ts} whitespace-nowrap`}>{tk.phone || "—"}</td>
                  <td className={`p-4 ${tp}`}>{t[tk.ticketType] || tk.ticketType}{tk.ticketType === "maintenance" && tk.maintenanceType ? ` (${t[tk.maintenanceType] || tk.maintenanceType})` : ""}</td>
                  <td className="p-4"><PriorityBadge priority={tk.priority} t={t} /></td>
                  <td className="p-4"><StatusBadge status={tk.status} t={t} isDark={isDark} /></td>
                  <td className={`p-4 ${ts} whitespace-nowrap`}>{tk.date}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setSelectedTicket(tk)} className={`p-1.5 rounded-lg ${isDark ? "hover:bg-cyan-500/20 text-cyan-400" : "hover:bg-cyan-50 text-cyan-600"}`}><Eye size={15} /></button>
                      {tk.phone && <button onClick={() => sendWhatsApp(tk.phone, isRTL ? `مرحباً، بخصوص تذكرة رقم ${tk.id}: ${tk.subject}` : `Hello, regarding ticket ${tk.id}: ${tk.subjectEn}`)}
                        className="p-1.5 rounded-lg hover:bg-green-500/20 text-green-400"><MessageCircle size={15} /></button>}
                      {currentUser?.role === "admin" && <>
                        <button onClick={() => setEditTicket(tk)} className={`p-1.5 rounded-lg ${isDark ? "hover:bg-yellow-500/20 text-yellow-400" : "hover:bg-yellow-50 text-yellow-600"}`}><Edit size={15} /></button>
                        <button onClick={() => setDeleteConfirm({ type: "ticket", id: tk.id })} className={`p-1.5 rounded-lg ${isDark ? "hover:bg-red-500/20 text-red-400" : "hover:bg-red-50 text-red-500"}`}><Trash2 size={15} /></button>
                      </>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowingCard>

      {/* View Ticket Modal */}
      <Modal open={!!selectedTicket && !editTicket} onClose={() => setSelectedTicket(null)} title={t.details} subtitle={selectedTicket?.id} isDark={isDark}>
        {selectedTicket && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {[[t.customer, lang === "ar" ? selectedTicket.customer : selectedTicket.customerEn],
              [t.clientPhone, selectedTicket.phone || "—"],
              [t.ticketType, t[selectedTicket.ticketType] || selectedTicket.ticketType],
              [t.date, selectedTicket.date]].map(([label, val]) => (
                <div key={label}><p className={`text-xs ${ts} mb-0.5`}>{label}</p><p className={`font-semibold ${tp} text-sm`}>{val}</p></div>
              ))}
              {selectedTicket.ticketType === "maintenance" && (
                <div><p className={`text-xs ${ts} mb-0.5`}>{t.maintenanceType}</p><p className={`font-semibold ${tp} text-sm`}>{t[selectedTicket.maintenanceType] || selectedTicket.maintenanceType}</p></div>
              )}
              <div><p className={`text-xs ${ts} mb-0.5`}>{t.priority}</p><PriorityBadge priority={selectedTicket.priority} t={t} /></div>
              <div><p className={`text-xs ${ts} mb-0.5`}>{t.status}</p><StatusBadge status={selectedTicket.status} t={t} isDark={isDark} /></div>
              {selectedTicket.tech && <div><p className={`text-xs ${ts} mb-0.5`}>{t.assignedTo}</p><p className={`font-semibold ${tp} text-sm`}>{getTechName(selectedTicket.tech)}</p></div>}
            </div>
            <div><p className={`text-xs ${ts} mb-1`}>{t.description}</p><p className={`text-sm ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-gray-700"} p-3 rounded-xl`}>{lang === "ar" ? selectedTicket.desc : selectedTicket.descEn}</p></div>
            {/* Notes */}
            {selectedTicket.notes?.length > 0 && (
              <div><p className={`text-xs ${ts} mb-1`}>{t.notes}</p>
                <div className="space-y-1">
                  {selectedTicket.notes.map((n, i) => <p key={i} className={`text-sm ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-50 text-gray-700"} p-2.5 rounded-xl`}>{n}</p>)}
                </div>
              </div>
            )}
            <div className="flex gap-2">
              <input value={noteText} onChange={e => setNoteText(e.target.value)} placeholder={t.addNote} className={`${inputBase} flex-1`}
                onKeyDown={e => e.key === "Enter" && handleAddNote(selectedTicket.id)} />
              <button onClick={() => handleAddNote(selectedTicket.id)} className="bg-cyan-500 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-cyan-600">{t.addNote}</button>
            </div>
            <div className="flex gap-2 pt-1">
              {selectedTicket.phone && (
                <button onClick={() => sendWhatsApp(selectedTicket.phone, isRTL ? `مرحباً، بخصوص تذكرة رقم ${selectedTicket.id}: ${selectedTicket.subject}` : `Hello, regarding ticket ${selectedTicket.id}: ${selectedTicket.subjectEn}`)}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
                  <MessageCircle size={16} />{t.sendWhatsApp}
                </button>
              )}
              {currentUser?.role === "admin" && <button onClick={() => setEditTicket(selectedTicket)} className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2"><Edit size={15} />{t.edit}</button>}
              <button onClick={() => setSelectedTicket(null)} className={`flex-1 border ${isDark ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} py-2.5 rounded-xl font-medium text-sm`}>{t.close}</button>
            </div>
          </div>
        )}
      </Modal>

      {/* New Ticket Modal */}
      <Modal open={showNewTicket} onClose={() => setShowNewTicket(false)} title={t.newTicket} isDark={isDark}>
        <div className="space-y-3">
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.ticketSubject}</label><input value={nTSub} onChange={e => setNTSub(e.target.value)} className={inputBase} /></div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.clientPhone}</label><input value={nTPhone} onChange={e => setNTPhone(e.target.value)} className={inputBase} placeholder="05XXXXXXXX" /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.ticketType}</label>
              <select value={nTType} onChange={e => setNTType(e.target.value)} className={inputBase}>
                <option value="technical">{t.technical}</option><option value="maintenance">{t.maintenance}</option>
                <option value="billing">{t.billing}</option><option value="general">{t.general}</option>
              </select></div>
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.priority}</label>
              <select value={nTPrio} onChange={e => setNTPrio(e.target.value)} className={inputBase}>
                <option value="low">{t.low}</option><option value="medium">{t.medium}</option>
                <option value="high">{t.high}</option><option value="urgent">{t.urgent}</option>
              </select></div>
          </div>
          {nTType === "maintenance" && (
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.maintenanceType}</label>
              <select value={nTMaint} onChange={e => setNTMaint(e.target.value)} className={inputBase}>
                <option value="preventive">{t.preventive}</option><option value="corrective">{t.corrective}</option>
              </select></div>
          )}
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.assignTech}</label>
            <select value={nTTech} onChange={e => setNTTech(e.target.value)} className={inputBase}>
              <option value="">— {t.assignTech}</option>
              {sampleTechnicians.map(tc => <option key={tc.id} value={tc.id}>{lang === "ar" ? tc.name : tc.nameEn}</option>)}
            </select></div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.ticketDescription}</label><textarea value={nTDesc} onChange={e => setNTDesc(e.target.value)} rows={3} className={inputBase}></textarea></div>
          <div className="flex gap-3 pt-2">
            <button onClick={handleCreateTicket} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm">{t.submit}</button>
            <button onClick={() => setShowNewTicket(false)} className={`flex-1 border ${isDark ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} py-2.5 rounded-xl font-medium text-sm`}>{t.cancel}</button>
          </div>
        </div>
      </Modal>

      {editTicket && <EditTicketModal ticket={editTicket} onSave={handleSaveTicket} onClose={() => setEditTicket(null)} />}
    </div>
  );

  // ── APPOINTMENTS ──
  const renderAppointments = () => (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className={`text-2xl font-bold ${tp}`}>{t.appointments}</h1>
        <button onClick={() => setShowNewAppt(true)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 text-sm shadow-lg shadow-cyan-500/20">
          <Plus size={16} />{t.newAppointment}
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard icon={CalendarDays} label={t.totalAppointments} value={appointments.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" isDark={isDark} glow="cyan" />
        <StatCard icon={CalendarCheck} label={t.todayAppointments} value={todayAppts} color="bg-gradient-to-br from-emerald-500 to-green-600" isDark={isDark} glow="green" />
        <StatCard icon={Clock} label={t.upcomingAppointments} value={appointments.filter(a => a.date > today).length} color="bg-gradient-to-br from-purple-500 to-indigo-600" isDark={isDark} glow="cyan" />
      </div>

      <GlowingCard className={`${cardBg} border overflow-hidden`} glow="cyan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={`${isDark ? "bg-gray-800/80" : "bg-gray-50"}`}>
              <tr className={ts}>
                {["ID", t.clientName, t.clientPhone, t.type, t.date, t.appointmentTime, t.location, t.status, t.actions].map(h => (
                  <th key={h} className="text-start p-4 font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {appointments.map(a => (
                <tr key={a.id} className={`border-t ${isDark ? "border-gray-800 hover:bg-cyan-500/5" : "border-gray-100 hover:bg-cyan-50/50"}`}>
                  <td className="p-4 font-mono text-cyan-400 text-sm">{a.id}</td>
                  <td className={`p-4 ${tp} whitespace-nowrap`}>{lang === "ar" ? a.client : a.clientEn}</td>
                  <td className={`p-4 ${ts}`}>{a.phone}</td>
                  <td className={`p-4 ${tp}`}>{t[a.type] || a.type}</td>
                  <td className={`p-4 ${ts} whitespace-nowrap`}>{a.date}</td>
                  <td className={`p-4 ${tp}`}>{a.time}</td>
                  <td className={`p-4 ${ts} text-xs whitespace-nowrap`}>{lang === "ar" ? a.location : a.locationEn}</td>
                  <td className="p-4"><StatusBadge status={a.status} t={t} isDark={isDark} /></td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <button onClick={() => setSelectedAppt(a)} className={`p-1.5 rounded-lg ${isDark ? "hover:bg-cyan-500/20 text-cyan-400" : "hover:bg-cyan-50 text-cyan-600"}`}><Eye size={15} /></button>
                      {a.phone && <button onClick={() => sendWhatsApp(a.phone, isRTL ? `تذكير موعد: ${a.date} الساعة ${a.time}` : `Appointment reminder: ${a.date} at ${a.time}`)}
                        className="p-1.5 rounded-lg hover:bg-green-500/20 text-green-400"><MessageCircle size={15} /></button>}
                      {currentUser?.role === "admin" && <button onClick={() => setDeleteConfirm({ type: "appt", id: a.id })} className={`p-1.5 rounded-lg ${isDark ? "hover:bg-red-500/20 text-red-400" : "hover:bg-red-50 text-red-500"}`}><Trash2 size={15} /></button>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowingCard>

      {/* View Appt Modal */}
      <Modal open={!!selectedAppt} onClose={() => setSelectedAppt(null)} title={t.details} subtitle={selectedAppt?.id} isDark={isDark}>
        {selectedAppt && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {[[t.clientName, lang === "ar" ? selectedAppt.client : selectedAppt.clientEn],
              [t.clientPhone, selectedAppt.phone],
              [t.appointmentDate, selectedAppt.date],
              [t.appointmentTime, selectedAppt.time],
              [t.appointmentType, t[selectedAppt.type] || selectedAppt.type],
              [t.location, lang === "ar" ? selectedAppt.location : selectedAppt.locationEn]].map(([label, val]) => (
                <div key={label}><p className={`text-xs ${ts} mb-0.5`}>{label}</p><p className={`font-semibold ${tp} text-sm`}>{val}</p></div>
              ))}
              <div><p className={`text-xs ${ts} mb-0.5`}>{t.status}</p><StatusBadge status={selectedAppt.status} t={t} isDark={isDark} /></div>
            </div>
            <div className="flex gap-2 pt-1">
              {selectedAppt.phone && <button onClick={() => sendWhatsApp(selectedAppt.phone, isRTL ? `تذكير موعد: ${selectedAppt.date} الساعة ${selectedAppt.time}` : `Appointment reminder: ${selectedAppt.date} at ${selectedAppt.time}`)}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
                <MessageCircle size={16} />{t.sendWhatsApp}
              </button>}
              <button onClick={() => setSelectedAppt(null)} className={`flex-1 border ${isDark ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} py-2.5 rounded-xl font-medium text-sm`}>{t.close}</button>
            </div>
          </div>
        )}
      </Modal>

      {/* New Appt Modal */}
      <Modal open={showNewAppt} onClose={() => setShowNewAppt(false)} title={t.newAppointment} isDark={isDark}>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.clientName}</label><input value={nAClient} onChange={e => setNAClient(e.target.value)} className={inputBase} /></div>
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.clientPhone}</label><input value={nAPhone} onChange={e => setNAPhone(e.target.value)} className={inputBase} placeholder="05XXXXXXXX" /></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.appointmentDate}</label><input type="date" value={nADate} onChange={e => setNADate(e.target.value)} className={inputBase} /></div>
            <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.appointmentTime}</label><input type="time" value={nATime} onChange={e => setNATime(e.target.value)} className={inputBase} /></div>
          </div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.appointmentType}</label>
            <select value={nAType} onChange={e => setNAType(e.target.value)} className={inputBase}>
              <option value="consultation">{t.consultation}</option><option value="siteVisit">{t.siteVisit}</option><option value="followUp">{t.followUp}</option>
            </select></div>
          <div><label className={`text-xs font-medium ${ts} block mb-1`}>{t.location}</label><input value={nALoc} onChange={e => setNALoc(e.target.value)} className={inputBase} /></div>
          <div className="flex gap-3 pt-2">
            <button onClick={handleCreateAppt} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm">{t.submit}</button>
            <button onClick={() => setShowNewAppt(false)} className={`flex-1 border ${isDark ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} py-2.5 rounded-xl font-medium text-sm`}>{t.cancel}</button>
          </div>
        </div>
      </Modal>
    </div>
  );

  // ── TECHNICIANS ──
  const renderTechnicians = () => (
    <div className="space-y-5">
      <h1 className={`text-2xl font-bold ${tp}`}>{t.technicians}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard icon={Users} label={t.totalTechnicians} value={sampleTechnicians.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" isDark={isDark} glow="cyan" />
        <StatCard icon={CheckCircle} label={t.available} value={sampleTechnicians.filter(tc => tc.status === "available").length} color="bg-gradient-to-br from-emerald-500 to-green-600" isDark={isDark} glow="green" />
        <StatCard icon={Truck} label={t.onJob} value={sampleTechnicians.filter(tc => tc.status === "onJob").length} color="bg-gradient-to-br from-orange-500 to-amber-500" isDark={isDark} glow="orange" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {sampleTechnicians.map(tech => (
          <GlowingCard key={tech.id} className={`${cardBg} border p-5 hover:border-cyan-500/30 transition-all`} glow="cyan">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/25">{tech.avatar}</div>
              <div className="flex-1 min-w-0"><h3 className={`font-bold ${tp} truncate`}>{lang === "ar" ? tech.name : tech.nameEn}</h3><p className={`text-xs ${ts}`}>{lang === "ar" ? tech.spec : tech.specEn}</p></div>
              <StatusBadge status={tech.status} t={t} isDark={isDark} />
            </div>
            <div className={`grid grid-cols-2 gap-3 text-center pt-4 border-t ${isDark ? "border-gray-800" : "border-gray-100"}`}>
              <div><p className={`text-xl font-bold ${tp}`}>{tech.jobs}</p><p className={`text-xs ${ts}`}>{t.jobsCompleted}</p></div>
              <div><p className="text-xl font-bold text-yellow-400 flex items-center justify-center gap-1"><Star size={16} className="inline" />{tech.rating}</p><p className={`text-xs ${ts}`}>{t.rating}</p></div>
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => window.open(`tel:${tech.phone}`)} className={`flex-1 border ${isDark ? "border-gray-700 hover:bg-gray-800 text-gray-300" : "border-gray-200 hover:bg-gray-50 text-gray-700"} py-2 rounded-xl text-sm font-medium flex items-center justify-center gap-1.5 transition-colors`}><Phone size={14} />{t.call}</button>
              <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5 hover:from-cyan-600 hover:to-blue-700 transition-all"><ClipboardList size={14} />{t.assign}</button>
            </div>
          </GlowingCard>
        ))}
      </div>
    </div>
  );

  // ── ANALYTICS ──
  const renderAnalytics = () => (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className={`text-2xl font-bold ${tp}`}>{t.analytics}</h1>
        <button onClick={exportWeeklyReport} className={`${isDark ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"} border px-4 py-2 rounded-xl text-sm flex items-center gap-2 transition-colors`}>
          <Download size={15} />{t.exportReport}
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={ClipboardList} label={t.totalOrders} value={orders.length} change={12} color="bg-gradient-to-br from-cyan-500 to-blue-600" isDark={isDark} glow="cyan" />
        <StatCard icon={CheckCircle} label={t.completed} value={orders.filter(o => o.status === "completed").length} change={8} color="bg-gradient-to-br from-emerald-500 to-green-600" isDark={isDark} glow="green" />
        <StatCard icon={Ticket} label={t.openTickets} value={openTicketsCount} change={-5} color="bg-gradient-to-br from-orange-500 to-red-500" isDark={isDark} glow="orange" />
        <StatCard icon={Users} label={t.technicians} value={sampleTechnicians.length} color="bg-gradient-to-br from-purple-500 to-indigo-600" isDark={isDark} glow="cyan" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <GlowingCard className={`${cardBg} border p-5`} glow="cyan">
          <h3 className={`font-bold ${tp} mb-4`}>{t.weeklyOverview}</h3>
          <MiniBarChart data={weekData} isDark={isDark} />
        </GlowingCard>
        <GlowingCard className={`${cardBg} border p-5`} glow="green">
          <h3 className={`font-bold ${tp} mb-4`}>{t.customerSatisfaction}</h3>
          <div className="flex justify-center my-2"><CircularProgress value={94} color="#10B981" /></div>
          <p className={`text-center ${ts} text-sm mt-2`}>{isRTL ? "ممتاز" : "Excellent"}</p>
        </GlowingCard>
      </div>
      <GlowingCard className={`${cardBg} border p-5`} glow="cyan">
        <h3 className={`font-bold ${tp} mb-4`}>{t.topTechnicians}</h3>
        <div className="space-y-2.5">
          {sampleTechnicians.sort((a, b) => b.rating - a.rating).slice(0, 3).map((tech, i) => (
            <div key={tech.id} className={`flex items-center gap-3 p-3 ${isDark ? "bg-gray-800/60" : "bg-gray-50"} rounded-xl`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${i === 0 ? "bg-yellow-500" : i === 1 ? "bg-gray-400" : "bg-amber-600"}`}>{i + 1}</span>
              <div className="flex-1"><p className={`font-medium ${tp} text-sm`}>{lang === "ar" ? tech.name : tech.nameEn}</p><p className={`text-xs ${ts}`}>{tech.jobs} {t.jobsCompleted}</p></div>
              <div className="flex items-center gap-1"><Star size={14} className="text-yellow-400" /><span className={`font-semibold ${tp} text-sm`}>{tech.rating}</span></div>
            </div>
          ))}
        </div>
      </GlowingCard>
    </div>
  );

  // ── SETTINGS ──
  const renderSettings = () => (
    <div className="space-y-5">
      <h1 className={`text-2xl font-bold ${tp}`}>{t.settings}</h1>
      <GlowingCard className={`${cardBg} border p-5 space-y-1`} glow="cyan">
        {[
          { icon: Globe, label: t.language, sub: lang === "ar" ? "العربية" : "English", action: () => setLang(lang === "ar" ? "en" : "ar"), btnLabel: lang === "ar" ? "English" : "العربية" },
          { icon: isDark ? Moon : Sun, label: isDark ? t.darkMode : t.lightMode, sub: isDark ? (isRTL ? "مفعّل" : "Enabled") : (isRTL ? "معطّل" : "Disabled"), action: () => setTheme(isDark ? "light" : "dark"), btnLabel: isDark ? t.lightMode : t.darkMode },
        ].map(item => (
          <div key={item.label} className={`flex items-center justify-between py-4 border-b ${isDark ? "border-gray-800" : "border-gray-100"}`}>
            <div className="flex items-center gap-3"><item.icon size={18} className={ts} /><div><p className={`font-medium ${tp} text-sm`}>{item.label}</p><p className={`text-xs ${ts}`}>{item.sub}</p></div></div>
            <button onClick={item.action} className={`px-4 py-2 border ${isDark ? "border-gray-700 hover:bg-gray-800 text-gray-300" : "border-gray-200 hover:bg-gray-50 text-gray-600"} rounded-xl text-sm transition-colors`}>{item.btnLabel}</button>
          </div>
        ))}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3"><User size={18} className={ts} /><div><p className={`font-medium ${tp} text-sm`}>{t.profile}</p><p className={`text-xs ${ts}`}>{lang === "ar" ? currentUser?.name : currentUser?.nameEn} · {t[currentUser?.role] || currentUser?.role}</p></div></div>
          <span className={`px-3 py-1.5 border ${isDark ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400" : "border-cyan-200 bg-cyan-50 text-cyan-600"} rounded-xl text-xs font-semibold`}>{t[currentUser?.role] || currentUser?.role}</span>
        </div>
      </GlowingCard>
      <GlowingCard className={`${cardBg} border p-5`} glow="green">
        <h3 className={`font-bold ${tp} mb-4`}>{t.systemHealth}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className={`${isDark ? "bg-emerald-500/10 border-emerald-500/30" : "bg-emerald-50 border-emerald-200"} border rounded-xl p-4 text-center`}>
            <p className="text-2xl font-bold text-emerald-400">99.9%</p><p className={`text-xs text-emerald-400/80 mt-0.5`}>{t.uptime}</p>
          </div>
          <div className={`${isDark ? "bg-cyan-500/10 border-cyan-500/30" : "bg-cyan-50 border-cyan-200"} border rounded-xl p-4 text-center`}>
            <p className="text-2xl font-bold text-cyan-400">24</p><p className={`text-xs text-cyan-400/80 mt-0.5`}>{t.activeUsers}</p>
          </div>
        </div>
      </GlowingCard>
    </div>
  );

  // ── ADMIN PANEL ──
  const renderAdminPanel = () => (
    <div className="space-y-5">
      <h1 className={`text-2xl font-bold ${tp}`}>{t.adminPanel}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Users} label={t.users} value={users.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" isDark={isDark} glow="cyan" />
        <StatCard icon={ClipboardList} label={t.totalOrders} value={orders.length} color="bg-gradient-to-br from-emerald-500 to-green-600" isDark={isDark} glow="green" />
        <StatCard icon={Ticket} label={t.totalTickets} value={tickets.length} color="bg-gradient-to-br from-orange-500 to-red-500" isDark={isDark} glow="orange" />
        <StatCard icon={CalendarDays} label={t.totalAppointments} value={appointments.length} color="bg-gradient-to-br from-purple-500 to-indigo-600" isDark={isDark} glow="cyan" />
      </div>

      {/* User Management */}
      <GlowingCard className={`${cardBg} border p-5`} glow="cyan">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`font-bold ${tp}`}>{t.manageUsers}</h3>
          <span className={`text-xs ${ts}`}>{t.accessControl}</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={`${isDark ? "bg-gray-800/80" : "bg-gray-50"}`}>
              <tr className={ts}>
                {["ID", t.fullName, t.email, t.role, t.status, t.actions].map(h => (
                  <th key={h} className="text-start p-3 font-semibold whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className={`border-t ${isDark ? "border-gray-800 hover:bg-gray-800/30" : "border-gray-100 hover:bg-gray-50"}`}>
                  <td className={`p-3 ${ts} text-sm`}>{u.id}</td>
                  <td className={`p-3 ${tp} font-medium`}>{lang === "ar" ? u.name : u.nameEn}</td>
                  <td className={`p-3 ${ts} text-sm`}>{u.email}</td>
                  <td className="p-3">
                    <select value={u.role} onChange={e => handleChangeRole(u.id, e.target.value)}
                      disabled={u.id === currentUser?.id}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border ${isDark ? "bg-gray-800 border-gray-700 text-gray-300" : "bg-white border-gray-200 text-gray-700"} focus:outline-none focus:ring-1 focus:ring-cyan-500 disabled:opacity-50`}>
                      <option value="admin">{t.admin}</option>
                      <option value="user">{t.user}</option>
                      <option value="technician">{t.technician}</option>
                    </select>
                  </td>
                  <td className="p-3"><StatusBadge status={u.active ? "active" : "offline"} t={{ ...t, active: t.active, offline: t.inactive }} isDark={isDark} /></td>
                  <td className="p-3">
                    <div className="flex items-center gap-1">
                      {u.id !== currentUser?.id && (
                        <button onClick={() => handleToggleUser(u.id)}
                          className={`p-1.5 rounded-lg ${u.active ? `${isDark ? "hover:bg-red-500/20 text-red-400" : "hover:bg-red-50 text-red-500"}` : `${isDark ? "hover:bg-emerald-500/20 text-emerald-400" : "hover:bg-emerald-50 text-emerald-500"}`}`}
                          title={u.active ? t.deactivate : t.activate}>
                          {u.active ? <Lock size={15} /> : <Unlock size={15} />}
                        </button>
                      )}
                      {u.id !== currentUser?.id && (
                        <button onClick={() => setDeleteConfirm({ type: "user", id: u.id })}
                          className={`p-1.5 rounded-lg ${isDark ? "hover:bg-red-500/20 text-red-400" : "hover:bg-red-50 text-red-500"}`}>
                          <Trash2 size={15} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowingCard>

      {/* Export Section */}
      <GlowingCard className={`${cardBg} border p-5`} glow="green">
        <h3 className={`font-bold ${tp} mb-4`}>{t.reports}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button onClick={exportWeeklyReport} className="flex items-center gap-3 p-4 border border-cyan-500/30 bg-cyan-500/10 rounded-xl hover:bg-cyan-500/20 transition-colors text-start">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center"><Download size={18} className="text-cyan-400" /></div>
            <div><p className={`font-semibold text-cyan-400 text-sm`}>{t.weeklyReport}</p><p className={`text-xs ${ts}`}>{isRTL ? "تصدير أوامر العمل" : "Export work orders"}</p></div>
          </button>
          <button onClick={exportTicketsReport} className="flex items-center gap-3 p-4 border border-emerald-500/30 bg-emerald-500/10 rounded-xl hover:bg-emerald-500/20 transition-colors text-start">
            <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center"><FileText size={18} className="text-emerald-400" /></div>
            <div><p className={`font-semibold text-emerald-400 text-sm`}>{isRTL ? "تقرير التذاكر" : "Tickets Report"}</p><p className={`text-xs ${ts}`}>{isRTL ? "تصدير جميع التذاكر" : "Export all tickets"}</p></div>
          </button>
        </div>
      </GlowingCard>
    </div>
  );

  const renderPage = () => {
    switch (page) {
      case "dashboard": return renderDashboard();
      case "fleet": return renderFleet();
      case "workOrders": return renderWorkOrders();
      case "tickets": return renderTickets();
      case "appointments": return renderAppointments();
      case "technicians": return renderTechnicians();
      case "analytics": return renderAnalytics();
      case "settings": return renderSettings();
      case "adminPanel": return currentUser?.role === "admin" ? renderAdminPanel() : renderDashboard();
      default: return renderDashboard();
    }
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className={`flex h-screen ${bg} overflow-hidden transition-colors duration-300`}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.3s ease-out; }
      `}</style>

      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-5 ${isRTL ? "left-5" : "right-5"} z-[100] px-5 py-3 rounded-xl shadow-xl font-semibold text-sm flex items-center gap-2 fade-in ${toast.type === "error" ? "bg-red-500 text-white" : "bg-emerald-500 text-white"}`}>
          {toast.type === "error" ? <AlertCircle size={16} /> : <Check size={16} />}{toast.msg}
        </div>
      )}

      {/* Delete Confirm Modal */}
      <Modal open={!!deleteConfirm} onClose={() => setDeleteConfirm(null)} title={t.deleteConfirm} isDark={isDark} maxWidth="max-w-sm">
        <div className="space-y-4">
          <p className={`${ts} text-sm`}>{isRTL ? "لا يمكن التراجع عن هذا الإجراء." : "This action cannot be undone."}</p>
          <div className="flex gap-3">
            <button onClick={() => {
              if (deleteConfirm.type === "order") handleDeleteOrder(deleteConfirm.id);
              else if (deleteConfirm.type === "ticket") handleDeleteTicket(deleteConfirm.id);
              else if (deleteConfirm.type === "appt") handleDeleteAppt(deleteConfirm.id);
              else if (deleteConfirm.type === "user") { setUsers(prev => prev.filter(u => u.id !== deleteConfirm.id)); setDeleteConfirm(null); showToast(isRTL ? "تم الحذف" : "Deleted", "error"); }
            }} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2">
              <Trash2 size={15} />{t.delete}
            </button>
            <button onClick={() => setDeleteConfirm(null)} className={`flex-1 border ${isDark ? "border-gray-700 text-gray-300" : "border-gray-200 text-gray-600"} py-2.5 rounded-xl font-medium text-sm`}>{t.cancel}</button>
          </div>
        </div>
      </Modal>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block"><Sidebar /></div>

      {/* Mobile Sidebar */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)}></div>
          <div className={`relative z-50 h-full ${isRTL ? "mr-auto ml-0" : "ml-auto mr-0 translate-x-0"}`} style={{ width: "fit-content" }}>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-5 fade-in">{renderPage()}</main>
      </div>
    </div>
  );
}
