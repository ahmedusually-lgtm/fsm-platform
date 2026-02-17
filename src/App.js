import { useState, useEffect } from "react";
import {
  LayoutDashboard, ClipboardList, Users, BarChart3, Settings, Bell, Search,
  Plus, ChevronRight, Clock, CheckCircle, Wrench, Truck, Phone, Star,
  TrendingUp, TrendingDown, Activity, Eye, Edit, Menu, X, Globe, Moon, Sun,
  User, LogOut, Briefcase, Shield, Layers, Ticket, CalendarDays, CalendarCheck,
  AlertCircle, Car, Camera, MapPin, Gauge, AlertTriangle, Cpu, Zap, Navigation,
  Video, Wifi, Battery, Route, ShieldCheck, Play, Signal, ChevronLeft, Radio
} from "lucide-react";

const translations = {
  ar: {
    appName: "روية AI",
    appSubtitle: "منصة التليماتيكس الذكية",
    dashboard: "لوحة التحكم",
    workOrders: "أوامر العمل",
    technicians: "الفنيين",
    customers: "العملاء",
    tickets: "التذاكر",
    appointments: "المواعيد",
    fleet: "إدارة الأسطول",
    analytics: "التحليلات",
    reports: "التقارير",
    settings: "الإعدادات",
    search: "بحث...",
    notifications: "الإشعارات",
    totalOrders: "إجمالي الأوامر",
    activeOrders: "الأوامر النشطة",
    completedToday: "مكتملة اليوم",
    avgResponse: "متوسط الاستجابة",
    pending: "قيد الانتظار",
    inProgress: "قيد التنفيذ",
    completed: "مكتملة",
    cancelled: "ملغاة",
    urgent: "عاجل",
    high: "عالي",
    medium: "متوسط",
    low: "منخفض",
    newOrder: "أمر عمل جديد",
    allStatuses: "جميع الحالات",
    allPriorities: "جميع الأولويات",
    orderID: "رقم الأمر",
    customer: "العميل",
    type: "النوع",
    priority: "الأولوية",
    status: "الحالة",
    assignedTo: "مُسند إلى",
    date: "التاريخ",
    actions: "الإجراءات",
    available: "متاح",
    onJob: "في مهمة",
    offline: "غير متصل",
    rating: "التقييم",
    jobsCompleted: "المهام المنجزة",
    recentActivity: "النشاط الأخير",
    weeklyOverview: "نظرة أسبوعية",
    topTechnicians: "أفضل الفنيين",
    customerSatisfaction: "رضا العملاء",
    language: "اللغة",
    profile: "الملف الشخصي",
    logout: "تسجيل الخروج",
    viewAll: "عرض الكل",
    details: "التفاصيل",
    edit: "تعديل",
    save: "حفظ",
    cancel: "إلغاء",
    close: "إغلاق",
    welcome: "مرحباً بك",
    quickActions: "إجراءات سريعة",
    systemHealth: "صحة النظام",
    uptime: "وقت التشغيل",
    activeUsers: "المستخدمون النشطون",
    installation: "تركيب",
    maintenance: "صيانة",
    repair: "إصلاح",
    inspection: "فحص",
    minutes: "دقائق",
    noData: "لا توجد بيانات",
    orderDetails: "تفاصيل أمر العمل",
    description: "الوصف",
    location: "الموقع",
    submit: "إرسال",
    createWorkOrder: "إنشاء أمر عمل",
    totalTechnicians: "إجمالي الفنيين",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    fullName: "الاسم الكامل",
    noAccount: "ليس لديك حساب؟",
    haveAccount: "لديك حساب بالفعل؟",
    loginError: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    passwordMismatch: "كلمات المرور غير متطابقة",
    admin: "مدير النظام",
    user: "مستخدم",
    technician: "فني",
    role: "الدور",
    users: "المستخدمين",
    manageUsers: "إدارة المستخدمين",
    ticketID: "رقم التذكرة",
    newTicket: "تذكرة جديدة",
    openTickets: "التذاكر المفتوحة",
    closedTickets: "التذاكر المغلقة",
    ticketSubject: "موضوع التذكرة",
    ticketDescription: "وصف المشكلة",
    open: "مفتوحة",
    closed: "مغلقة",
    resolved: "تم الحل",
    newAppointment: "موعد جديد",
    appointmentDate: "تاريخ الموعد",
    appointmentTime: "وقت الموعد",
    appointmentType: "نوع الموعد",
    scheduled: "مجدول",
    confirmed: "مؤكد",
    todayAppointments: "مواعيد اليوم",
    upcomingAppointments: "المواعيد القادمة",
    consultation: "استشارة",
    siteVisit: "زيارة موقع",
    followUp: "متابعة",
    clientName: "اسم العميل",
    clientPhone: "رقم الهاتف",
    adminPanel: "لوحة الإدارة",
    totalTickets: "إجمالي التذاكر",
    totalAppointments: "إجمالي المواعيد",
    darkMode: "الوضع الداكن",
    lightMode: "الوضع الفاتح",
    liveTracking: "التتبع المباشر",
    aiAlerts: "تنبيهات AI",
    vehicles: "المركبات",
    drivers: "السائقين",
    safetyScore: "نقاط السلامة",
    activeVehicles: "المركبات النشطة",
    totalDistance: "إجمالي المسافة",
    fuelEfficiency: "كفاءة الوقود",
    aiDetections: "اكتشافات AI",
    speed: "السرعة",
    fuel: "الوقود",
    plateNumber: "رقم اللوحة",
    specialization: "التخصص",
    call: "اتصال",
    assign: "تعيين"
  },
  en: {
    appName: "Rooya AI",
    appSubtitle: "Smart Telematics Platform",
    dashboard: "Dashboard",
    workOrders: "Work Orders",
    technicians: "Technicians",
    customers: "Customers",
    tickets: "Tickets",
    appointments: "Appointments",
    fleet: "Fleet Management",
    analytics: "Analytics",
    reports: "Reports",
    settings: "Settings",
    search: "Search...",
    notifications: "Notifications",
    totalOrders: "Total Orders",
    activeOrders: "Active Orders",
    completedToday: "Completed Today",
    avgResponse: "Avg Response",
    pending: "Pending",
    inProgress: "In Progress",
    completed: "Completed",
    cancelled: "Cancelled",
    urgent: "Urgent",
    high: "High",
    medium: "Medium",
    low: "Low",
    newOrder: "New Work Order",
    allStatuses: "All Statuses",
    allPriorities: "All Priorities",
    orderID: "Order ID",
    customer: "Customer",
    type: "Type",
    priority: "Priority",
    status: "Status",
    assignedTo: "Assigned To",
    date: "Date",
    actions: "Actions",
    available: "Available",
    onJob: "On Job",
    offline: "Offline",
    rating: "Rating",
    jobsCompleted: "Jobs Completed",
    recentActivity: "Recent Activity",
    weeklyOverview: "Weekly Overview",
    topTechnicians: "Top Technicians",
    customerSatisfaction: "Customer Satisfaction",
    language: "Language",
    profile: "Profile",
    logout: "Logout",
    viewAll: "View All",
    details: "Details",
    edit: "Edit",
    save: "Save",
    cancel: "Cancel",
    close: "Close",
    welcome: "Welcome",
    quickActions: "Quick Actions",
    systemHealth: "System Health",
    uptime: "Uptime",
    activeUsers: "Active Users",
    installation: "Installation",
    maintenance: "Maintenance",
    repair: "Repair",
    inspection: "Inspection",
    minutes: "minutes",
    noData: "No data available",
    orderDetails: "Work Order Details",
    description: "Description",
    location: "Location",
    submit: "Submit",
    createWorkOrder: "Create Work Order",
    totalTechnicians: "Total Technicians",
    login: "Login",
    register: "Register",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    fullName: "Full Name",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    loginError: "Invalid email or password",
    passwordMismatch: "Passwords do not match",
    admin: "Admin",
    user: "User",
    technician: "Technician",
    role: "Role",
    users: "Users",
    manageUsers: "Manage Users",
    ticketID: "Ticket ID",
    newTicket: "New Ticket",
    openTickets: "Open Tickets",
    closedTickets: "Closed Tickets",
    ticketSubject: "Ticket Subject",
    ticketDescription: "Problem Description",
    open: "Open",
    closed: "Closed",
    resolved: "Resolved",
    newAppointment: "New Appointment",
    appointmentDate: "Appointment Date",
    appointmentTime: "Appointment Time",
    appointmentType: "Appointment Type",
    scheduled: "Scheduled",
    confirmed: "Confirmed",
    todayAppointments: "Today's Appointments",
    upcomingAppointments: "Upcoming Appointments",
    consultation: "Consultation",
    siteVisit: "Site Visit",
    followUp: "Follow Up",
    clientName: "Client Name",
    clientPhone: "Phone Number",
    adminPanel: "Admin Panel",
    totalTickets: "Total Tickets",
    totalAppointments: "Total Appointments",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    liveTracking: "Live Tracking",
    aiAlerts: "AI Alerts",
    vehicles: "Vehicles",
    drivers: "Drivers",
    safetyScore: "Safety Score",
    activeVehicles: "Active Vehicles",
    totalDistance: "Total Distance",
    fuelEfficiency: "Fuel Efficiency",
    aiDetections: "AI Detections",
    speed: "Speed",
    fuel: "Fuel",
    plateNumber: "Plate Number",
    specialization: "Specialization",
    call: "Call",
    assign: "Assign"
  }
};

const defaultUsers = [
  { id: 1, email: "admin@rooya.ai", password: "admin123", name: "مدير النظام", nameEn: "System Admin", role: "admin" },
  { id: 2, email: "user@rooya.ai", password: "user123", name: "محمد أحمد", nameEn: "Mohammed Ahmed", role: "user" },
  { id: 3, email: "tech@rooya.ai", password: "tech123", name: "خالد العمري", nameEn: "Khalid Al-Omari", role: "technician" }
];

const sampleTechnicians = [
  { id: 1, name: "أحمد محمد", nameEn: "Ahmed Mohammed", status: "available", rating: 4.8, jobs: 156, spec: "تركيب كاميرات", specEn: "Camera Installation", phone: "0501234567", avatar: "AM" },
  { id: 2, name: "خالد العمري", nameEn: "Khalid Al-Omari", status: "onJob", rating: 4.6, jobs: 132, spec: "صيانة GPS", specEn: "GPS Maintenance", phone: "0507654321", avatar: "KA" },
  { id: 3, name: "سعد الحربي", nameEn: "Saad Al-Harbi", status: "available", rating: 4.9, jobs: 189, spec: "أنظمة التتبع", specEn: "Tracking Systems", phone: "0509876543", avatar: "SH" },
  { id: 4, name: "فهد السالم", nameEn: "Fahd Al-Salem", status: "offline", rating: 4.3, jobs: 98, spec: "صيانة عامة", specEn: "General Maintenance", phone: "0503456789", avatar: "FS" },
  { id: 5, name: "عمر الدوسري", nameEn: "Omar Al-Dosari", status: "onJob", rating: 4.7, jobs: 145, spec: "كاميرات AI", specEn: "AI Cameras", phone: "0502345678", avatar: "OD" }
];

const sampleOrders = [
  { id: "WO-2024-001", customer: "شركة أرامكو", customerEn: "Aramco Corp", type: "installation", priority: "high", status: "inProgress", tech: 1, date: "2025-02-17", location: "الرياض - حي العليا", locationEn: "Riyadh - Olaya District", desc: "تركيب 50 كاميرا AI للأسطول", descEn: "Install 50 AI cameras for fleet" },
  { id: "WO-2024-002", customer: "شركة سابك", customerEn: "SABIC", type: "repair", priority: "urgent", status: "pending", tech: 3, date: "2025-02-17", location: "الجبيل الصناعية", locationEn: "Jubail Industrial", desc: "إصلاح نظام التتبع", descEn: "Repair tracking system" },
  { id: "WO-2024-003", customer: "شركة الراجحي", customerEn: "Al Rajhi Company", type: "maintenance", priority: "medium", status: "completed", tech: 2, date: "2025-02-16", location: "الرياض - طريق الملك فهد", locationEn: "Riyadh - King Fahd Road", desc: "صيانة دورية للكاميرات", descEn: "Routine camera maintenance" },
  { id: "WO-2024-004", customer: "شركة المراعي", customerEn: "Almarai", type: "inspection", priority: "low", status: "pending", tech: null, date: "2025-02-18", location: "الخرج", locationEn: "Al Kharj", desc: "فحص أنظمة التليماتيكس", descEn: "Telematics system inspection" },
  { id: "WO-2024-005", customer: "أمانة الرياض", customerEn: "Riyadh Municipality", type: "installation", priority: "high", status: "inProgress", tech: 5, date: "2025-02-17", location: "الرياض - وسط المدينة", locationEn: "Riyadh - Downtown", desc: "تركيب نظام مراقبة الأسطول", descEn: "Fleet monitoring system installation" }
];

const sampleTickets = [
  { id: "TK-2024-001", subject: "عطل في كاميرا AI", subjectEn: "AI Camera Malfunction", customer: "شركة أرامكو", customerEn: "Aramco", status: "open", priority: "high", date: "2025-02-17", desc: "الكاميرا لا تسجل", descEn: "Camera not recording" },
  { id: "TK-2024-002", subject: "تحديث نظام التتبع", subjectEn: "Tracking System Update", customer: "شركة سابك", customerEn: "SABIC", status: "resolved", priority: "medium", date: "2025-02-16", desc: "طلب تحديث البرنامج", descEn: "Software update request" },
  { id: "TK-2024-003", subject: "مشكلة في GPS", subjectEn: "GPS Issue", customer: "شركة المراعي", customerEn: "Almarai", status: "open", priority: "urgent", date: "2025-02-17", desc: "إشارة GPS ضعيفة", descEn: "Weak GPS signal" },
  { id: "TK-2024-004", subject: "استفسار فني", subjectEn: "Technical Inquiry", customer: "أمانة الرياض", customerEn: "Riyadh Municipality", status: "closed", priority: "low", date: "2025-02-15", desc: "استفسار عن مواصفات الكاميرات", descEn: "Camera specifications inquiry" }
];

const sampleAppointments = [
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

function RooyaLogo({ size = "default", theme = "dark" }) {
  const sizes = { small: "text-xl", default: "text-2xl", large: "text-4xl" };
  const colors = theme === "dark" ? "text-white" : "text-gray-900";
  return <div className={`font-black tracking-tight ${sizes[size]} ${colors}`}>rooya<span className="text-cyan-400">.</span></div>;
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
  return <div className={`rounded-2xl transition-all duration-500 hover:shadow-2xl ${glowColors[glow]} ${className}`}>{children}</div>;
}

function AnimatedCounter({ value, duration = 1000 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(String(value).replace(/[^0-9]/g, '')) || 0;
    if (start === end) { setCount(end); return; }
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 50));
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 50);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <span>{count.toLocaleString()}</span>;
}

function CircularProgress({ value, size = 120, strokeWidth = 8, color = "#00D4FF" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={radius} stroke="currentColor" strokeWidth={strokeWidth} fill="none" className="text-gray-700" />
        <circle cx={size/2} cy={size/2} r={radius} stroke={color} strokeWidth={strokeWidth} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center"><span className="text-2xl font-bold text-white">{value}%</span></div>
    </div>
  );
}

function StatusBadge({ status, t, theme }) {
  const configs = {
    pending: { bg: "bg-yellow-500/20", text: "text-yellow-400", label: t.pending },
    inProgress: { bg: "bg-cyan-500/20", text: "text-cyan-400", label: t.inProgress },
    completed: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: t.completed },
    cancelled: { bg: "bg-red-500/20", text: "text-red-400", label: t.cancelled },
    open: { bg: "bg-orange-500/20", text: "text-orange-400", label: t.open },
    closed: { bg: "bg-gray-500/20", text: "text-gray-400", label: t.closed },
    resolved: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: t.resolved },
    scheduled: { bg: "bg-purple-500/20", text: "text-purple-400", label: t.scheduled },
    confirmed: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: t.confirmed },
    active: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: "Active" },
    idle: { bg: "bg-gray-500/20", text: "text-gray-400", label: "Idle" },
    alert: { bg: "bg-red-500/20", text: "text-red-400", label: "Alert" },
    available: { bg: "bg-emerald-500/20", text: "text-emerald-400", label: t.available },
    onJob: { bg: "bg-cyan-500/20", text: "text-cyan-400", label: t.onJob },
    offline: { bg: "bg-gray-500/20", text: "text-gray-400", label: t.offline }
  };
  const c = configs[status] || configs.pending;
  const isDark = theme === "dark";
  return <span className={`${isDark ? c.bg : "bg-gray-100"} ${isDark ? c.text : "text-gray-700"} px-3 py-1 rounded-full text-xs font-semibold`}>{c.label}</span>;
}

function PriorityBadge({ priority, t, theme }) {
  const configs = {
    urgent: { bg: "bg-red-500/20", text: "text-red-400", dot: "bg-red-500", label: t.urgent },
    high: { bg: "bg-orange-500/20", text: "text-orange-400", dot: "bg-orange-500", label: t.high },
    medium: { bg: "bg-yellow-500/20", text: "text-yellow-400", dot: "bg-yellow-500", label: t.medium },
    low: { bg: "bg-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-500", label: t.low }
  };
  const c = configs[priority] || configs.medium;
  const isDark = theme === "dark";
  return (
    <span className={`${isDark ? c.bg : "bg-gray-100"} ${isDark ? c.text : "text-gray-700"} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2`}>
      <span className={`w-2 h-2 rounded-full ${c.dot} ${priority === "urgent" ? "animate-pulse" : ""}`}></span>{c.label}
    </span>
  );
}

function StatCard({ icon: Icon, label, value, change, color, onClick, theme, glow = "cyan" }) {
  const isDark = theme === "dark";
  return (
    <GlowingCard glow={glow} className={`${isDark ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-200"} border backdrop-blur-sm p-5 cursor-pointer`}>
      <div onClick={onClick} className="h-full">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}><Icon size={24} className="text-white" /></div>
          {change !== undefined && (
            <span className={`text-xs font-semibold flex items-center gap-1 ${change > 0 ? "text-emerald-400" : "text-red-400"}`}>
              {change > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}{Math.abs(change)}%
            </span>
          )}
        </div>
        <p className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}><AnimatedCounter value={value} /></p>
        <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{label}</p>
      </div>
    </GlowingCard>
  );
}

function MiniBarChart({ data, color = "bg-cyan-500", theme }) {
  const max = Math.max(...data.map(d => d.v)) || 1;
  const isDark = theme === "dark";
  return (
    <div className="flex items-end gap-2 h-32">
      {data.map((d, i) => (
        <div key={i} className="flex flex-col items-center flex-1 group">
          <div className={`w-full rounded-t-lg ${color} transition-all duration-300 group-hover:opacity-80`} style={{ height: `${Math.max((d.v / max) * 100, 8)}%` }}></div>
          <span className={`text-xs mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{d.l}</span>
        </div>
      ))}
    </div>
  );
}
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
  const [orders, setOrders] = useState(sampleOrders);
  const [notifOpen, setNotifOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(defaultUsers);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirm, setRegisterConfirm] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [tickets, setTickets] = useState(sampleTickets);
  const [showNewTicket, setShowNewTicket] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [newTicketSubject, setNewTicketSubject] = useState("");
  const [newTicketDesc, setNewTicketDesc] = useState("");
  const [newTicketPriority, setNewTicketPriority] = useState("medium");
  const [appointments, setAppointments] = useState(sampleAppointments);
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newApptClient, setNewApptClient] = useState("");
  const [newApptPhone, setNewApptPhone] = useState("");
  const [newApptDate, setNewApptDate] = useState("");
  const [newApptTime, setNewApptTime] = useState("");
  const [newApptType, setNewApptType] = useState("consultation");
  const [newApptLocation, setNewApptLocation] = useState("");
  const [newCust, setNewCust] = useState("");
  const [newLoc, setNewLoc] = useState("");
  const [newType, setNewType] = useState("installation");
  const [newPrio, setNewPrio] = useState("medium");
  const [newDesc, setNewDesc] = useState("");

  const t = translations[lang];
  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";
  const isDark = theme === "dark";
  const bgClass = isDark ? "bg-gray-900" : "bg-gray-50";
  const cardBg = isDark ? "bg-gray-800/50 border-gray-700/50" : "bg-white border-gray-200";
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-500";
  const inputBg = isDark ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900";

  const handleLogin = () => {
    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);
    if (user) { setCurrentUser(user); setIsLoggedIn(true); setPage("dashboard"); setLoginError(""); setLoginEmail(""); setLoginPassword(""); }
    else setLoginError(t.loginError);
  };

  const handleRegister = () => {
    if (registerPassword !== registerConfirm) { setRegisterError(t.passwordMismatch); return; }
    const newUser = { id: users.length + 1, email: registerEmail, password: registerPassword, name: registerName, nameEn: registerName, role: "user" };
    setUsers([...users, newUser]); setCurrentUser(newUser); setIsLoggedIn(true); setPage("dashboard");
    setRegisterError(""); setRegisterName(""); setRegisterEmail(""); setRegisterPassword(""); setRegisterConfirm("");
  };

  const handleLogout = () => { setIsLoggedIn(false); setCurrentUser(null); setPage("login"); };
  const getTechName = (id) => { const tech = sampleTechnicians.find(tc => tc.id === id); return tech ? (lang === "ar" ? tech.name : tech.nameEn) : "—"; };

  const filteredOrders = orders.filter(o => {
    const custName = lang === "ar" ? o.customer : o.customerEn;
    const matchSearch = !searchQuery || o.id.toLowerCase().includes(searchQuery.toLowerCase()) || custName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = statusFilter === "all" || o.status === statusFilter;
    const matchPriority = priorityFilter === "all" || o.priority === priorityFilter;
    return matchSearch && matchStatus && matchPriority;
  });

  const handleCreateOrder = () => {
    const newO = { id: `WO-2024-${String(orders.length + 1).padStart(3, "0")}`, customer: newCust || (isRTL ? "عميل جديد" : "New Customer"), customerEn: newCust || "New Customer", type: newType, priority: newPrio, status: "pending", tech: null, date: new Date().toISOString().split("T")[0], location: newLoc, locationEn: newLoc, desc: newDesc, descEn: newDesc };
    setOrders([newO, ...orders]); setShowNewOrder(false); setNewCust(""); setNewLoc(""); setNewType("installation"); setNewPrio("medium"); setNewDesc("");
  };

  const handleCreateTicket = () => {
    const newT = { id: `TK-2024-${String(tickets.length + 1).padStart(3, "0")}`, subject: newTicketSubject, subjectEn: newTicketSubject, customer: currentUser?.name || "مستخدم", customerEn: currentUser?.nameEn || "User", status: "open", priority: newTicketPriority, date: new Date().toISOString().split("T")[0], desc: newTicketDesc, descEn: newTicketDesc };
    setTickets([newT, ...tickets]); setShowNewTicket(false); setNewTicketSubject(""); setNewTicketDesc(""); setNewTicketPriority("medium");
  };

  const handleCreateAppointment = () => {
    const newA = { id: `AP-2024-${String(appointments.length + 1).padStart(3, "0")}`, client: newApptClient, clientEn: newApptClient, phone: newApptPhone, type: newApptType, date: newApptDate, time: newApptTime, status: "scheduled", location: newApptLocation, locationEn: newApptLocation };
    setAppointments([newA, ...appointments]); setShowNewAppointment(false); setNewApptClient(""); setNewApptPhone(""); setNewApptDate(""); setNewApptTime(""); setNewApptType("consultation"); setNewApptLocation("");
  };

  const statsTotal = orders.length;
  const statsCompleted = orders.filter(o => o.status === "completed").length;
  const openTicketsCount = tickets.filter(tk => tk.status === "open").length;
  const todayAppts = appointments.filter(a => a.date === new Date().toISOString().split("T")[0]).length;
  const activeVehicles = fleetData.filter(v => v.status === "active").length;

  const weekData = [
    { l: isRTL ? "سبت" : "Sat", v: 12 }, { l: isRTL ? "أحد" : "Sun", v: 19 }, { l: isRTL ? "اثن" : "Mon", v: 15 },
    { l: isRTL ? "ثلا" : "Tue", v: 22 }, { l: isRTL ? "أرب" : "Wed", v: 18 }, { l: isRTL ? "خمي" : "Thu", v: 25 }, { l: isRTL ? "جمع" : "Fri", v: 8 }
  ];

  const navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: t.dashboard },
    { id: "fleet", icon: Car, label: t.fleet },
    { id: "workOrders", icon: ClipboardList, label: t.workOrders },
    { id: "tickets", icon: Ticket, label: t.tickets },
    { id: "appointments", icon: CalendarDays, label: t.appointments },
    { id: "technicians", icon: Users, label: t.technicians },
    { id: "analytics", icon: BarChart3, label: t.analytics },
    { id: "settings", icon: Settings, label: t.settings }
  ];
  if (currentUser?.role === "admin") navItems.push({ id: "adminPanel", icon: Shield, label: t.adminPanel });

  const notifications = [
    { id: 1, text: isRTL ? "تنبيه سرعة زائدة - مركبة V-004" : "Speeding Alert - Vehicle V-004", time: "2m", urgent: true },
    { id: 2, text: isRTL ? "اكتمل تركيب الكاميرا" : "Camera installation complete", time: "15m", urgent: false },
    { id: 3, text: isRTL ? "تذكرة جديدة تحتاج مراجعة" : "New ticket needs review", time: "30m", urgent: true }
  ];

  const renderLogin = () => (
    <div className={`min-h-screen ${isDark ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"} flex items-center justify-center p-4 relative overflow-hidden`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 ${isDark ? "bg-cyan-500/10" : "bg-cyan-200/30"} rounded-full blur-3xl`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${isDark ? "bg-blue-500/10" : "bg-blue-200/30"} rounded-full blur-3xl`}></div>
      </div>
      <div className={`${isDark ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"} backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-8 border relative z-10`}>
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className={`w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25`}>
              <Camera size={40} className="text-white" />
            </div>
          </div>
          <RooyaLogo size="large" theme={theme} />
          <p className={`${textSecondary} mt-2`}>{t.appSubtitle}</p>
        </div>
        {loginError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-4 flex items-center gap-2"><AlertCircle size={18} /><span className="text-sm">{loginError}</span></div>}
        <div className="space-y-4">
          <div><label className={`block text-sm font-medium ${textSecondary} mb-2`}>{t.email}</label><input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500`} placeholder="admin@rooya.ai" /></div>
          <div><label className={`block text-sm font-medium ${textSecondary} mb-2`}>{t.password}</label><input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500`} placeholder="••••••••" /></div>
          <button onClick={handleLogin} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"><Zap size={18} />{t.login}</button>
        </div>
        <div className="mt-6 text-center"><p className={`${textSecondary} text-sm`}>{t.noAccount} <button onClick={() => setPage("register")} className="text-cyan-400 font-semibold hover:underline">{t.register}</button></p></div>
        <div className={`mt-6 pt-6 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
          <p className={`text-xs ${textSecondary} text-center mb-2`}>{isRTL ? "بيانات تجريبية:" : "Demo:"}</p>
          <div className={`${isDark ? "bg-gray-900/50" : "bg-gray-100"} rounded-xl p-3 text-xs ${textSecondary}`}><p><span className="text-cyan-400">Admin:</span> admin@rooya.ai / admin123</p></div>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className={`text-sm ${textSecondary} hover:text-cyan-400 flex items-center gap-1`}><Globe size={14} />{lang === "ar" ? "EN" : "عربي"}</button>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`text-sm ${textSecondary} hover:text-cyan-400 flex items-center gap-1`}>{isDark ? <Sun size={14} /> : <Moon size={14} />}{isDark ? "Light" : "Dark"}</button>
        </div>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className={`min-h-screen ${isDark ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"} flex items-center justify-center p-4`}>
      <div className={`${isDark ? "bg-gray-800/80 border-gray-700" : "bg-white/80 border-gray-200"} backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-md p-8 border`}>
        <div className="text-center mb-8"><RooyaLogo size="large" theme={theme} /><p className={`${textSecondary} mt-2`}>{t.register}</p></div>
        {registerError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl mb-4"><span className="text-sm">{registerError}</span></div>}
        <div className="space-y-4">
          <div><label className={`block text-sm font-medium ${textSecondary} mb-2`}>{t.fullName}</label><input type="text" value={registerName} onChange={(e) => setRegisterName(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div>
          <div><label className={`block text-sm font-medium ${textSecondary} mb-2`}>{t.email}</label><input type="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div>
          <div><label className={`block text-sm font-medium ${textSecondary} mb-2`}>{t.password}</label><input type="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div>
          <div><label className={`block text-sm font-medium ${textSecondary} mb-2`}>{t.confirmPassword}</label><input type="password" value={registerConfirm} onChange={(e) => setRegisterConfirm(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div>
          <button onClick={handleRegister} className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold">{t.register}</button>
        </div>
        <div className="mt-6 text-center"><p className={`${textSecondary} text-sm`}>{t.haveAccount} <button onClick={() => setPage("login")} className="text-cyan-400 font-semibold hover:underline">{t.login}</button></p></div>
      </div>
    </div>
  );

  const renderSidebar = () => (
    <div className={`${isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} h-screen flex flex-col transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"} ${isRTL ? "border-l" : "border-r"}`}>
      <div className={`p-4 flex items-center gap-3 border-b ${isDark ? "border-gray-800" : "border-gray-200"}`}>
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/25"><Camera size={20} className="text-white" /></div>
        {sidebarOpen && <RooyaLogo size="small" theme={theme} />}
      </div>
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = page === item.id;
          const NavIcon = item.icon;
          return (
            <button key={item.id} onClick={() => { setPage(item.id); setShowMobileMenu(false); }} className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm transition-all ${isActive ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30" : `${isDark ? "text-gray-400 hover:bg-gray-800 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}`}>
              <NavIcon size={20} />{sidebarOpen && <span>{item.label}</span>}{isActive && sidebarOpen && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-auto animate-pulse"></div>}
            </button>
          );
        })}
      </nav>
      <div className={`p-3 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}><button onClick={() => setSidebarOpen(!sidebarOpen)} className={`w-full flex items-center justify-center px-3 py-2 rounded-xl ${isDark ? "text-gray-500 hover:bg-gray-800" : "text-gray-400 hover:bg-gray-100"}`}>{sidebarOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}</button></div>
    </div>
  );

  const renderHeader = () => (
    <header className={`${isDark ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"} backdrop-blur-xl border-b px-6 py-3 flex items-center justify-between sticky top-0 z-30`}>
      <div className="flex items-center gap-4">
        <button className="lg:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}><Menu size={24} className={textPrimary} /></button>
        <div className="relative">
          <Search size={18} className={`absolute top-1/2 ${textSecondary}`} style={{ transform: "translateY(-50%)", left: isRTL ? undefined : 12, right: isRTL ? 12 : undefined }} />
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={t.search} className={`${inputBg} border rounded-xl py-2.5 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${isRTL ? "pr-10 pl-4" : "pl-10 pr-4"}`} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`p-2.5 rounded-xl ${isDark ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"}`}>{isDark ? <Sun size={18} /> : <Moon size={18} />}</button>
        <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}><Globe size={16} />{lang === "ar" ? "EN" : "عربي"}</button>
        <div className="relative">
          <button onClick={() => setNotifOpen(!notifOpen)} className={`relative p-2.5 rounded-xl ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}><Bell size={18} /><span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold">3</span></button>
          {notifOpen && (
            <div className={`absolute top-14 w-80 ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl shadow-2xl border z-50 overflow-hidden ${isRTL ? "left-0" : "right-0"}`}>
              <div className={`p-4 border-b ${isDark ? "border-gray-700" : "border-gray-200"} font-semibold ${textPrimary}`}>{t.notifications}</div>
              {notifications.map((n) => (<div key={n.id} className={`p-4 ${isDark ? "hover:bg-gray-700/50 border-gray-700/50" : "hover:bg-gray-50 border-gray-100"} cursor-pointer flex gap-3 border-b`}><div className={`w-10 h-10 rounded-xl flex items-center justify-center ${n.urgent ? "bg-red-500/20 text-red-400" : "bg-cyan-500/20 text-cyan-400"}`}><AlertTriangle size={18} /></div><div className="flex-1"><p className={`text-sm ${textPrimary}`}>{n.text}</p><p className={`text-xs ${textSecondary} mt-1`}>{n.time}</p></div>{n.urgent && <PulsingDot color="bg-red-500" />}</div>))}
            </div>
          )}
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/25">{currentUser?.name?.charAt(0) || "U"}</div>
        <button onClick={handleLogout} className={`p-2.5 rounded-xl ${isDark ? "text-gray-400 hover:bg-red-500/20 hover:text-red-400" : "text-gray-500 hover:bg-red-50 hover:text-red-500"}`}><LogOut size={18} /></button>
      </div>
    </header>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className={`text-3xl font-bold ${textPrimary}`}>{t.welcome}{isRTL ? `، ${currentUser?.name}` : `, ${currentUser?.nameEn}`}</h1><p className={`${textSecondary} mt-1 flex items-center gap-2`}><PulsingDot color="bg-emerald-500" />{isRTL ? "جميع الأنظمة تعمل" : "All systems operational"}</p></div>
        <button onClick={() => { setPage("workOrders"); setShowNewOrder(true); }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/25"><Plus size={18} />{t.newOrder}</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Car} label={t.activeVehicles} value={activeVehicles} change={8} color="bg-gradient-to-br from-cyan-500 to-blue-600" onClick={() => setPage("fleet")} theme={theme} glow="cyan" />
        <StatCard icon={Camera} label={t.aiDetections} value={156} change={23} color="bg-gradient-to-br from-emerald-500 to-green-600" theme={theme} glow="green" />
        <StatCard icon={AlertTriangle} label={t.aiAlerts} value={12} change={-15} color="bg-gradient-to-br from-orange-500 to-red-600" theme={theme} glow="orange" />
        <StatCard icon={ShieldCheck} label={t.safetyScore} value={92} color="bg-gradient-to-br from-purple-500 to-indigo-600" theme={theme} glow="cyan" />
      </div>
      <GlowingCard className={`${cardBg} border backdrop-blur-sm p-6`} glow="cyan">
        <div className="flex items-center justify-between mb-6"><h3 className={`font-bold ${textPrimary} flex items-center gap-2`}><PulsingDot color="bg-cyan-500" />{t.liveTracking}</h3><button onClick={() => setPage("fleet")} className="text-cyan-400 text-sm hover:underline flex items-center gap-1">{t.viewAll}<ChevronRight size={16} /></button></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {fleetData.map((v) => (
            <div key={v.id} className={`${isDark ? "bg-gray-900/50 border-gray-700/50" : "bg-gray-50 border-gray-200"} border rounded-xl p-4 hover:border-cyan-500/50 transition-all cursor-pointer`}>
              <div className="flex items-center justify-between mb-3"><div className="flex items-center gap-2"><Car size={18} className={v.status === "alert" ? "text-red-400" : "text-cyan-400"} /><span className={`font-mono text-sm ${textPrimary}`}>{lang === "ar" ? v.plate : v.plateEn}</span></div><StatusBadge status={v.status} t={t} theme={theme} /></div>
              <div className="space-y-2">
                <div className="flex items-center justify-between"><span className={`text-xs ${textSecondary}`}>{t.speed}</span><span className={`text-sm font-semibold ${v.speed > 100 ? "text-red-400" : "text-emerald-400"}`}>{v.speed} km/h</span></div>
                <div className="flex items-center justify-between"><span className={`text-xs ${textSecondary}`}>{t.safetyScore}</span><div className="flex items-center gap-2"><div className={`w-16 h-1.5 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`}><div className={`h-full rounded-full ${v.safetyScore > 80 ? "bg-emerald-500" : v.safetyScore > 60 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${v.safetyScore}%` }}></div></div><span className={`text-xs ${textPrimary}`}>{v.safetyScore}%</span></div></div>
              </div>
            </div>
          ))}
        </div>
      </GlowingCard>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlowingCard className={`lg:col-span-2 ${cardBg} border backdrop-blur-sm p-6`} glow="cyan"><h3 className={`font-bold ${textPrimary} mb-6`}>{t.weeklyOverview}</h3><MiniBarChart data={weekData} color="bg-gradient-to-t from-cyan-600 to-cyan-400" theme={theme} /></GlowingCard>
        <GlowingCard className={`${cardBg} border backdrop-blur-sm p-6`} glow="green"><h3 className={`font-bold ${textPrimary} mb-6`}>{t.safetyScore}</h3><div className="flex justify-center"><CircularProgress value={92} color="#00D4FF" /></div><p className={`text-center ${textSecondary} text-sm mt-4`}>{isRTL ? "أداء ممتاز" : "Excellent performance"}</p></GlowingCard>
      </div>
    </div>
  );

  const renderFleet = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><h1 className={`text-3xl font-bold ${textPrimary}`}>{t.fleet}</h1><div className="flex items-center gap-2"><PulsingDot color="bg-emerald-500" /><span className={textSecondary}>{activeVehicles} {t.activeVehicles}</span></div></div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard icon={Car} label={t.vehicles} value={fleetData.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" theme={theme} glow="cyan" />
        <StatCard icon={Navigation} label={t.totalDistance} value="12,450" color="bg-gradient-to-br from-emerald-500 to-green-600" theme={theme} glow="green" />
        <StatCard icon={Gauge} label={t.fuelEfficiency} value="94" color="bg-gradient-to-br from-purple-500 to-indigo-600" theme={theme} glow="cyan" />
        <StatCard icon={AlertTriangle} label={t.aiAlerts} value={12} color="bg-gradient-to-br from-orange-500 to-red-500" theme={theme} glow="orange" />
      </div>
      <GlowingCard className={`${cardBg} border backdrop-blur-sm overflow-hidden`} glow="cyan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={isDark ? "bg-gray-900/50" : "bg-gray-50"}><tr className={textSecondary}><th className="text-start p-4 font-semibold">{t.plateNumber}</th><th className="text-start p-4 font-semibold">{t.drivers}</th><th className="text-start p-4 font-semibold">{t.status}</th><th className="text-start p-4 font-semibold">{t.speed}</th><th className="text-start p-4 font-semibold">{t.location}</th><th className="text-start p-4 font-semibold">{t.safetyScore}</th><th className="text-start p-4 font-semibold">{t.fuel}</th></tr></thead>
            <tbody>
              {fleetData.map((v) => (
                <tr key={v.id} className={`border-t ${isDark ? "border-gray-800 hover:bg-gray-800/50" : "border-gray-100 hover:bg-gray-50"}`}>
                  <td className={`p-4 font-mono ${textPrimary}`}>{lang === "ar" ? v.plate : v.plateEn}</td>
                  <td className={`p-4 ${textPrimary}`}>{lang === "ar" ? v.driver : v.driverEn}</td>
                  <td className="p-4"><StatusBadge status={v.status} t={t} theme={theme} /></td>
                  <td className={`p-4 font-semibold ${v.speed > 100 ? "text-red-400" : "text-emerald-400"}`}>{v.speed} km/h</td>
                  <td className={`p-4 ${textSecondary}`}>{lang === "ar" ? v.location : v.locationEn}</td>
                  <td className="p-4"><div className="flex items-center gap-2"><div className={`w-20 h-2 rounded-full ${isDark ? "bg-gray-700" : "bg-gray-200"}`}><div className={`h-full rounded-full ${v.safetyScore > 80 ? "bg-emerald-500" : "bg-yellow-500"}`} style={{ width: `${v.safetyScore}%` }}></div></div><span className={textPrimary}>{v.safetyScore}%</span></div></td>
                  <td className="p-4"><div className="flex items-center gap-2"><Battery size={16} className={v.fuel > 50 ? "text-emerald-400" : "text-yellow-400"} /><span className={textPrimary}>{v.fuel}%</span></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowingCard>
    </div>
  );

  const renderTickets = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><h1 className={`text-3xl font-bold ${textPrimary}`}>{t.tickets}</h1><button onClick={() => setShowNewTicket(true)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/25"><Plus size={18} />{t.newTicket}</button></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={Ticket} label={t.totalTickets} value={tickets.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" theme={theme} glow="cyan" />
        <StatCard icon={AlertCircle} label={t.openTickets} value={openTicketsCount} color="bg-gradient-to-br from-orange-500 to-red-500" theme={theme} glow="orange" />
        <StatCard icon={CheckCircle} label={t.closedTickets} value={tickets.filter(tk => tk.status === "closed" || tk.status === "resolved").length} color="bg-gradient-to-br from-emerald-500 to-green-600" theme={theme} glow="green" />
      </div>
      <GlowingCard className={`${cardBg} border backdrop-blur-sm overflow-hidden`} glow="cyan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={isDark ? "bg-gray-900/50" : "bg-gray-50"}><tr className={textSecondary}><th className="text-start p-4 font-semibold">{t.ticketID}</th><th className="text-start p-4 font-semibold">{t.ticketSubject}</th><th className="text-start p-4 font-semibold">{t.customer}</th><th className="text-start p-4 font-semibold">{t.priority}</th><th className="text-start p-4 font-semibold">{t.status}</th><th className="text-start p-4 font-semibold">{t.date}</th><th className="text-start p-4 font-semibold">{t.actions}</th></tr></thead>
            <tbody>
              {tickets.map((tk) => (
                <tr key={tk.id} className={`border-t ${isDark ? "border-gray-800 hover:bg-cyan-500/5" : "border-gray-100 hover:bg-cyan-50"}`}>
                  <td className="p-4 font-mono text-cyan-400">{tk.id}</td>
                  <td className={`p-4 ${textPrimary}`}>{lang === "ar" ? tk.subject : tk.subjectEn}</td>
                  <td className={`p-4 ${textPrimary}`}>{lang === "ar" ? tk.customer : tk.customerEn}</td>
                  <td className="p-4"><PriorityBadge priority={tk.priority} t={t} theme={theme} /></td>
                  <td className="p-4"><StatusBadge status={tk.status} t={t} theme={theme} /></td>
                  <td className={`p-4 ${textSecondary}`}>{tk.date}</td>
                  <td className="p-4"><button onClick={() => setSelectedTicket(tk)} className={`p-2 rounded-lg ${isDark ? "hover:bg-cyan-500/20 text-cyan-400" : "hover:bg-cyan-50 text-cyan-600"}`}><Eye size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowingCard>
      {showNewTicket && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowNewTicket(false)}>
          <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl w-full max-w-lg shadow-2xl border`} onClick={(e) => e.stopPropagation()}>
            <div className={`p-6 border-b ${isDark ? "border-gray-700" : "border-gray-200"} flex items-center justify-between`}><h2 className={`text-lg font-bold ${textPrimary}`}>{t.newTicket}</h2><button onClick={() => setShowNewTicket(false)} className={`p-2 rounded-xl ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}><X size={20} className={textPrimary} /></button></div>
            <div className="p-6 space-y-4">
              <div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.ticketSubject}</label><input value={newTicketSubject} onChange={(e) => setNewTicketSubject(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div>
              <div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.priority}</label><select value={newTicketPriority} onChange={(e) => setNewTicketPriority(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`}><option value="low">{t.low}</option><option value="medium">{t.medium}</option><option value="high">{t.high}</option><option value="urgent">{t.urgent}</option></select></div>
              <div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.ticketDescription}</label><textarea value={newTicketDesc} onChange={(e) => setNewTicketDesc(e.target.value)} rows={4} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`}></textarea></div>
              <div className="flex gap-3"><button onClick={handleCreateTicket} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold">{t.submit}</button><button onClick={() => setShowNewTicket(false)} className={`flex-1 border ${isDark ? "border-gray-700" : "border-gray-200"} py-2.5 rounded-xl font-medium ${textPrimary}`}>{t.cancel}</button></div>
            </div>
          </div>
        </div>
      )}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedTicket(null)}>
          <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl w-full max-w-lg shadow-2xl border`} onClick={(e) => e.stopPropagation()}>
            <div className={`p-6 border-b ${isDark ? "border-gray-700" : "border-gray-200"} flex items-center justify-between`}><div><h2 className={`text-lg font-bold ${textPrimary}`}>{t.details}</h2><p className="text-cyan-400 font-mono">{selectedTicket.id}</p></div><button onClick={() => setSelectedTicket(null)} className={`p-2 rounded-xl ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}><X size={20} className={textPrimary} /></button></div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4"><div><label className={`text-xs ${textSecondary}`}>{t.ticketSubject}</label><p className={`font-semibold ${textPrimary}`}>{lang === "ar" ? selectedTicket.subject : selectedTicket.subjectEn}</p></div><div><label className={`text-xs ${textSecondary}`}>{t.customer}</label><p className={`font-semibold ${textPrimary}`}>{lang === "ar" ? selectedTicket.customer : selectedTicket.customerEn}</p></div><div><label className={`text-xs ${textSecondary}`}>{t.priority}</label><div className="mt-1"><PriorityBadge priority={selectedTicket.priority} t={t} theme={theme} /></div></div><div><label className={`text-xs ${textSecondary}`}>{t.status}</label><div className="mt-1"><StatusBadge status={selectedTicket.status} t={t} theme={theme} /></div></div></div>
              <div><label className={`text-xs ${textSecondary}`}>{t.description}</label><p className={`text-sm mt-1 ${isDark ? "bg-gray-900/50" : "bg-gray-50"} p-3 rounded-xl ${textPrimary}`}>{lang === "ar" ? selectedTicket.desc : selectedTicket.descEn}</p></div>
              <button onClick={() => setSelectedTicket(null)} className={`w-full border ${isDark ? "border-gray-700" : "border-gray-200"} py-2.5 rounded-xl font-medium ${textPrimary}`}>{t.close}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><h1 className={`text-3xl font-bold ${textPrimary}`}>{t.appointments}</h1><button onClick={() => setShowNewAppointment(true)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/25"><Plus size={18} />{t.newAppointment}</button></div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={CalendarDays} label={t.totalAppointments} value={appointments.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" theme={theme} glow="cyan" />
        <StatCard icon={CalendarCheck} label={t.todayAppointments} value={todayAppts} color="bg-gradient-to-br from-emerald-500 to-green-600" theme={theme} glow="green" />
        <StatCard icon={Clock} label={t.upcomingAppointments} value={appointments.filter(a => a.date > new Date().toISOString().split("T")[0]).length} color="bg-gradient-to-br from-purple-500 to-indigo-600" theme={theme} glow="cyan" />
      </div>
      <GlowingCard className={`${cardBg} border backdrop-blur-sm overflow-hidden`} glow="cyan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={isDark ? "bg-gray-900/50" : "bg-gray-50"}><tr className={textSecondary}><th className="text-start p-4 font-semibold">ID</th><th className="text-start p-4 font-semibold">{t.clientName}</th><th className="text-start p-4 font-semibold">{t.clientPhone}</th><th className="text-start p-4 font-semibold">{t.type}</th><th className="text-start p-4 font-semibold">{t.date}</th><th className="text-start p-4 font-semibold">{t.appointmentTime}</th><th className="text-start p-4 font-semibold">{t.status}</th><th className="text-start p-4 font-semibold">{t.actions}</th></tr></thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className={`border-t ${isDark ? "border-gray-800 hover:bg-cyan-500/5" : "border-gray-100 hover:bg-cyan-50"}`}>
                  <td className="p-4 font-mono text-cyan-400">{appt.id}</td>
                  <td className={`p-4 ${textPrimary}`}>{lang === "ar" ? appt.client : appt.clientEn}</td>
                  <td className={`p-4 ${textSecondary}`}>{appt.phone}</td>
                  <td className={`p-4 ${textPrimary}`}>{t[appt.type] || appt.type}</td>
                  <td className={`p-4 ${textPrimary}`}>{appt.date}</td>
                  <td className={`p-4 ${textPrimary}`}>{appt.time}</td>
                  <td className="p-4"><StatusBadge status={appt.status} t={t} theme={theme} /></td>
                  <td className="p-4"><button onClick={() => setSelectedAppointment(appt)} className={`p-2 rounded-lg ${isDark ? "hover:bg-cyan-500/20 text-cyan-400" : "hover:bg-cyan-50 text-cyan-600"}`}><Eye size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowingCard>
      {showNewAppointment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowNewAppointment(false)}>
          <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl w-full max-w-lg shadow-2xl border`} onClick={(e) => e.stopPropagation()}>
            <div className={`p-6 border-b ${isDark ? "border-gray-700" : "border-gray-200"} flex items-center justify-between`}><h2 className={`text-lg font-bold ${textPrimary}`}>{t.newAppointment}</h2><button onClick={() => setShowNewAppointment(false)} className={`p-2 rounded-xl ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}><X size={20} className={textPrimary} /></button></div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3"><div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.clientName}</label><input value={newApptClient} onChange={(e) => setNewApptClient(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div><div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.clientPhone}</label><input value={newApptPhone} onChange={(e) => setNewApptPhone(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div></div>
              <div className="grid grid-cols-2 gap-3"><div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.appointmentDate}</label><input type="date" value={newApptDate} onChange={(e) => setNewApptDate(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div><div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.appointmentTime}</label><input type="time" value={newApptTime} onChange={(e) => setNewApptTime(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div></div>
              <div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.appointmentType}</label><select value={newApptType} onChange={(e) => setNewApptType(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`}><option value="consultation">{t.consultation}</option><option value="siteVisit">{t.siteVisit}</option><option value="followUp">{t.followUp}</option></select></div>
              <div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.location}</label><input value={newApptLocation} onChange={(e) => setNewApptLocation(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div>
              <div className="flex gap-3"><button onClick={handleCreateAppointment} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold">{t.submit}</button><button onClick={() => setShowNewAppointment(false)} className={`flex-1 border ${isDark ? "border-gray-700" : "border-gray-200"} py-2.5 rounded-xl font-medium ${textPrimary}`}>{t.cancel}</button></div>
            </div>
          </div>
        </div>
      )}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedAppointment(null)}>
          <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl w-full max-w-lg shadow-2xl border`} onClick={(e) => e.stopPropagation()}>
            <div className={`p-6 border-b ${isDark ? "border-gray-700" : "border-gray-200"} flex items-center justify-between`}><div><h2 className={`text-lg font-bold ${textPrimary}`}>{t.details}</h2><p className="text-cyan-400 font-mono">{selectedAppointment.id}</p></div><button onClick={() => setSelectedAppointment(null)} className={`p-2 rounded-xl ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}><X size={20} className={textPrimary} /></button></div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4"><div><label className={`text-xs ${textSecondary}`}>{t.clientName}</label><p className={`font-semibold ${textPrimary}`}>{lang === "ar" ? selectedAppointment.client : selectedAppointment.clientEn}</p></div><div><label className={`text-xs ${textSecondary}`}>{t.clientPhone}</label><p className={`font-semibold ${textPrimary}`}>{selectedAppointment.phone}</p></div><div><label className={`text-xs ${textSecondary}`}>{t.appointmentDate}</label><p className={`font-semibold ${textPrimary}`}>{selectedAppointment.date}</p></div><div><label className={`text-xs ${textSecondary}`}>{t.appointmentTime}</label><p className={`font-semibold ${textPrimary}`}>{selectedAppointment.time}</p></div><div><label className={`text-xs ${textSecondary}`}>{t.type}</label><p className={`font-semibold ${textPrimary}`}>{t[selectedAppointment.type]}</p></div><div><label className={`text-xs ${textSecondary}`}>{t.status}</label><div className="mt-1"><StatusBadge status={selectedAppointment.status} t={t} theme={theme} /></div></div></div>
              <div><label className={`text-xs ${textSecondary}`}>{t.location}</label><p className={`text-sm mt-1 ${isDark ? "bg-gray-900/50" : "bg-gray-50"} p-3 rounded-xl ${textPrimary}`}>{lang === "ar" ? selectedAppointment.location : selectedAppointment.locationEn}</p></div>
              <button onClick={() => setSelectedAppointment(null)} className={`w-full border ${isDark ? "border-gray-700" : "border-gray-200"} py-2.5 rounded-xl font-medium ${textPrimary}`}>{t.close}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderTechnicians = () => (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${textPrimary}`}>{t.technicians}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={Users} label={t.totalTechnicians} value={sampleTechnicians.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" theme={theme} glow="cyan" />
        <StatCard icon={CheckCircle} label={t.available} value={sampleTechnicians.filter(tc => tc.status === "available").length} color="bg-gradient-to-br from-emerald-500 to-green-600" theme={theme} glow="green" />
        <StatCard icon={Truck} label={t.onJob} value={sampleTechnicians.filter(tc => tc.status === "onJob").length} color="bg-gradient-to-br from-orange-500 to-amber-500" theme={theme} glow="orange" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {sampleTechnicians.map((tech) => (
          <GlowingCard key={tech.id} className={`${cardBg} border backdrop-blur-sm p-5`} glow="cyan">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/25">{tech.avatar}</div>
              <div className="flex-1"><h3 className={`font-bold ${textPrimary}`}>{lang === "ar" ? tech.name : tech.nameEn}</h3><p className={`text-sm ${textSecondary}`}>{lang === "ar" ? tech.spec : tech.specEn}</p></div>
              <StatusBadge status={tech.status} t={t} theme={theme} />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center pt-4 border-t border-gray-700/50">
              <div><p className={`text-xl font-bold ${textPrimary}`}>{tech.jobs}</p><p className={`text-xs ${textSecondary}`}>{t.jobsCompleted}</p></div>
              <div><p className={`text-xl font-bold text-yellow-400`}>{tech.rating}</p><p className={`text-xs ${textSecondary}`}>{t.rating}</p></div>
              <div><p className={`text-xl font-bold ${textPrimary}`}><Star size={20} className="inline text-yellow-400" /></p><p className={`text-xs ${textSecondary}`}>{t.rating}</p></div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className={`flex-1 border ${isDark ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"} py-2.5 rounded-xl text-sm font-medium ${textPrimary} flex items-center justify-center gap-2`}><Phone size={16} />{t.call}</button>
              <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"><ClipboardList size={16} />{t.assign}</button>
            </div>
          </GlowingCard>
        ))}
      </div>
    </div>
  );

  const renderWorkOrders = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><h1 className={`text-3xl font-bold ${textPrimary}`}>{t.workOrders}</h1><button onClick={() => setShowNewOrder(true)} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/25"><Plus size={18} />{t.newOrder}</button></div>
      <div className="flex items-center gap-3 flex-wrap">
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className={`${inputBg} border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500`}><option value="all">{t.allStatuses}</option><option value="pending">{t.pending}</option><option value="inProgress">{t.inProgress}</option><option value="completed">{t.completed}</option></select>
        <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className={`${inputBg} border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500`}><option value="all">{t.allPriorities}</option><option value="urgent">{t.urgent}</option><option value="high">{t.high}</option><option value="medium">{t.medium}</option><option value="low">{t.low}</option></select>
      </div>
      <GlowingCard className={`${cardBg} border backdrop-blur-sm overflow-hidden`} glow="cyan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={isDark ? "bg-gray-900/50" : "bg-gray-50"}><tr className={textSecondary}><th className="text-start p-4 font-semibold">{t.orderID}</th><th className="text-start p-4 font-semibold">{t.customer}</th><th className="text-start p-4 font-semibold">{t.type}</th><th className="text-start p-4 font-semibold">{t.priority}</th><th className="text-start p-4 font-semibold">{t.status}</th><th className="text-start p-4 font-semibold">{t.assignedTo}</th><th className="text-start p-4 font-semibold">{t.date}</th><th className="text-start p-4 font-semibold">{t.actions}</th></tr></thead>
            <tbody>
              {filteredOrders.map((o) => (
                <tr key={o.id} className={`border-t ${isDark ? "border-gray-800 hover:bg-cyan-500/5" : "border-gray-100 hover:bg-cyan-50"}`}>
                  <td className="p-4 font-mono text-cyan-400 cursor-pointer hover:underline" onClick={() => setSelectedOrder(o)}>{o.id}</td>
                  <td className={`p-4 ${textPrimary}`}>{lang === "ar" ? o.customer : o.customerEn}</td>
                  <td className={`p-4 ${textPrimary}`}>{t[o.type] || o.type}</td>
                  <td className="p-4"><PriorityBadge priority={o.priority} t={t} theme={theme} /></td>
                  <td className="p-4"><StatusBadge status={o.status} t={t} theme={theme} /></td>
                  <td className={`p-4 ${textPrimary}`}>{getTechName(o.tech)}</td>
                  <td className={`p-4 ${textSecondary}`}>{o.date}</td>
                  <td className="p-4"><button onClick={() => setSelectedOrder(o)} className={`p-2 rounded-lg ${isDark ? "hover:bg-cyan-500/20 text-cyan-400" : "hover:bg-cyan-50 text-cyan-600"}`}><Eye size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredOrders.length === 0 && <div className="text-center py-16"><ClipboardList size={48} className={`mx-auto mb-3 ${textSecondary} opacity-30`} /><p className={textSecondary}>{t.noData}</p></div>}
        </div>
      </GlowingCard>
      {selectedOrder && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedOrder(null)}>
          <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl w-full max-w-lg shadow-2xl border`} onClick={(e) => e.stopPropagation()}>
            <div className={`p-6 border-b ${isDark ? "border-gray-700" : "border-gray-200"} flex items-center justify-between`}><div><h2 className={`text-lg font-bold ${textPrimary}`}>{t.orderDetails}</h2><p className="text-cyan-400 font-mono">{selectedOrder.id}</p></div><button onClick={() => setSelectedOrder(null)} className={`p-2 rounded-xl ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}><X size={20} className={textPrimary} /></button></div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4"><div><label className={`text-xs ${textSecondary}`}>{t.customer}</label><p className={`font-semibold ${textPrimary}`}>{lang === "ar" ? selectedOrder.customer : selectedOrder.customerEn}</p></div><div><label className={`text-xs ${textSecondary}`}>{t.location}</label><p className={`font-semibold text-sm ${textPrimary}`}>{lang === "ar" ? selectedOrder.location : selectedOrder.locationEn}</p></div><div><label className={`text-xs ${textSecondary}`}>{t.priority}</label><div className="mt-1"><PriorityBadge priority={selectedOrder.priority} t={t} theme={theme} /></div></div><div><label className={`text-xs ${textSecondary}`}>{t.status}</label><div className="mt-1"><StatusBadge status={selectedOrder.status} t={t} theme={theme} /></div></div></div>
              <div><label className={`text-xs ${textSecondary}`}>{t.description}</label><p className={`text-sm mt-1 ${isDark ? "bg-gray-900/50" : "bg-gray-50"} p-3 rounded-xl ${textPrimary}`}>{lang === "ar" ? selectedOrder.desc : selectedOrder.descEn}</p></div>
              <button onClick={() => setSelectedOrder(null)} className={`w-full border ${isDark ? "border-gray-700" : "border-gray-200"} py-2.5 rounded-xl font-medium ${textPrimary}`}>{t.close}</button>
            </div>
          </div>
        </div>
      )}
      {showNewOrder && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowNewOrder(false)}>
          <div className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} rounded-2xl w-full max-w-lg shadow-2xl border`} onClick={(e) => e.stopPropagation()}>
            <div className={`p-6 border-b ${isDark ? "border-gray-700" : "border-gray-200"} flex items-center justify-between`}><h2 className={`text-lg font-bold ${textPrimary}`}>{t.createWorkOrder}</h2><button onClick={() => setShowNewOrder(false)} className={`p-2 rounded-xl ${isDark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}><X size={20} className={textPrimary} /></button></div>
            <div className="p-6 space-y-4">
              <div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.customer}</label><input value={newCust} onChange={(e) => setNewCust(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div>
              <div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.location}</label><input value={newLoc} onChange={(e) => setNewLoc(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`} /></div>
              <div className="grid grid-cols-2 gap-3"><div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.type}</label><select value={newType} onChange={(e) => setNewType(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`}><option value="installation">{t.installation}</option><option value="maintenance">{t.maintenance}</option><option value="repair">{t.repair}</option><option value="inspection">{t.inspection}</option></select></div><div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.priority}</label><select value={newPrio} onChange={(e) => setNewPrio(e.target.value)} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`}><option value="low">{t.low}</option><option value="medium">{t.medium}</option><option value="high">{t.high}</option><option value="urgent">{t.urgent}</option></select></div></div>
              <div><label className={`text-sm font-medium ${textSecondary} block mb-2`}>{t.description}</label><textarea value={newDesc} onChange={(e) => setNewDesc(e.target.value)} rows={3} className={`w-full ${inputBg} border rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500`}></textarea></div>
              <div className="flex gap-3"><button onClick={handleCreateOrder} className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2.5 rounded-xl font-semibold">{t.submit}</button><button onClick={() => setShowNewOrder(false)} className={`flex-1 border ${isDark ? "border-gray-700" : "border-gray-200"} py-2.5 rounded-xl font-medium ${textPrimary}`}>{t.cancel}</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${textPrimary}`}>{t.analytics}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard icon={ClipboardList} label={t.totalOrders} value={statsTotal} change={12} color="bg-gradient-to-br from-cyan-500 to-blue-600" theme={theme} glow="cyan" />
        <StatCard icon={CheckCircle} label={t.completed} value={statsCompleted} change={8} color="bg-gradient-to-br from-emerald-500 to-green-600" theme={theme} glow="green" />
        <StatCard icon={Ticket} label={t.openTickets} value={openTicketsCount} change={-5} color="bg-gradient-to-br from-orange-500 to-red-500" theme={theme} glow="orange" />
        <StatCard icon={Users} label={t.technicians} value={sampleTechnicians.length} color="bg-gradient-to-br from-purple-500 to-indigo-600" theme={theme} glow="cyan" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlowingCard className={`${cardBg} border backdrop-blur-sm p-6`} glow="cyan"><h3 className={`font-bold ${textPrimary} mb-6`}>{t.weeklyOverview}</h3><MiniBarChart data={weekData} color="bg-gradient-to-t from-cyan-600 to-cyan-400" theme={theme} /></GlowingCard>
        <GlowingCard className={`${cardBg} border backdrop-blur-sm p-6`} glow="green"><h3 className={`font-bold ${textPrimary} mb-6`}>{t.customerSatisfaction}</h3><div className="flex justify-center"><CircularProgress value={94} color="#10B981" /></div><p className={`text-center ${textSecondary} text-sm mt-4`}>{isRTL ? "ممتاز" : "Excellent"}</p></GlowingCard>
      </div>
      <GlowingCard className={`${cardBg} border backdrop-blur-sm p-6`} glow="cyan">
        <h3 className={`font-bold ${textPrimary} mb-4`}>{t.topTechnicians}</h3>
        <div className="space-y-3">
          {sampleTechnicians.sort((a, b) => b.rating - a.rating).slice(0, 3).map((tech, i) => (
            <div key={tech.id} className={`flex items-center gap-4 p-3 ${isDark ? "bg-gray-900/50" : "bg-gray-50"} rounded-xl`}>
              <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${i === 0 ? "bg-yellow-500" : i === 1 ? "bg-gray-400" : "bg-amber-600"}`}>{i + 1}</span>
              <div className="flex-1"><p className={`font-medium ${textPrimary}`}>{lang === "ar" ? tech.name : tech.nameEn}</p><p className={`text-xs ${textSecondary}`}>{tech.jobs} {t.jobsCompleted}</p></div>
              <div className="flex items-center gap-1"><Star size={16} className="text-yellow-400" /><span className={`font-semibold ${textPrimary}`}>{tech.rating}</span></div>
            </div>
          ))}
        </div>
      </GlowingCard>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${textPrimary}`}>{t.settings}</h1>
      <GlowingCard className={`${cardBg} border backdrop-blur-sm p-6 space-y-6`} glow="cyan">
        <div className={`flex items-center justify-between py-4 border-b ${isDark ? "border-gray-700" : "border-gray-200"}`}>
          <div className="flex items-center gap-3"><Globe size={20} className={textSecondary} /><div><p className={`font-medium ${textPrimary}`}>{t.language}</p><p className={`text-sm ${textSecondary}`}>{lang === "ar" ? "العربية" : "English"}</p></div></div>
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className={`px-4 py-2 border ${isDark ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"} rounded-xl text-sm ${textPrimary}`}>{lang === "ar" ? "English" : "العربية"}</button>
        </div>
        <div className={`flex items-center justify-between py-4 border-b ${isDark ? "border-gray-700" : "border-gray-200"}`}>
          <div className="flex items-center gap-3">{isDark ? <Moon size={20} className={textSecondary} /> : <Sun size={20} className={textSecondary} />}<div><p className={`font-medium ${textPrimary}`}>{isDark ? t.darkMode : t.lightMode}</p><p className={`text-sm ${textSecondary}`}>{isDark ? (isRTL ? "مفعّل" : "Enabled") : (isRTL ? "معطّل" : "Disabled")}</p></div></div>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className={`px-4 py-2 border ${isDark ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"} rounded-xl text-sm ${textPrimary}`}>{isDark ? t.lightMode : t.darkMode}</button>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3"><User size={20} className={textSecondary} /><div><p className={`font-medium ${textPrimary}`}>{t.profile}</p><p className={`text-sm ${textSecondary}`}>{lang === "ar" ? currentUser?.name : currentUser?.nameEn}</p></div></div>
          <button className={`px-4 py-2 border ${isDark ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"} rounded-xl text-sm ${textPrimary}`}>{t.edit}</button>
        </div>
      </GlowingCard>
      <GlowingCard className={`${cardBg} border backdrop-blur-sm p-6`} glow="green">
        <h3 className={`font-bold ${textPrimary} mb-4`}>{t.systemHealth}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center"><p className="text-2xl font-bold text-emerald-400">99.9%</p><p className="text-sm text-emerald-400/70">{t.uptime}</p></div>
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center"><p className="text-2xl font-bold text-cyan-400">24</p><p className="text-sm text-cyan-400/70">{t.activeUsers}</p></div>
        </div>
      </GlowingCard>
    </div>
  );

  const renderAdminPanel = () => (
    <div className="space-y-6">
      <h1 className={`text-3xl font-bold ${textPrimary}`}>{t.adminPanel}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard icon={Users} label={t.users} value={users.length} color="bg-gradient-to-br from-cyan-500 to-blue-600" theme={theme} glow="cyan" />
        <StatCard icon={ClipboardList} label={t.totalOrders} value={orders.length} color="bg-gradient-to-br from-emerald-500 to-green-600" theme={theme} glow="green" />
        <StatCard icon={Ticket} label={t.totalTickets} value={tickets.length} color="bg-gradient-to-br from-orange-500 to-red-500" theme={theme} glow="orange" />
        <StatCard icon={CalendarDays} label={t.totalAppointments} value={appointments.length} color="bg-gradient-to-br from-purple-500 to-indigo-600" theme={theme} glow="cyan" />
      </div>
      <GlowingCard className={`${cardBg} border backdrop-blur-sm p-6`} glow="cyan">
        <h3 className={`font-bold ${textPrimary} mb-4`}>{t.manageUsers}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className={isDark ? "bg-gray-900/50" : "bg-gray-50"}><tr className={textSecondary}><th className="text-start p-3 font-semibold">ID</th><th className="text-start p-3 font-semibold">{t.fullName}</th><th className="text-start p-3 font-semibold">{t.email}</th><th className="text-start p-3 font-semibold">{t.role}</th><th className="text-start p-3 font-semibold">{t.actions}</th></tr></thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className={`border-t ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                  <td className={`p-3 ${textPrimary}`}>{u.id}</td>
                  <td className={`p-3 ${textPrimary}`}>{lang === "ar" ? u.name : u.nameEn}</td>
                  <td className={`p-3 ${textSecondary}`}>{u.email}</td>
                  <td className="p-3"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${u.role === "admin" ? "bg-red-500/20 text-red-400" : u.role === "technician" ? "bg-cyan-500/20 text-cyan-400" : "bg-gray-500/20 text-gray-400"}`}>{t[u.role] || u.role}</span></td>
                  <td className="p-3"><button className={`p-1.5 rounded-lg ${isDark ? "hover:bg-gray-700 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}><Edit size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlowingCard>
    </div>
  );

  const renderPage = () => {
    switch(page) {
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

  if (!isLoggedIn) { if (page === "register") return renderRegister(); return renderLogin(); }

  return (
    <div dir={dir} className={`flex h-screen ${bgClass} overflow-hidden transition-colors duration-300`}>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } } .animate-fadeIn { animation: fadeIn 0.5s ease-out; }`}</style>
      <div className="hidden lg:block">{renderSidebar()}</div>
      {showMobileMenu && (<div className="fixed inset-0 z-40 lg:hidden"><div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowMobileMenu(false)}></div><div className="relative z-50">{renderSidebar()}</div></div>)}
      <div className="flex-1 flex flex-col overflow-hidden">{renderHeader()}<main className="flex-1 overflow-y-auto p-6">{renderPage()}</main></div>
    </div>
  );
}
