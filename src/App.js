import { useState } from "react";
import {
  LayoutDashboard, ClipboardList, Users, MapPin, BarChart3, Settings, Bell, Search,
  Plus, Filter, ChevronDown, ChevronRight, Calendar, Clock, AlertTriangle, CheckCircle,
  XCircle, Wrench, Truck, Phone, Mail, Star, TrendingUp, TrendingDown, Activity,
  Eye, Edit, Trash2, Download, Upload, RefreshCw, Menu, X, Globe, Moon, Sun,
  ArrowRight, ArrowLeft, ChevronLeft, Home, User, LogOut, HelpCircle, FileText,
  Zap, Target, Award, Briefcase, Shield, Layers, PieChart, Map, Lock, UserPlus,
  Ticket, CalendarDays, CalendarCheck, UserCog, Key, AlertCircle
} from "lucide-react";

const translations = {
  ar: {
    appName: "نظام إدارة الخدمات الميدانية",
    dashboard: "لوحة التحكم",
    workOrders: "أوامر العمل",
    technicians: "الفنيين",
    customers: "العملاء",
    tickets: "التذاكر",
    appointments: "المواعيد",
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
    filterBy: "تصفية حسب",
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
    specialization: "التخصص",
    recentActivity: "النشاط الأخير",
    performance: "الأداء",
    weeklyOverview: "نظرة أسبوعية",
    monthlyTrend: "الاتجاه الشهري",
    topTechnicians: "أفضل الفنيين",
    customerSatisfaction: "رضا العملاء",
    language: "اللغة",
    theme: "المظهر",
    profile: "الملف الشخصي",
    logout: "تسجيل الخروج",
    help: "المساعدة",
    viewAll: "عرض الكل",
    details: "التفاصيل",
    edit: "تعديل",
    delete: "حذف",
    save: "حفظ",
    cancel: "إلغاء",
    confirm: "تأكيد",
    close: "إغلاق",
    welcome: "مرحباً بك",
    todaySchedule: "جدول اليوم",
    quickActions: "إجراءات سريعة",
    systemHealth: "صحة النظام",
    uptime: "وقت التشغيل",
    activeUsers: "المستخدمون النشطون",
    installation: "تركيب",
    maintenance: "صيانة",
    repair: "إصلاح",
    inspection: "فحص",
    minutes: "دقائق",
    hours: "ساعات",
    noData: "لا توجد بيانات",
    orderDetails: "تفاصيل أمر العمل",
    description: "الوصف",
    location: "الموقع",
    scheduledDate: "التاريخ المجدول",
    estimatedDuration: "المدة المتوقعة",
    notes: "ملاحظات",
    addNote: "إضافة ملاحظة",
    timeline: "الجدول الزمني",
    created: "تم الإنشاء",
    assigned: "تم التعيين",
    started: "بدأ العمل",
    title: "العنوان",
    selectTechnician: "اختر فني",
    selectPriority: "اختر الأولوية",
    selectType: "اختر النوع",
    submit: "إرسال",
    createWorkOrder: "إنشاء أمر عمل",
    totalTechnicians: "إجمالي الفنيين",
    onDuty: "في الخدمة",
    offDuty: "خارج الخدمة",
    completionRate: "معدل الإنجاز",
    efficiency: "الكفاءة",
    schedule: "الجدول",
    map: "الخريطة",
    login: "تسجيل الدخول",
    register: "إنشاء حساب",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    fullName: "الاسم الكامل",
    rememberMe: "تذكرني",
    forgotPassword: "نسيت كلمة المرور؟",
    noAccount: "ليس لديك حساب؟",
    haveAccount: "لديك حساب بالفعل؟",
    loginError: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
    registerSuccess: "تم إنشاء الحساب بنجاح",
    passwordMismatch: "كلمات المرور غير متطابقة",
    admin: "مدير النظام",
    user: "مستخدم",
    technician: "فني",
    role: "الدور",
    users: "المستخدمين",
    manageUsers: "إدارة المستخدمين",
    addUser: "إضافة مستخدم",
    ticketID: "رقم التذكرة",
    newTicket: "تذكرة جديدة",
    openTickets: "التذاكر المفتوحة",
    closedTickets: "التذاكر المغلقة",
    ticketSubject: "موضوع التذكرة",
    ticketDescription: "وصف المشكلة",
    ticketStatus: "حالة التذكرة",
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
    pastAppointments: "المواعيد السابقة",
    consultation: "استشارة",
    siteVisit: "زيارة موقع",
    followUp: "متابعة",
    clientName: "اسم العميل",
    clientPhone: "رقم الهاتف",
    adminPanel: "لوحة الإدارة",
    systemSettings: "إعدادات النظام",
    totalTickets: "إجمالي التذاكر",
    totalAppointments: "إجمالي المواعيد"
  },
  en: {
    appName: "Field Service Management",
    dashboard: "Dashboard",
    workOrders: "Work Orders",
    technicians: "Technicians",
    customers: "Customers",
    tickets: "Tickets",
    appointments: "Appointments",
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
    filterBy: "Filter by",
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
    specialization: "Specialization",
    recentActivity: "Recent Activity",
    performance: "Performance",
    weeklyOverview: "Weekly Overview",
    monthlyTrend: "Monthly Trend",
    topTechnicians: "Top Technicians",
    customerSatisfaction: "Customer Satisfaction",
    language: "Language",
    theme: "Theme",
    profile: "Profile",
    logout: "Logout",
    help: "Help",
    viewAll: "View All",
    details: "Details",
    edit: "Edit",
    delete: "Delete",
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    close: "Close",
    welcome: "Welcome",
    todaySchedule: "Today's Schedule",
    quickActions: "Quick Actions",
    systemHealth: "System Health",
    uptime: "Uptime",
    activeUsers: "Active Users",
    installation: "Installation",
    maintenance: "Maintenance",
    repair: "Repair",
    inspection: "Inspection",
    minutes: "minutes",
    hours: "hours",
    noData: "No data available",
    orderDetails: "Work Order Details",
    description: "Description",
    location: "Location",
    scheduledDate: "Scheduled Date",
    estimatedDuration: "Estimated Duration",
    notes: "Notes",
    addNote: "Add Note",
    timeline: "Timeline",
    created: "Created",
    assigned: "Assigned",
    started: "Started",
    title: "Title",
    selectTechnician: "Select Technician",
    selectPriority: "Select Priority",
    selectType: "Select Type",
    submit: "Submit",
    createWorkOrder: "Create Work Order",
    totalTechnicians: "Total Technicians",
    onDuty: "On Duty",
    offDuty: "Off Duty",
    completionRate: "Completion Rate",
    efficiency: "Efficiency",
    schedule: "Schedule",
    map: "Map",
    login: "Login",
    register: "Register",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    fullName: "Full Name",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    noAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    loginError: "Invalid email or password",
    registerSuccess: "Account created successfully",
    passwordMismatch: "Passwords do not match",
    admin: "Admin",
    user: "User",
    technician: "Technician",
    role: "Role",
    users: "Users",
    manageUsers: "Manage Users",
    addUser: "Add User",
    ticketID: "Ticket ID",
    newTicket: "New Ticket",
    openTickets: "Open Tickets",
    closedTickets: "Closed Tickets",
    ticketSubject: "Ticket Subject",
    ticketDescription: "Problem Description",
    ticketStatus: "Ticket Status",
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
    pastAppointments: "Past Appointments",
    consultation: "Consultation",
    siteVisit: "Site Visit",
    followUp: "Follow Up",
    clientName: "Client Name",
    clientPhone: "Phone Number",
    adminPanel: "Admin Panel",
    systemSettings: "System Settings",
    totalTickets: "Total Tickets",
    totalAppointments: "Total Appointments"
  }
};

const defaultUsers = [
  { id: 1, email: "admin@fsm.com", password: "admin123", name: "مدير النظام", nameEn: "System Admin", role: "admin" },
  { id: 2, email: "user@fsm.com", password: "user123", name: "محمد أحمد", nameEn: "Mohammed Ahmed", role: "user" },
  { id: 3, email: "tech@fsm.com", password: "tech123", name: "خالد العمري", nameEn: "Khalid Al-Omari", role: "technician" }
];

const sampleTechnicians = [
  { id: 1, name: "أحمد محمد", nameEn: "Ahmed Mohammed", status: "available", rating: 4.8, jobs: 156, spec: "تكييف", specEn: "HVAC", phone: "0501234567", avatar: "AM" },
  { id: 2, name: "خالد العمري", nameEn: "Khalid Al-Omari", status: "onJob", rating: 4.6, jobs: 132, spec: "كهرباء", specEn: "Electrical", phone: "0507654321", avatar: "KA" },
  { id: 3, name: "سعد الحربي", nameEn: "Saad Al-Harbi", status: "available", rating: 4.9, jobs: 189, spec: "سباكة", specEn: "Plumbing", phone: "0509876543", avatar: "SH" },
  { id: 4, name: "فهد السالم", nameEn: "Fahd Al-Salem", status: "offline", rating: 4.3, jobs: 98, spec: "صيانة عامة", specEn: "General", phone: "0503456789", avatar: "FS" },
  { id: 5, name: "عمر الدوسري", nameEn: "Omar Al-Dosari", status: "onJob", rating: 4.7, jobs: 145, spec: "تكييف", specEn: "HVAC", phone: "0502345678", avatar: "OD" }
];

const sampleOrders = [
  { id: "WO-2024-001", customer: "شركة الراجحي", customerEn: "Al Rajhi Corp", type: "maintenance", priority: "high", status: "inProgress", tech: 1, date: "2025-02-16", location: "الرياض - حي العليا", locationEn: "Riyadh - Olaya District", desc: "صيانة نظام التكييف المركزي", descEn: "Central AC system maintenance" },
  { id: "WO-2024-002", customer: "مستشفى المملكة", customerEn: "Kingdom Hospital", type: "repair", priority: "urgent", status: "pending", tech: 3, date: "2025-02-16", location: "الرياض - طريق الملك فهد", locationEn: "Riyadh - King Fahd Road", desc: "عطل في نظام التبريد", descEn: "Cooling system failure" },
  { id: "WO-2024-003", customer: "فندق الفيصلية", customerEn: "Al Faisaliah Hotel", type: "installation", priority: "medium", status: "completed", tech: 2, date: "2025-02-15", location: "الرياض - حي الفيصلية", locationEn: "Riyadh - Faisaliah District", desc: "تركيب وحدات تكييف جديدة", descEn: "New AC unit installation" },
  { id: "WO-2024-004", customer: "مجمع العثيم", customerEn: "Othaim Mall", type: "inspection", priority: "low", status: "pending", tech: null, date: "2025-02-17", location: "الرياض - طريق خريص", locationEn: "Riyadh - Khurais Road", desc: "فحص دوري لأنظمة التكييف", descEn: "Routine HVAC inspection" },
  { id: "WO-2024-005", customer: "برج المملكة", customerEn: "Kingdom Tower", type: "repair", priority: "high", status: "inProgress", tech: 5, date: "2025-02-16", location: "الرياض - طريق الملك فهد", locationEn: "Riyadh - King Fahd Road", desc: "إصلاح تسريب في نظام التبريد", descEn: "Cooling system leak repair" }
];

const sampleTickets = [
  { id: "TK-2024-001", subject: "مشكلة في التكييف", subjectEn: "AC Problem", customer: "أحمد سعيد", customerEn: "Ahmed Saeed", status: "open", priority: "high", date: "2025-02-16", desc: "التكييف لا يعمل بشكل صحيح", descEn: "AC not working properly" },
  { id: "TK-2024-002", subject: "طلب صيانة دورية", subjectEn: "Routine Maintenance Request", customer: "شركة النور", customerEn: "Al Noor Company", status: "resolved", priority: "medium", date: "2025-02-15", desc: "نحتاج صيانة دورية للمكيفات", descEn: "Need routine AC maintenance" },
  { id: "TK-2024-003", subject: "تسريب مياه", subjectEn: "Water Leak", customer: "فاطمة محمد", customerEn: "Fatima Mohammed", status: "open", priority: "urgent", date: "2025-02-16", desc: "يوجد تسريب مياه من المكيف", descEn: "Water leaking from AC unit" },
  { id: "TK-2024-004", subject: "استفسار عن الأسعار", subjectEn: "Price Inquiry", customer: "مؤسسة الأمل", customerEn: "Al Amal Est.", status: "closed", priority: "low", date: "2025-02-14", desc: "نريد معرفة أسعار الصيانة السنوية", descEn: "Want to know annual maintenance prices" }
];

const sampleAppointments = [
  { id: "AP-2024-001", client: "محمد العتيبي", clientEn: "Mohammed Al-Otaibi", phone: "0551234567", type: "consultation", date: "2025-02-17", time: "09:00", status: "confirmed", location: "الرياض - حي النخيل", locationEn: "Riyadh - Nakheel District" },
  { id: "AP-2024-002", client: "سارة أحمد", clientEn: "Sara Ahmed", phone: "0559876543", type: "siteVisit", date: "2025-02-17", time: "11:30", status: "scheduled", location: "الرياض - حي الملقا", locationEn: "Riyadh - Malqa District" },
  { id: "AP-2024-003", client: "شركة التقنية", clientEn: "Tech Company", phone: "0112345678", type: "followUp", date: "2025-02-17", time: "14:00", status: "confirmed", location: "الرياض - حي الصحافة", locationEn: "Riyadh - Sahafa District" },
  { id: "AP-2024-004", client: "عبدالله الشمري", clientEn: "Abdullah Al-Shammari", phone: "0554567890", type: "consultation", date: "2025-02-18", time: "10:00", status: "scheduled", location: "الرياض - حي الياسمين", locationEn: "Riyadh - Yasmin District" }
];

function StatusBadge({ status, t }) {
  const config = {
    pending: { bg: "bg-yellow-100", text: "text-yellow-800", label: t.pending },
    inProgress: { bg: "bg-blue-100", text: "text-blue-800", label: t.inProgress },
    completed: { bg: "bg-green-100", text: "text-green-800", label: t.completed },
    cancelled: { bg: "bg-red-100", text: "text-red-800", label: t.cancelled },
    open: { bg: "bg-orange-100", text: "text-orange-800", label: t.open },
    closed: { bg: "bg-gray-100", text: "text-gray-800", label: t.closed },
    resolved: { bg: "bg-green-100", text: "text-green-800", label: t.resolved },
    scheduled: { bg: "bg-purple-100", text: "text-purple-800", label: t.scheduled },
    confirmed: { bg: "bg-green-100", text: "text-green-800", label: t.confirmed }
  };
  const c = config[status] || { bg: "bg-gray-100", text: "text-gray-800", label: status };
  return <span className={`${c.bg} ${c.text} px-2 py-1 rounded-full text-xs font-medium`}>{c.label}</span>;
}

function PriorityBadge({ priority, t }) {
  const config = {
    urgent: { bg: "bg-red-100", text: "text-red-800", label: t.urgent, dot: "bg-red-500" },
    high: { bg: "bg-orange-100", text: "text-orange-800", label: t.high, dot: "bg-orange-500" },
    medium: { bg: "bg-yellow-100", text: "text-yellow-800", label: t.medium, dot: "bg-yellow-500" },
    low: { bg: "bg-green-100", text: "text-green-800", label: t.low, dot: "bg-green-500" }
  };
  const c = config[priority] || { bg: "bg-gray-100", text: "text-gray-800", label: priority, dot: "bg-gray-500" };
  return (
    <span className={`${c.bg} ${c.text} px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
      <span className={`w-2 h-2 rounded-full ${c.dot}`}></span>{c.label}
    </span>
  );
}

function StatCard({ icon: Icon, label, value, change, color, onClick }) {
  return (
    <div onClick={onClick} className={`bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all ${onClick ? "cursor-pointer hover:border-blue-200" : ""}`}>
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          <Icon size={20} className="text-white" />
        </div>
        {change !== undefined && change !== null && (
          <span className={`text-xs font-medium flex items-center gap-1 ${change > 0 ? "text-green-600" : "text-red-600"}`}>
            {change > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(change)}%
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function MiniBarChart({ data, color = "bg-blue-500" }) {
  const max = Math.max(...data.map(d => d.v)) || 1;
  return (
    <div className="flex items-end gap-1 h-24">
      {data.map((d, i) => (
        <div key={i} className="flex flex-col items-center flex-1">
          <div className={`w-full rounded-t ${color}`} style={{ height: `${Math.max((d.v / max) * 100, 5)}%` }}></div>
          <span className="text-xs text-gray-400 mt-1">{d.l}</span>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("ar");
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
  const [newType, setNewType] = useState("maintenance");
  const [newPrio, setNewPrio] = useState("medium");
  const [newDesc, setNewDesc] = useState("");

  const t = translations[lang];
  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  const handleLogin = () => {
    const user = users.find(u => u.email === loginEmail && u.password === loginPassword);
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      setPage("dashboard");
      setLoginError("");
      setLoginEmail("");
      setLoginPassword("");
    } else {
      setLoginError(t.loginError);
    }
  };

  const handleRegister = () => {
    if (registerPassword !== registerConfirm) {
      setRegisterError(t.passwordMismatch);
      return;
    }
    const newUser = {
      id: users.length + 1,
      email: registerEmail,
      password: registerPassword,
      name: registerName,
      nameEn: registerName,
      role: "user"
    };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    setIsLoggedIn(true);
    setPage("dashboard");
    setRegisterError("");
    setRegisterName("");
    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterConfirm("");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setPage("login");
  };

  const getTechName = (id) => {
    const tech = sampleTechnicians.find(tc => tc.id === id);
    if (!tech) return "—";
    return lang === "ar" ? tech.name : tech.nameEn;
  };

  const filteredOrders = orders.filter(o => {
    const custName = lang === "ar" ? o.customer : o.customerEn;
    const matchSearch = searchQuery === "" || o.id.toLowerCase().includes(searchQuery.toLowerCase()) || custName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = statusFilter === "all" || o.status === statusFilter;
    const matchPriority = priorityFilter === "all" || o.priority === priorityFilter;
    return matchSearch && matchStatus && matchPriority;
  });

  const handleCreateOrder = () => {
    const newO = {
      id: `WO-2024-${String(orders.length + 1).padStart(3, "0")}`,
      customer: newCust || (isRTL ? "عميل جديد" : "New Customer"),
      customerEn: newCust || "New Customer",
      type: newType,
      priority: newPrio,
      status: "pending",
      tech: null,
      date: new Date().toISOString().split("T")[0],
      location: newLoc,
      locationEn: newLoc,
      desc: newDesc,
      descEn: newDesc
    };
    setOrders([newO, ...orders]);
    setShowNewOrder(false);
    setNewCust(""); setNewLoc(""); setNewType("maintenance"); setNewPrio("medium"); setNewDesc("");
  };

  const handleCreateTicket = () => {
    const newT = {
      id: `TK-2024-${String(tickets.length + 1).padStart(3, "0")}`,
      subject: newTicketSubject,
      subjectEn: newTicketSubject,
      customer: currentUser?.name || "مستخدم",
      customerEn: currentUser?.nameEn || "User",
      status: "open",
      priority: newTicketPriority,
      date: new Date().toISOString().split("T")[0],
      desc: newTicketDesc,
      descEn: newTicketDesc
    };
    setTickets([newT, ...tickets]);
    setShowNewTicket(false);
    setNewTicketSubject(""); setNewTicketDesc(""); setNewTicketPriority("medium");
  };

  const handleCreateAppointment = () => {
    const newA = {
      id: `AP-2024-${String(appointments.length + 1).padStart(3, "0")}`,
      client: newApptClient,
      clientEn: newApptClient,
      phone: newApptPhone,
      type: newApptType,
      date: newApptDate,
      time: newApptTime,
      status: "scheduled",
      location: newApptLocation,
      locationEn: newApptLocation
    };
    setAppointments([newA, ...appointments]);
    setShowNewAppointment(false);
    setNewApptClient(""); setNewApptPhone(""); setNewApptDate(""); setNewApptTime(""); setNewApptType("consultation"); setNewApptLocation("");
  };

  const statsTotal = orders.length;
  const statsActive = orders.filter(o => o.status === "inProgress").length;
  const statsCompleted = orders.filter(o => o.status === "completed").length;
  const openTicketsCount = tickets.filter(tk => tk.status === "open").length;
  const todayAppts = appointments.filter(a => a.date === new Date().toISOString().split("T")[0]).length;

  const weekData = [
    { l: isRTL ? "سبت" : "Sat", v: 12 },
    { l: isRTL ? "أحد" : "Sun", v: 19 },
    { l: isRTL ? "اثن" : "Mon", v: 15 },
    { l: isRTL ? "ثلا" : "Tue", v: 22 },
    { l: isRTL ? "أرب" : "Wed", v: 18 },
    { l: isRTL ? "خمي" : "Thu", v: 25 },
    { l: isRTL ? "جمع" : "Fri", v: 8 }
  ];

  const navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: t.dashboard },
    { id: "workOrders", icon: ClipboardList, label: t.workOrders },
    { id: "tickets", icon: Ticket, label: t.tickets },
    { id: "appointments", icon: CalendarDays, label: t.appointments },
    { id: "technicians", icon: Users, label: t.technicians },
    { id: "customers", icon: Briefcase, label: t.customers },
    { id: "reports", icon: BarChart3, label: t.reports },
    { id: "settings", icon: Settings, label: t.settings }
  ];

  if (currentUser?.role === "admin") {
    navItems.push({ id: "adminPanel", icon: Shield, label: t.adminPanel });
  }

  const notifications = [
    { id: 1, text: isRTL ? "تذكرة جديدة تحتاج للمراجعة" : "New ticket needs review", time: "2m", urgent: true },
    { id: 2, text: isRTL ? "موعد جديد تم تأكيده" : "New appointment confirmed", time: "10m", urgent: false },
    { id: 3, text: isRTL ? "أمر عمل عاجل بحاجة للتعيين" : "Urgent work order needs assignment", time: "25m", urgent: true }
  ];

  const renderLogin = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Wrench size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{t.appName}</h1>
          <p className="text-gray-500 mt-2">{t.login}</p>
        </div>
        
        {loginError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
            <AlertCircle size={18} />
            <span className="text-sm">{loginError}</span>
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="admin@fsm.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.password}</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {t.login}
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            {t.noAccount}{" "}
            <button onClick={() => setPage("register")} className="text-blue-600 font-medium hover:underline">
              {t.register}
            </button>
          </p>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center mb-2">{isRTL ? "بيانات الدخول التجريبية:" : "Demo Credentials:"}</p>
          <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-600 space-y-1">
            <p><strong>{t.admin}:</strong> admin@fsm.com / admin123</p>
            <p><strong>{t.user}:</strong> user@fsm.com / user123</p>
            <p><strong>{t.technician}:</strong> tech@fsm.com / tech123</p>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="text-sm text-gray-500 hover:text-gray-700">
            {lang === "ar" ? "English" : "العربية"}
          </button>
        </div>
      </div>
    </div>
  );

  const renderRegister = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <UserPlus size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{t.register}</h1>
        </div>
        
        {registerError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
            <AlertCircle size={18} />
            <span className="text-sm">{registerError}</span>
          </div>
        )}
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.fullName}</label>
            <input
              type="text"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.password}</label>
            <input
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.confirmPassword}</label>
            <input
              type="password"
              value={registerConfirm}
              onChange={(e) => setRegisterConfirm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleRegister}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {t.register}
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            {t.haveAccount}{" "}
            <button onClick={() => setPage("login")} className="text-blue-600 font-medium hover:underline">
              {t.login}
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  const renderSidebar = () => (
    <div className={`bg-white h-screen flex flex-col transition-all duration-300 shadow-sm ${sidebarOpen ? "w-64" : "w-20"} ${isRTL ? "border-l border-gray-200" : "border-r border-gray-200"}`}>
      <div className="p-4 flex items-center gap-3 border-b border-gray-100">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
          <Wrench size={20} className="text-white" />
        </div>
        {sidebarOpen && <span className="font-bold text-gray-800 text-sm leading-tight">{t.appName}</span>}
      </div>
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = page === item.id;
          const NavIcon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => { setPage(item.id); setShowMobileMenu(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${isActive ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
            >
              <NavIcon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
      <div className="p-3 border-t border-gray-100">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 text-sm">
          {sidebarOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </div>
  );

  const renderHeader = () => (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button className="lg:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <Menu size={24} />
        </button>
        <div className="relative">
          <Search size={18} className="absolute top-1/2 text-gray-400" style={{ transform: "translateY(-50%)", left: isRTL ? undefined : 12, right: isRTL ? 12 : undefined }} />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.search}
            className={`bg-gray-50 border border-gray-200 rounded-lg py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isRTL ? "pr-10 pl-4" : "pl-10 pr-4"}`}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 border border-gray-200">
          <Globe size={16} />{lang === "ar" ? "EN" : "عربي"}
        </button>
        <div className="relative">
          <button onClick={() => setNotifOpen(!notifOpen)} className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-50">
            <Bell size={20} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
          </button>
          {notifOpen && (
            <div className={`absolute top-12 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 ${isRTL ? "left-0" : "right-0"}`}>
              <div className="p-3 border-b border-gray-100 font-semibold text-sm">{t.notifications}</div>
              {notifications.map((n) => (
                <div key={n.id} className="p-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.urgent ? "bg-red-500" : "bg-blue-500"}`}></div>
                  <div>
                    <p className="text-sm text-gray-700">{n.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {currentUser?.name?.charAt(0) || "U"}
          </div>
        </div>
        <button onClick={handleLogout} className="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600">
          <LogOut size={18} />
        </button>
      </div>
    </header>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t.welcome}{isRTL ? `، ${currentUser?.name}` : `, ${currentUser?.nameEn}`}</h1>
          <p className="text-gray-500 text-sm mt-1">{isRTL ? "إليك ملخص اليوم" : "Here is your daily summary"}</p>
        </div>
        <button onClick={() => { setPage("workOrders"); setShowNewOrder(true); }} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700">
          <Plus size={18} />{t.newOrder}
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={ClipboardList} label={t.totalOrders} value={statsTotal} change={12} color="bg-blue-600" onClick={() => setPage("workOrders")} />
        <StatCard icon={Ticket} label={t.openTickets} value={openTicketsCount} change={5} color="bg-orange-500" onClick={() => setPage("tickets")} />
        <StatCard icon={CalendarCheck} label={t.todayAppointments} value={todayAppts} color="bg-purple-600" onClick={() => setPage("appointments")} />
        <StatCard icon={CheckCircle} label={t.completedToday} value={statsCompleted} change={-3} color="bg-green-600" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">{t.weeklyOverview}</h3>
          </div>
          <MiniBarChart data={weekData} />
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">{t.quickActions}</h3>
          <div className="space-y-2">
            <button onClick={() => { setPage("workOrders"); setShowNewOrder(true); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-100">
              <Plus size={18} />{t.newOrder}
            </button>
            <button onClick={() => { setPage("tickets"); setShowNewTicket(true); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-100">
              <Ticket size={18} />{t.newTicket}
            </button>
            <button onClick={() => { setPage("appointments"); setShowNewAppointment(true); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-100">
              <CalendarDays size={18} />{t.newAppointment}
            </button>
            <button onClick={() => setPage("reports")} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 border border-gray-100">
              <BarChart3 size={18} />{t.reports}
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">{t.recentActivity}</h3>
          <button onClick={() => setPage("workOrders")} className="text-blue-600 text-sm hover:underline">{t.viewAll}</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-gray-100">
                <th className="text-start pb-3 font-medium">{t.orderID}</th>
                <th className="text-start pb-3 font-medium">{t.customer}</th>
                <th className="text-start pb-3 font-medium">{t.priority}</th>
                <th className="text-start pb-3 font-medium">{t.status}</th>
                <th className="text-start pb-3 font-medium">{t.assignedTo}</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((o) => (
                <tr key={o.id} onClick={() => { setPage("workOrders"); setSelectedOrder(o); }} className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
                  <td className="py-3 font-mono text-blue-600">{o.id}</td>
                  <td className="py-3">{lang === "ar" ? o.customer : o.customerEn}</td>
                  <td className="py-3"><PriorityBadge priority={o.priority} t={t} /></td>
                  <td className="py-3"><StatusBadge status={o.status} t={t} /></td>
                  <td className="py-3">{getTechName(o.tech)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTickets = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">{t.tickets}</h1>
        <button onClick={() => setShowNewTicket(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700">
          <Plus size={18} />{t.newTicket}
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={Ticket} label={t.totalTickets} value={tickets.length} color="bg-blue-600" />
        <StatCard icon={AlertCircle} label={t.openTickets} value={tickets.filter(tk => tk.status === "open").length} color="bg-orange-500" />
        <StatCard icon={CheckCircle} label={t.closedTickets} value={tickets.filter(tk => tk.status === "closed" || tk.status === "resolved").length} color="bg-green-600" />
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-gray-500">
                <th className="text-start p-4 font-medium">{t.ticketID}</th>
                <th className="text-start p-4 font-medium">{t.ticketSubject}</th>
                <th className="text-start p-4 font-medium">{t.customer}</th>
                <th className="text-start p-4 font-medium">{t.priority}</th>
                <th className="text-start p-4 font-medium">{t.status}</th>
                <th className="text-start p-4 font-medium">{t.date}</th>
                <th className="text-start p-4 font-medium">{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((tk) => (
                <tr key={tk.id} className="border-b border-gray-50 hover:bg-blue-50">
                  <td className="p-4 font-mono text-blue-600">{tk.id}</td>
                  <td className="p-4">{lang === "ar" ? tk.subject : tk.subjectEn}</td>
                  <td className="p-4">{lang === "ar" ? tk.customer : tk.customerEn}</td>
                  <td className="p-4"><PriorityBadge priority={tk.priority} t={t} /></td>
                  <td className="p-4"><StatusBadge status={tk.status} t={t} /></td>
                  <td className="p-4 text-gray-500">{tk.date}</td>
                  <td className="p-4">
                    <button onClick={() => setSelectedTicket(tk)} className="p-1.5 rounded hover:bg-blue-100 text-blue-600"><Eye size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {showNewTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4" onClick={() => setShowNewTicket(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold">{t.newTicket}</h2>
              <button onClick={() => setShowNewTicket(false)} className="p-2 rounded-lg hover:bg-gray-100"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{t.ticketSubject}</label>
                <input value={newTicketSubject} onChange={(e) => setNewTicketSubject(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{t.priority}</label>
                <select value={newTicketPriority} onChange={(e) => setNewTicketPriority(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white">
                  <option value="low">{t.low}</option>
                  <option value="medium">{t.medium}</option>
                  <option value="high">{t.high}</option>
                  <option value="urgent">{t.urgent}</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{t.ticketDescription}</label>
                <textarea value={newTicketDesc} onChange={(e) => setNewTicketDesc(e.target.value)} rows={4} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="flex gap-2 pt-2">
                <button onClick={handleCreateTicket} className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">{t.submit}</button>
                <button onClick={() => setShowNewTicket(false)} className="flex-1 border border-gray-200 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{t.cancel}</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4" onClick={() => setSelectedTicket(null)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">{t.details}</h2>
                <p className="text-sm text-blue-600 font-mono">{selectedTicket.id}</p>
              </div>
              <button onClick={() => setSelectedTicket(null)} className="p-2 rounded-lg hover:bg-gray-100"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-xs text-gray-400">{t.ticketSubject}</label><p className="font-medium">{lang === "ar" ? selectedTicket.subject : selectedTicket.subjectEn}</p></div>
                <div><label className="text-xs text-gray-400">{t.customer}</label><p className="font-medium">{lang === "ar" ? selectedTicket.customer : selectedTicket.customerEn}</p></div>
                <div><label className="text-xs text-gray-400">{t.priority}</label><div className="mt-1"><PriorityBadge priority={selectedTicket.priority} t={t} /></div></div>
                <div><label className="text-xs text-gray-400">{t.status}</label><div className="mt-1"><StatusBadge status={selectedTicket.status} t={t} /></div></div>
              </div>
              <div><label className="text-xs text-gray-400">{t.description}</label><p className="text-sm mt-1 text-gray-700 bg-gray-50 p-3 rounded-lg">{lang === "ar" ? selectedTicket.desc : selectedTicket.descEn}</p></div>
              <button onClick={() => setSelectedTicket(null)} className="w-full border border-gray-200 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{t.close}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAppointments = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">{t.appointments}</h1>
        <button onClick={() => setShowNewAppointment(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700">
          <Plus size={18} />{t.newAppointment}
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={CalendarDays} label={t.totalAppointments} value={appointments.length} color="bg-blue-600" />
        <StatCard icon={CalendarCheck} label={t.todayAppointments} value={appointments.filter(a => a.date === new Date().toISOString().split("T")[0]).length} color="bg-green-600" />
        <StatCard icon={Clock} label={t.upcomingAppointments} value={appointments.filter(a => a.date > new Date().toISOString().split("T")[0]).length} color="bg-purple-600" />
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-gray-500">
                <th className="text-start p-4 font-medium">ID</th>
                <th className="text-start p-4 font-medium">{t.clientName}</th>
                <th className="text-start p-4 font-medium">{t.clientPhone}</th>
                <th className="text-start p-4 font-medium">{t.type}</th>
                <th className="text-start p-4 font-medium">{t.date}</th>
                <th className="text-start p-4 font-medium">{t.appointmentTime}</th>
                <th className="text-start p-4 font-medium">{t.status}</th>
                <th className="text-start p-4 font-medium">{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className="border-b border-gray-50 hover:bg-blue-50">
                  <td className="p-4 font-mono text-blue-600">{appt.id}</td>
                  <td className="p-4">{lang === "ar" ? appt.client : appt.clientEn}</td>
                  <td className="p-4 text-gray-500">{appt.phone}</td>
                  <td className="p-4">{t[appt.type] || appt.type}</td>
                  <td className="p-4">{appt.date}</td>
                  <td className="p-4">{appt.time}</td>
                  <td className="p-4"><StatusBadge status={appt.status} t={t} /></td>
                  <td className="p-4">
                    <button onClick={() => setSelectedAppointment(appt)} className="p-1.5 rounded hover:bg-blue-100 text-blue-600"><Eye size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {showNewAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4" onClick={() => setShowNewAppointment(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold">{t.newAppointment}</h2>
              <button onClick={() => setShowNewAppointment(false)} className="p-2 rounded-lg hover:bg-gray-100"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{t.clientName}</label>
                  <input value={newApptClient} onChange={(e) => setNewApptClient(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{t.clientPhone}</label>
                  <input value={newApptPhone} onChange={(e) => setNewApptPhone(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{t.appointmentDate}</label>
                  <input type="date" value={newApptDate} onChange={(e) => setNewApptDate(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{t.appointmentTime}</label>
                  <input type="time" value={newApptTime} onChange={(e) => setNewApptTime(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{t.appointmentType}</label>
                <select value={newApptType} onChange={(e) => setNewApptType(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white">
                  <option value="consultation">{t.consultation}</option>
                  <option value="siteVisit">{t.siteVisit}</option>
                  <option value="followUp">{t.followUp}</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{t.location}</label>
                <input value={newApptLocation} onChange={(e) => setNewApptLocation(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="flex gap-2 pt-2">
                <button onClick={handleCreateAppointment} className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">{t.submit}</button>
                <button onClick={() => setShowNewAppointment(false)} className="flex-1 border border-gray-200 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{t.cancel}</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4" onClick={() => setSelectedAppointment(null)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">{t.details}</h2>
                <p className="text-sm text-blue-600 font-mono">{selectedAppointment.id}</p>
              </div>
              <button onClick={() => setSelectedAppointment(null)} className="p-2 rounded-lg hover:bg-gray-100"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-xs text-gray-400">{t.clientName}</label><p className="font-medium">{lang === "ar" ? selectedAppointment.client : selectedAppointment.clientEn}</p></div>
                <div><label className="text-xs text-gray-400">{t.clientPhone}</label><p className="font-medium">{selectedAppointment.phone}</p></div>
                <div><label className="text-xs text-gray-400">{t.appointmentDate}</label><p className="font-medium">{selectedAppointment.date}</p></div>
                <div><label className="text-xs text-gray-400">{t.appointmentTime}</label><p className="font-medium">{selectedAppointment.time}</p></div>
                <div><label className="text-xs text-gray-400">{t.type}</label><p className="font-medium">{t[selectedAppointment.type]}</p></div>
                <div><label className="text-xs text-gray-400">{t.status}</label><div className="mt-1"><StatusBadge status={selectedAppointment.status} t={t} /></div></div>
              </div>
              <div><label className="text-xs text-gray-400">{t.location}</label><p className="text-sm mt-1 text-gray-700 bg-gray-50 p-3 rounded-lg">{lang === "ar" ? selectedAppointment.location : selectedAppointment.locationEn}</p></div>
              <button onClick={() => setSelectedAppointment(null)} className="w-full border border-gray-200 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{t.close}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderWorkOrders = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h1 className="text-2xl font-bold text-gray-900">{t.workOrders}</h1>
        <button onClick={() => setShowNewOrder(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700">
          <Plus size={18} />{t.newOrder}
        </button>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white">
          <option value="all">{t.allStatuses}</option>
          <option value="pending">{t.pending}</option>
          <option value="inProgress">{t.inProgress}</option>
          <option value="completed">{t.completed}</option>
        </select>
        <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white">
          <option value="all">{t.allPriorities}</option>
          <option value="urgent">{t.urgent}</option>
          <option value="high">{t.high}</option>
          <option value="medium">{t.medium}</option>
          <option value="low">{t.low}</option>
        </select>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-gray-500">
                <th className="text-start p-4 font-medium">{t.orderID}</th>
                <th className="text-start p-4 font-medium">{t.customer}</th>
                <th className="text-start p-4 font-medium">{t.type}</th>
                <th className="text-start p-4 font-medium">{t.priority}</th>
                <th className="text-start p-4 font-medium">{t.status}</th>
                <th className="text-start p-4 font-medium">{t.assignedTo}</th>
                <th className="text-start p-4 font-medium">{t.date}</th>
                <th className="text-start p-4 font-medium">{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((o) => (
                <tr key={o.id} className="border-b border-gray-50 hover:bg-blue-50">
                  <td className="p-4 font-mono text-blue-600 cursor-pointer" onClick={() => setSelectedOrder(o)}>{o.id}</td>
                  <td className="p-4">{lang === "ar" ? o.customer : o.customerEn}</td>
                  <td className="p-4">{t[o.type] || o.type}</td>
                  <td className="p-4"><PriorityBadge priority={o.priority} t={t} /></td>
                  <td className="p-4"><StatusBadge status={o.status} t={t} /></td>
                  <td className="p-4">{getTechName(o.tech)}</td>
                  <td className="p-4 text-gray-500">{o.date}</td>
                  <td className="p-4">
                    <button onClick={() => setSelectedOrder(o)} className="p-1.5 rounded hover:bg-blue-100 text-blue-600"><Eye size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredOrders.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <ClipboardList size={48} className="mx-auto mb-3 opacity-30" />
              <p>{t.noData}</p>
            </div>
          )}
        </div>
      </div>
      
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4" onClick={() => setSelectedOrder(null)}>
          <div className="bg-white rounded-2xl w-full max-w-lg max-h-screen overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{t.orderDetails}</h2>
                <p className="text-sm text-blue-600 font-mono">{selectedOrder.id}</p>
              </div>
              <button onClick={() => setSelectedOrder(null)} className="p-2 rounded-lg hover:bg-gray-100"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-xs text-gray-400">{t.customer}</label><p className="font-medium">{lang === "ar" ? selectedOrder.customer : selectedOrder.customerEn}</p></div>
                <div><label className="text-xs text-gray-400">{t.location}</label><p className="font-medium text-sm">{lang === "ar" ? selectedOrder.location : selectedOrder.locationEn}</p></div>
                <div><label className="text-xs text-gray-400">{t.priority}</label><div className="mt-1"><PriorityBadge priority={selectedOrder.priority} t={t} /></div></div>
                <div><label className="text-xs text-gray-400">{t.status}</label><div className="mt-1"><StatusBadge status={selectedOrder.status} t={t} /></div></div>
                <div><label className="text-xs text-gray-400">{t.assignedTo}</label><p className="font-medium">{getTechName(selectedOrder.tech)}</p></div>
                <div><label className="text-xs text-gray-400">{t.date}</label><p className="font-medium">{selectedOrder.date}</p></div>
              </div>
              <div><label className="text-xs text-gray-400">{t.description}</label><p className="text-sm mt-1 text-gray-700 bg-gray-50 p-3 rounded-lg">{lang === "ar" ? selectedOrder.desc : selectedOrder.descEn}</p></div>
              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">{t.edit}</button>
                <button onClick={() => setSelectedOrder(null)} className="flex-1 border border-gray-200 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{t.close}</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {showNewOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4" onClick={() => setShowNewOrder(false)}>
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold">{t.createWorkOrder}</h2>
              <button onClick={() => setShowNewOrder(false)} className="p-2 rounded-lg hover:bg-gray-100"><X size={20} /></button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{t.customer}</label>
                <input value={newCust} onChange={(e) => setNewCust(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{t.location}</label>
                <input value={newLoc} onChange={(e) => setNewLoc(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{t.type}</label>
                  <select value={newType} onChange={(e) => setNewType(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white">
                    <option value="maintenance">{t.maintenance}</option>
                    <option value="repair">{t.repair}</option>
                    <option value="installation">{t.installation}</option>
                    <option value="inspection">{t.inspection}</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{t.priority}</label>
                  <select value={newPrio} onChange={(e) => setNewPrio(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white">
                    <option value="low">{t.low}</option>
                    <option value="medium">{t.medium}</option>
                    <option value="high">{t.high}</option>
                    <option value="urgent">{t.urgent}</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">{t.description}</label>
                <textarea value={newDesc} onChange={(e) => setNewDesc(e.target.value)} rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <div className="flex gap-2 pt-2">
                <button onClick={handleCreateOrder} className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">{t.submit}</button>
                <button onClick={() => setShowNewOrder(false)} className="flex-1 border border-gray-200 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{t.cancel}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderTechnicians = () => {
    const availCount = sampleTechnicians.filter(tc => tc.status === "available").length;
    const onJobCount = sampleTechnicians.filter(tc => tc.status === "onJob").length;
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">{t.technicians}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard icon={Users} label={t.totalTechnicians} value={sampleTechnicians.length} color="bg-blue-600" />
          <StatCard icon={CheckCircle} label={t.available} value={availCount} color="bg-green-600" />
          <StatCard icon={Truck} label={t.onJob} value={onJobCount} color="bg-amber-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {sampleTechnicians.map((tech) => {
            const statusLabel = tech.status === "available" ? t.available : tech.status === "onJob" ? t.onJob : t.offline;
            const statusColor = tech.status === "available" ? "bg-green-500" : tech.status === "onJob" ? "bg-blue-500" : "bg-gray-400";
            return (
              <div key={tech.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">{tech.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{lang === "ar" ? tech.name : tech.nameEn}</h3>
                    <p className="text-sm text-gray-500">{lang === "ar" ? tech.spec : tech.specEn}</p>
                  </div>
                  <span className={`w-2.5 h-2.5 rounded-full ${statusColor}`}></span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center pt-3 border-t border-gray-100">
                  <div><p className="text-lg font-bold text-gray-900">{tech.jobs}</p><p className="text-xs text-gray-500">{t.jobsCompleted}</p></div>
                  <div><p className="text-lg font-bold text-gray-900">{tech.rating}</p><p className="text-xs text-gray-500">{t.rating}</p></div>
                  <div><p className="text-xs font-medium text-gray-700">{statusLabel}</p></div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 border border-gray-200 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1">
                    <Phone size={14} />{isRTL ? "اتصال" : "Call"}
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-1">
                    <ClipboardList size={14} />{isRTL ? "تعيين" : "Assign"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderReports = () => {
    const pendingCount = orders.filter(o => o.status === "pending").length;
    const inProgCount = orders.filter(o => o.status === "inProgress").length;
    const compCount = orders.filter(o => o.status === "completed").length;
    const total = pendingCount + inProgCount + compCount || 1;
    const sortedTechs = [...sampleTechnicians].sort((a, b) => b.rating - a.rating).slice(0, 3);

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">{t.reports}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">{isRTL ? "توزيع الحالات" : "Status Distribution"}</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{t.pending}</span><span className="font-medium">{pendingCount}</span></div>
                <div className="w-full bg-gray-100 rounded-full h-3"><div className="h-3 rounded-full bg-yellow-500" style={{ width: `${Math.round((pendingCount / total) * 100)}%` }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{t.inProgress}</span><span className="font-medium">{inProgCount}</span></div>
                <div className="w-full bg-gray-100 rounded-full h-3"><div className="h-3 rounded-full bg-blue-500" style={{ width: `${Math.round((inProgCount / total) * 100)}%` }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{t.completed}</span><span className="font-medium">{compCount}</span></div>
                <div className="w-full bg-gray-100 rounded-full h-3"><div className="h-3 rounded-full bg-green-500" style={{ width: `${Math.round((compCount / total) * 100)}%` }}></div></div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">{t.weeklyOverview}</h3>
            <MiniBarChart data={weekData} color="bg-green-500" />
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">{t.topTechnicians}</h3>
            <div className="space-y-3">
              {sortedTechs.map((tech, i) => {
                const badgeColor = i === 0 ? "bg-yellow-500" : i === 1 ? "bg-gray-400" : "bg-amber-600";
                return (
                  <div key={tech.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${badgeColor}`}>{i + 1}</span>
                    <div className="flex-1"><p className="font-medium text-sm">{lang === "ar" ? tech.name : tech.nameEn}</p><p className="text-xs text-gray-500">{tech.jobs} {t.jobsCompleted}</p></div>
                    <div className="flex items-center gap-1"><Star size={14} className="text-yellow-500" style={{ fill: "#eab308" }} /><span className="font-medium text-sm">{tech.rating}</span></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">{t.customerSatisfaction}</h3>
            <div className="text-center py-6">
              <p className="text-5xl font-bold text-green-600">4.7</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} className="text-yellow-500" style={{ fill: s <= 4 ? "#eab308" : "#fef08a" }} />)}
              </div>
              <p className="text-sm text-gray-500 mt-2">{isRTL ? "بناءً على 847 تقييم" : "Based on 847 reviews"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSettings = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">{t.settings}</h1>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Globe size={20} className="text-gray-500" />
            <div><p className="font-medium">{t.language}</p><p className="text-sm text-gray-500">{lang === "ar" ? "العربية" : "English"}</p></div>
          </div>
          <button onClick={() => setLang(lang === "ar" ? "en" : "ar")} className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
            {lang === "ar" ? "English" : "العربية"}
          </button>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-gray-500" />
            <div><p className="font-medium">{t.notifications}</p><p className="text-sm text-gray-500">{isRTL ? "إدارة تنبيهات الإشعارات" : "Manage notification alerts"}</p></div>
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">{isRTL ? "تعديل" : "Configure"}</button>
        </div>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <User size={20} className="text-gray-500" />
            <div><p className="font-medium">{t.profile}</p><p className="text-sm text-gray-500">{lang === "ar" ? currentUser?.name : currentUser?.nameEn}</p></div>
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">{t.edit}</button>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4">{t.systemHealth}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-green-700">99.9%</p><p className="text-sm text-green-600">{t.uptime}</p></div>
          <div className="bg-blue-50 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-blue-700">24</p><p className="text-sm text-blue-600">{t.activeUsers}</p></div>
        </div>
      </div>
    </div>
  );

  const renderAdminPanel = () => (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">{t.adminPanel}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard icon={Users} label={t.users} value={users.length} color="bg-blue-600" />
        <StatCard icon={ClipboardList} label={t.totalOrders} value={orders.length} color="bg-green-600" />
        <StatCard icon={Ticket} label={t.totalTickets} value={tickets.length} color="bg-orange-500" />
        <StatCard icon={CalendarDays} label={t.totalAppointments} value={appointments.length} color="bg-purple-600" />
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">{t.manageUsers}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="text-gray-500">
                <th className="text-start p-3 font-medium">ID</th>
                <th className="text-start p-3 font-medium">{t.fullName}</th>
                <th className="text-start p-3 font-medium">{t.email}</th>
                <th className="text-start p-3 font-medium">{t.role}</th>
                <th className="text-start p-3 font-medium">{t.actions}</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b border-gray-50">
                  <td className="p-3">{u.id}</td>
                  <td className="p-3">{lang === "ar" ? u.name : u.nameEn}</td>
                  <td className="p-3 text-gray-500">{u.email}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${u.role === "admin" ? "bg-red-100 text-red-700" : u.role === "technician" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
                      {t[u.role] || u.role}
                    </span>
                  </td>
                  <td className="p-3">
                    <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Edit size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPlaceholder = (title) => (
    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
      <Layers size={64} className="mb-4 opacity-30" />
      <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
      <p className="text-sm mt-2">{isRTL ? "هذه الصفحة قيد التطوير" : "This page is under development"}</p>
    </div>
  );

  const renderPage = () => {
    if (page === "dashboard") return renderDashboard();
    if (page === "workOrders") return renderWorkOrders();
    if (page === "tickets") return renderTickets();
    if (page === "appointments") return renderAppointments();
    if (page === "technicians") return renderTechnicians();
    if (page === "reports") return renderReports();
    if (page === "settings") return renderSettings();
    if (page === "adminPanel" && currentUser?.role === "admin") return renderAdminPanel();
    return renderPlaceholder(t[page] || page);
  };

  if (!isLoggedIn) {
    if (page === "register") return renderRegister();
    return renderLogin();
  }

  return (
    <div dir={dir} className="flex h-screen bg-gray-50 overflow-hidden">
      <div className="hidden lg:block">{renderSidebar()}</div>
      {showMobileMenu && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-30" onClick={() => setShowMobileMenu(false)}></div>
          <div className="relative z-50">{renderSidebar()}</div>
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderHeader()}
        <main className="flex-1 overflow-y-auto p-6">{renderPage()}</main>
      </div>
    </div>
  );
}
