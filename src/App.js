import { useState } from "react";
import {
  LayoutDashboard, ClipboardList, Users, MapPin, BarChart3, Settings, Bell, Search,
  Plus, Filter, ChevronDown, ChevronRight, Calendar, Clock, AlertTriangle, CheckCircle,
  XCircle, Wrench, Truck, Phone, Mail, Star, TrendingUp, TrendingDown, Activity,
  Eye, Edit, Trash2, Download, Upload, RefreshCw, Menu, X, Globe, Moon, Sun,
  ArrowRight, ArrowLeft, ChevronLeft, Home, User, LogOut, HelpCircle, FileText,
  Zap, Target, Award, Briefcase, Shield, Layers, PieChart, Map
} from "lucide-react";

const translations = {
  ar: {
    appName: "نظام إدارة الخدمات الميدانية",
    dashboard: "لوحة التحكم",
    workOrders: "أوامر العمل",
    technicians: "الفنيين",
    customers: "العملاء",
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
    map: "الخريطة"
  },
  en: {
    appName: "Field Service Management",
    dashboard: "Dashboard",
    workOrders: "Work Orders",
    technicians: "Technicians",
    customers: "Customers",
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
    map: "Map"
  }
};

const sampleTechnicians = [
  { id: 1, name: "\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f", nameEn: "Ahmed Mohammed", status: "available", rating: 4.8, jobs: 156, spec: "\u062a\u0643\u064a\u064a\u0641", specEn: "HVAC", phone: "0501234567", avatar: "AM" },
  { id: 2, name: "\u062e\u0627\u0644\u062f \u0627\u0644\u0639\u0645\u0631\u064a", nameEn: "Khalid Al-Omari", status: "onJob", rating: 4.6, jobs: 132, spec: "\u0643\u0647\u0631\u0628\u0627\u0621", specEn: "Electrical", phone: "0507654321", avatar: "KA" },
  { id: 3, name: "\u0633\u0639\u062f \u0627\u0644\u062d\u0631\u0628\u064a", nameEn: "Saad Al-Harbi", status: "available", rating: 4.9, jobs: 189, spec: "\u0633\u0628\u0627\u0643\u0629", specEn: "Plumbing", phone: "0509876543", avatar: "SH" },
  { id: 4, name: "\u0641\u0647\u062f \u0627\u0644\u0633\u0627\u0644\u0645", nameEn: "Fahd Al-Salem", status: "offline", rating: 4.3, jobs: 98, spec: "\u0635\u064a\u0627\u0646\u0629 \u0639\u0627\u0645\u0629", specEn: "General", phone: "0503456789", avatar: "FS" },
  { id: 5, name: "\u0639\u0645\u0631 \u0627\u0644\u062f\u0648\u0633\u0631\u064a", nameEn: "Omar Al-Dosari", status: "onJob", rating: 4.7, jobs: 145, spec: "\u062a\u0643\u064a\u064a\u0641", specEn: "HVAC", phone: "0502345678", avatar: "OD" }
];

const sampleOrders = [
  { id: "WO-2024-001", customer: "\u0634\u0631\u0643\u0629 \u0627\u0644\u0631\u0627\u062c\u062d\u064a", customerEn: "Al Rajhi Corp", type: "maintenance", priority: "high", status: "inProgress", tech: 1, date: "2025-02-16", location: "\u0627\u0644\u0631\u064a\u0627\u0636 - \u062d\u064a \u0627\u0644\u0639\u0644\u064a\u0627", locationEn: "Riyadh - Olaya District", desc: "\u0635\u064a\u0627\u0646\u0629 \u0646\u0638\u0627\u0645 \u0627\u0644\u062a\u0643\u064a\u064a\u0641 \u0627\u0644\u0645\u0631\u0643\u0632\u064a", descEn: "Central AC system maintenance" },
  { id: "WO-2024-002", customer: "\u0645\u0633\u062a\u0634\u0641\u0649 \u0627\u0644\u0645\u0645\u0644\u0643\u0629", customerEn: "Kingdom Hospital", type: "repair", priority: "urgent", status: "pending", tech: 3, date: "2025-02-16", location: "\u0627\u0644\u0631\u064a\u0627\u0636 - \u0637\u0631\u064a\u0642 \u0627\u0644\u0645\u0644\u0643 \u0641\u0647\u062f", locationEn: "Riyadh - King Fahd Road", desc: "\u0639\u0637\u0644 \u0641\u064a \u0646\u0638\u0627\u0645 \u0627\u0644\u062a\u0628\u0631\u064a\u062f", descEn: "Cooling system failure" },
  { id: "WO-2024-003", customer: "\u0641\u0646\u062f\u0642 \u0627\u0644\u0641\u064a\u0635\u0644\u064a\u0629", customerEn: "Al Faisaliah Hotel", type: "installation", priority: "medium", status: "completed", tech: 2, date: "2025-02-15", location: "\u0627\u0644\u0631\u064a\u0627\u0636 - \u062d\u064a \u0627\u0644\u0641\u064a\u0635\u0644\u064a\u0629", locationEn: "Riyadh - Faisaliah District", desc: "\u062a\u0631\u0643\u064a\u0628 \u0648\u062d\u062f\u0627\u062a \u062a\u0643\u064a\u064a\u0641 \u062c\u062f\u064a\u062f\u0629", descEn: "New AC unit installation" },
  { id: "WO-2024-004", customer: "\u0645\u062c\u0645\u0639 \u0627\u0644\u0639\u062b\u064a\u0645", customerEn: "Othaim Mall", type: "inspection", priority: "low", status: "pending", tech: null, date: "2025-02-17", location: "\u0627\u0644\u0631\u064a\u0627\u0636 - \u0637\u0631\u064a\u0642 \u062e\u0631\u064a\u0635", locationEn: "Riyadh - Khurais Road", desc: "\u0641\u062d\u0635 \u062f\u0648\u0631\u064a \u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u062a\u0643\u064a\u064a\u0641", descEn: "Routine HVAC inspection" },
  { id: "WO-2024-005", customer: "\u0628\u0631\u062c \u0627\u0644\u0645\u0645\u0644\u0643\u0629", customerEn: "Kingdom Tower", type: "repair", priority: "high", status: "inProgress", tech: 5, date: "2025-02-16", location: "\u0627\u0644\u0631\u064a\u0627\u0636 - \u0637\u0631\u064a\u0642 \u0627\u0644\u0645\u0644\u0643 \u0641\u0647\u062f", locationEn: "Riyadh - King Fahd Road", desc: "\u0625\u0635\u0644\u0627\u062d \u062a\u0633\u0631\u064a\u0628 \u0641\u064a \u0646\u0638\u0627\u0645 \u0627\u0644\u062a\u0628\u0631\u064a\u062f", descEn: "Cooling system leak repair" },
  { id: "WO-2024-006", customer: "\u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0645\u0644\u0643 \u0633\u0639\u0648\u062f", customerEn: "King Saud University", type: "maintenance", priority: "medium", status: "pending", tech: null, date: "2025-02-18", location: "\u0627\u0644\u0631\u064a\u0627\u0636 - \u0627\u0644\u062f\u0631\u0639\u064a\u0629", locationEn: "Riyadh - Diriyah", desc: "\u0635\u064a\u0627\u0646\u0629 \u0648\u062d\u062f\u0627\u062a \u0627\u0644\u062a\u0643\u064a\u064a\u0641 - \u0627\u0644\u0645\u0628\u0646\u0649 \u0627\u0644\u0625\u062f\u0627\u0631\u064a", descEn: "AC maintenance - Admin building" }
];

function StatusBadge(props) {
  var status = props.status;
  var t = props.t;
  var bg = "bg-gray-100";
  var text = "text-gray-800";
  var label = status;
  if (status === "pending") { bg = "bg-yellow-100"; text = "text-yellow-800"; label = t.pending; }
  else if (status === "inProgress") { bg = "bg-blue-100"; text = "text-blue-800"; label = t.inProgress; }
  else if (status === "completed") { bg = "bg-green-100"; text = "text-green-800"; label = t.completed; }
  else if (status === "cancelled") { bg = "bg-red-100"; text = "text-red-800"; label = t.cancelled; }
  return <span className={bg + " " + text + " px-2 py-1 rounded-full text-xs font-medium"}>{label}</span>;
}

function PriorityBadge(props) {
  var priority = props.priority;
  var t = props.t;
  var bg = "bg-gray-100";
  var text = "text-gray-800";
  var label = priority;
  var dot = "bg-gray-500";
  if (priority === "urgent") { bg = "bg-red-100"; text = "text-red-800"; label = t.urgent; dot = "bg-red-500"; }
  else if (priority === "high") { bg = "bg-orange-100"; text = "text-orange-800"; label = t.high; dot = "bg-orange-500"; }
  else if (priority === "medium") { bg = "bg-yellow-100"; text = "text-yellow-800"; label = t.medium; dot = "bg-yellow-500"; }
  else if (priority === "low") { bg = "bg-green-100"; text = "text-green-800"; label = t.low; dot = "bg-green-500"; }
  return (
    <span className={bg + " " + text + " px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"}>
      <span className={"w-2 h-2 rounded-full " + dot}></span>{label}
    </span>
  );
}

function TechStatusDot(props) {
  var s = props.status;
  var c = "bg-gray-400";
  if (s === "available") c = "bg-green-500";
  else if (s === "onJob") c = "bg-blue-500";
  return <span className={"w-2.5 h-2.5 rounded-full inline-block " + c}></span>;
}

function StatCard(props) {
  var Icon = props.icon;
  var label = props.label;
  var value = props.value;
  var change = props.change;
  var color = props.color;
  var onClick = props.onClick;
  return (
    <div onClick={onClick} className={"bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all" + (onClick ? " cursor-pointer hover:border-blue-200" : "")}>
      <div className="flex items-center justify-between mb-3">
        <div className={"w-10 h-10 rounded-lg flex items-center justify-center " + color}>
          <Icon size={20} className="text-white" />
        </div>
        {change !== undefined && change !== null && (
          <span className={"text-xs font-medium flex items-center gap-1 " + (change > 0 ? "text-green-600" : "text-red-600")}>
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

function MiniBarChart(props) {
  var data = props.data;
  var color = props.color || "bg-blue-500";
  var max = Math.max.apply(null, data.map(function(d) { return d.v; }));
  if (max === 0) max = 1;
  return (
    <div className="flex items-end gap-1 h-24">
      {data.map(function(d, i) {
        var h = Math.round((d.v / max) * 80);
        if (h < 4) h = 4;
        return (
          <div key={i} className="flex flex-col items-center flex-1">
            <div className={"w-full rounded-t " + color} style={{ height: h + "%", minHeight: 4 }}></div>
            <span className="text-xs text-gray-400 mt-1">{d.l}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  var langState = useState("ar");
  var lang = langState[0];
  var setLang = langState[1];

  var pageState = useState("dashboard");
  var page = pageState[0];
  var setPage = pageState[1];

  var sidebarState = useState(true);
  var sidebarOpen = sidebarState[0];
  var setSidebarOpen = sidebarState[1];

  var searchState = useState("");
  var searchQuery = searchState[0];
  var setSearchQuery = searchState[1];

  var statusState = useState("all");
  var statusFilter = statusState[0];
  var setStatusFilter = statusState[1];

  var priorityState = useState("all");
  var priorityFilter = priorityState[0];
  var setPriorityFilter = priorityState[1];

  var selectedState = useState(null);
  var selectedOrder = selectedState[0];
  var setSelectedOrder = selectedState[1];

  var newOrderState = useState(false);
  var showNewOrder = newOrderState[0];
  var setShowNewOrder = newOrderState[1];

  var ordersState = useState(sampleOrders);
  var orders = ordersState[0];
  var setOrders = ordersState[1];

  var notifState = useState(false);
  var notifOpen = notifState[0];
  var setNotifOpen = notifState[1];

  var mobileState = useState(false);
  var showMobileMenu = mobileState[0];
  var setShowMobileMenu = mobileState[1];

  var newCustState = useState("");
  var newCust = newCustState[0];
  var setNewCust = newCustState[1];

  var newLocState = useState("");
  var newLoc = newLocState[0];
  var setNewLoc = newLocState[1];

  var newTypeState = useState("maintenance");
  var newType = newTypeState[0];
  var setNewType = newTypeState[1];

  var newPrioState = useState("medium");
  var newPrio = newPrioState[0];
  var setNewPrio = newPrioState[1];

  var newDescState = useState("");
  var newDesc = newDescState[0];
  var setNewDesc = newDescState[1];

  var t = translations[lang];
  var isRTL = lang === "ar";
  var dir = isRTL ? "rtl" : "ltr";

  var getTechName = function(id) {
    var tech = null;
    for (var i = 0; i < sampleTechnicians.length; i++) {
      if (sampleTechnicians[i].id === id) { tech = sampleTechnicians[i]; break; }
    }
    if (!tech) return "\u2014";
    return lang === "ar" ? tech.name : tech.nameEn;
  };

  var filteredOrders = orders.filter(function(o) {
    var custName = lang === "ar" ? o.customer : o.customerEn;
    var matchSearch = searchQuery === "" || o.id.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1 || custName.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
    var matchStatus = statusFilter === "all" || o.status === statusFilter;
    var matchPriority = priorityFilter === "all" || o.priority === priorityFilter;
    return matchSearch && matchStatus && matchPriority;
  });

  var statsTotal = orders.length;
  var statsActive = orders.filter(function(o) { return o.status === "inProgress"; }).length;
  var statsCompleted = orders.filter(function(o) { return o.status === "completed"; }).length;
  var statsPending = orders.filter(function(o) { return o.status === "pending"; }).length;

  var weekData = [
    { l: isRTL ? "\u0633\u0628\u062a" : "Sat", v: 12 },
    { l: isRTL ? "\u0623\u062d\u062f" : "Sun", v: 19 },
    { l: isRTL ? "\u0627\u062b\u0646" : "Mon", v: 15 },
    { l: isRTL ? "\u062b\u0644\u0627" : "Tue", v: 22 },
    { l: isRTL ? "\u0623\u0631\u0628" : "Wed", v: 18 },
    { l: isRTL ? "\u062e\u0645\u064a" : "Thu", v: 25 },
    { l: isRTL ? "\u062c\u0645\u0639" : "Fri", v: 8 }
  ];

  var navItems = [
    { id: "dashboard", icon: LayoutDashboard, label: t.dashboard },
    { id: "workOrders", icon: ClipboardList, label: t.workOrders },
    { id: "technicians", icon: Users, label: t.technicians },
    { id: "customers", icon: Briefcase, label: t.customers },
    { id: "reports", icon: BarChart3, label: t.reports },
    { id: "settings", icon: Settings, label: t.settings }
  ];

  var notifications = [
    { id: 1, text: isRTL ? "\u0623\u0645\u0631 \u0639\u0645\u0644 \u062c\u062f\u064a\u062f #WO-2024-007 \u0628\u062d\u0627\u062c\u0629 \u0644\u0644\u062a\u0639\u064a\u064a\u0646" : "New work order #WO-2024-007 needs assignment", time: "5m", urgent: true },
    { id: 2, text: isRTL ? "\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f \u0623\u0643\u0645\u0644 \u0627\u0644\u0645\u0647\u0645\u0629 #WO-2024-003" : "Ahmed Mohammed completed task #WO-2024-003", time: "15m", urgent: false },
    { id: 3, text: isRTL ? "\u062a\u0646\u0628\u064a\u0647: \u062a\u0623\u062e\u0631 \u0641\u064a \u0623\u0645\u0631 \u0627\u0644\u0639\u0645\u0644 #WO-2024-002" : "Alert: Delay in work order #WO-2024-002", time: "30m", urgent: true }
  ];

  var handleCreateOrder = function() {
    var newO = {
      id: "WO-2024-" + String(orders.length + 1).padStart(3, "0"),
      customer: newCust || (isRTL ? "\u0639\u0645\u064a\u0644 \u062c\u062f\u064a\u062f" : "New Customer"),
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
    setOrders([newO].concat(orders));
    setShowNewOrder(false);
    setNewCust("");
    setNewLoc("");
    setNewType("maintenance");
    setNewPrio("medium");
    setNewDesc("");
  };

  var fontFamily = isRTL ? "'Noto Sans Arabic', 'Tahoma', sans-serif" : "'Calibri', 'Inter', 'Segoe UI', sans-serif";

  var renderSidebar = function() {
    return (
      <div className={"bg-white h-screen flex flex-col transition-all duration-300 shadow-sm " + (sidebarOpen ? "w-64" : "w-20") + (isRTL ? " border-l border-gray-200" : " border-r border-gray-200")}>
        <div className="p-4 flex items-center gap-3 border-b border-gray-100">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Wrench size={20} className="text-white" />
          </div>
          {sidebarOpen && <span className="font-bold text-gray-800 text-sm leading-tight">{t.appName}</span>}
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(function(item) {
            var isActive = page === item.id;
            var NavIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={function() { setPage(item.id); setShowMobileMenu(false); }}
                className={"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all " + (isActive ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900")}
              >
                <NavIcon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>
        <div className="p-3 border-t border-gray-100">
          <button onClick={function() { setSidebarOpen(!sidebarOpen); }} className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-50 text-sm">
            {sidebarOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    );
  };

  var renderHeader = function() {
    return (
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <button className="lg:hidden" onClick={function() { setShowMobileMenu(!showMobileMenu); }}>
            <Menu size={24} />
          </button>
          <div className="relative">
            <Search size={18} className="absolute top-1/2 text-gray-400" style={{ transform: "translateY(-50%)", left: isRTL ? undefined : 12, right: isRTL ? 12 : undefined }} />
            <input
              value={searchQuery}
              onChange={function(e) { setSearchQuery(e.target.value); }}
              placeholder={t.search}
              className={"bg-gray-50 border border-gray-200 rounded-lg py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " + (isRTL ? "pr-10 pl-4" : "pl-10 pr-4")}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={function() { setLang(lang === "ar" ? "en" : "ar"); }} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-50 border border-gray-200">
            <Globe size={16} />{lang === "ar" ? "EN" : "\u0639\u0631\u0628\u064a"}
          </button>
          <div className="relative">
            <button onClick={function() { setNotifOpen(!notifOpen); }} className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-50">
              <Bell size={20} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </button>
            {notifOpen && (
              <div className={"absolute top-12 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50 " + (isRTL ? "left-0" : "right-0")}>
                <div className="p-3 border-b border-gray-100 font-semibold text-sm">{t.notifications}</div>
                {notifications.map(function(n) {
                  return (
                    <div key={n.id} className="p-3 border-b border-gray-50 hover:bg-gray-50 cursor-pointer flex gap-3">
                      <div className={"w-2 h-2 rounded-full mt-1.5 flex-shrink-0 " + (n.urgent ? "bg-red-500" : "bg-blue-500")}></div>
                      <div>
                        <p className="text-sm text-gray-700">{n.text}</p>
                        <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            {isRTL ? "\u0645" : "M"}
          </div>
        </div>
      </header>
    );
  };

  var renderDashboard = function() {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{t.welcome + (isRTL ? "\u060c \u0645\u062d\u0645\u062f" : ", Mohammed")}</h1>
            <p className="text-gray-500 text-sm mt-1">{isRTL ? "\u0625\u0644\u064a\u0643 \u0645\u0644\u062e\u0635 \u0627\u0644\u064a\u0648\u0645" : "Here is your daily summary"}</p>
          </div>
          <button onClick={function() { setPage("workOrders"); setShowNewOrder(true); }} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors">
            <Plus size={18} />{t.newOrder}
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={ClipboardList} label={t.totalOrders} value={statsTotal} change={12} color="bg-blue-600" onClick={function() { setPage("workOrders"); }} />
          <StatCard icon={Activity} label={t.activeOrders} value={statsActive} change={8} color="bg-amber-500" />
          <StatCard icon={CheckCircle} label={t.completedToday} value={statsCompleted} change={-3} color="bg-green-600" />
          <StatCard icon={Clock} label={t.avgResponse} value={"32 " + t.minutes} color="bg-purple-600" change={5} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800">{t.weeklyOverview}</h3>
              <span className="text-xs text-gray-400">{isRTL ? "\u0623\u0648\u0627\u0645\u0631 \u0627\u0644\u0639\u0645\u0644" : "Work Orders"}</span>
            </div>
            <MiniBarChart data={weekData} />
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">{t.quickActions}</h3>
            <div className="space-y-2">
              <button onClick={function() { setPage("workOrders"); setShowNewOrder(true); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border border-gray-100">
                <Plus size={18} />{t.newOrder}<ChevronRight size={16} className="text-gray-400" style={{ marginLeft: isRTL ? 0 : "auto", marginRight: isRTL ? "auto" : 0 }} />
              </button>
              <button onClick={function() { setPage("technicians"); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border border-gray-100">
                <Users size={18} />{t.technicians}<ChevronRight size={16} className="text-gray-400" style={{ marginLeft: isRTL ? 0 : "auto", marginRight: isRTL ? "auto" : 0 }} />
              </button>
              <button onClick={function() { setPage("reports"); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border border-gray-100">
                <BarChart3 size={18} />{t.reports}<ChevronRight size={16} className="text-gray-400" style={{ marginLeft: isRTL ? 0 : "auto", marginRight: isRTL ? "auto" : 0 }} />
              </button>
              <button onClick={function() { setPage("settings"); }} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors border border-gray-100">
                <Settings size={18} />{t.settings}<ChevronRight size={16} className="text-gray-400" style={{ marginLeft: isRTL ? 0 : "auto", marginRight: isRTL ? "auto" : 0 }} />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">{t.recentActivity}</h3>
            <button onClick={function() { setPage("workOrders"); }} className="text-blue-600 text-sm hover:underline">{t.viewAll}</button>
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
                {orders.slice(0, 5).map(function(o) {
                  return (
                    <tr key={o.id} onClick={function() { setPage("workOrders"); setSelectedOrder(o); }} className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer">
                      <td className="py-3 font-mono text-blue-600">{o.id}</td>
                      <td className="py-3">{lang === "ar" ? o.customer : o.customerEn}</td>
                      <td className="py-3"><PriorityBadge priority={o.priority} t={t} /></td>
                      <td className="py-3"><StatusBadge status={o.status} t={t} /></td>
                      <td className="py-3">{getTechName(o.tech)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  var renderWorkOrders = function() {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-2xl font-bold text-gray-900">{t.workOrders}</h1>
          <button onClick={function() { setShowNewOrder(true); }} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-blue-700">
            <Plus size={18} />{t.newOrder}
          </button>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <select value={statusFilter} onChange={function(e) { setStatusFilter(e.target.value); }} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all">{t.allStatuses}</option>
            <option value="pending">{t.pending}</option>
            <option value="inProgress">{t.inProgress}</option>
            <option value="completed">{t.completed}</option>
            <option value="cancelled">{t.cancelled}</option>
          </select>
          <select value={priorityFilter} onChange={function(e) { setPriorityFilter(e.target.value); }} className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
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
                {filteredOrders.map(function(o) {
                  return (
                    <tr key={o.id} className="border-b border-gray-50 hover:bg-blue-50 transition-colors">
                      <td className="p-4 font-mono text-blue-600 cursor-pointer" onClick={function() { setSelectedOrder(o); }}>{o.id}</td>
                      <td className="p-4">{lang === "ar" ? o.customer : o.customerEn}</td>
                      <td className="p-4">{t[o.type] || o.type}</td>
                      <td className="p-4"><PriorityBadge priority={o.priority} t={t} /></td>
                      <td className="p-4"><StatusBadge status={o.status} t={t} /></td>
                      <td className="p-4">{getTechName(o.tech)}</td>
                      <td className="p-4 text-gray-500">{o.date}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          <button onClick={function() { setSelectedOrder(o); }} className="p-1.5 rounded hover:bg-blue-100 text-blue-600"><Eye size={16} /></button>
                          <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500"><Edit size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
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
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4" onClick={function() { setSelectedOrder(null); }}>
            <div className="bg-white rounded-2xl w-full max-w-lg max-h-screen overflow-y-auto shadow-2xl" onClick={function(e) { e.stopPropagation(); }}>
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">{t.orderDetails}</h2>
                  <p className="text-sm text-blue-600 font-mono">{selectedOrder.id}</p>
                </div>
                <button onClick={function() { setSelectedOrder(null); }} className="p-2 rounded-lg hover:bg-gray-100"><X size={20} /></button>
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
                  <button onClick={function() { setSelectedOrder(null); }} className="flex-1 border border-gray-200 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{t.close}</button>
                </div>
              </div>
            </div>
          </div>
        )}
        {showNewOrder && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4" onClick={function() { setShowNewOrder(false); }}>
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl" onClick={function(e) { e.stopPropagation(); }}>
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-bold">{t.createWorkOrder}</h2>
                <button onClick={function() { setShowNewOrder(false); }} className="p-2 rounded-lg hover:bg-gray-100"><X size={20} /></button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{t.customer}</label>
                  <input value={newCust} onChange={function(e) { setNewCust(e.target.value); }} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{t.location}</label>
                  <input value={newLoc} onChange={function(e) { setNewLoc(e.target.value); }} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">{t.type}</label>
                    <select value={newType} onChange={function(e) { setNewType(e.target.value); }} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white">
                      <option value="maintenance">{t.maintenance}</option>
                      <option value="repair">{t.repair}</option>
                      <option value="installation">{t.installation}</option>
                      <option value="inspection">{t.inspection}</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">{t.priority}</label>
                    <select value={newPrio} onChange={function(e) { setNewPrio(e.target.value); }} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white">
                      <option value="low">{t.low}</option>
                      <option value="medium">{t.medium}</option>
                      <option value="high">{t.high}</option>
                      <option value="urgent">{t.urgent}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">{t.description}</label>
                  <textarea value={newDesc} onChange={function(e) { setNewDesc(e.target.value); }} rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <div className="flex gap-2 pt-2">
                  <button onClick={handleCreateOrder} className="flex-1 bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700">{t.submit}</button>
                  <button onClick={function() { setShowNewOrder(false); }} className="flex-1 border border-gray-200 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">{t.cancel}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  var renderTechnicians = function() {
    var availCount = sampleTechnicians.filter(function(tc) { return tc.status === "available"; }).length;
    var onJobCount = sampleTechnicians.filter(function(tc) { return tc.status === "onJob"; }).length;
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{t.technicians}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard icon={Users} label={t.totalTechnicians} value={sampleTechnicians.length} color="bg-blue-600" />
          <StatCard icon={CheckCircle} label={t.available} value={availCount} color="bg-green-600" />
          <StatCard icon={Truck} label={t.onJob} value={onJobCount} color="bg-amber-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {sampleTechnicians.map(function(tech) {
            var statusLabel = t.available;
            var statusEmoji = "\u2705";
            if (tech.status === "onJob") { statusLabel = t.onJob; statusEmoji = "\uD83D\uDD35"; }
            else if (tech.status === "offline") { statusLabel = t.offline; statusEmoji = "\u26AB"; }
            return (
              <div key={tech.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">{tech.avatar}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{lang === "ar" ? tech.name : tech.nameEn}</h3>
                    <p className="text-sm text-gray-500">{lang === "ar" ? tech.spec : tech.specEn}</p>
                  </div>
                  <TechStatusDot status={tech.status} />
                </div>
                <div className="grid grid-cols-3 gap-3 text-center pt-3 border-t border-gray-100">
                  <div><p className="text-lg font-bold text-gray-900">{tech.jobs}</p><p className="text-xs text-gray-500">{t.jobsCompleted}</p></div>
                  <div><p className="text-lg font-bold text-gray-900">{tech.rating}</p><p className="text-xs text-gray-500">{t.rating}</p></div>
                  <div><p className="text-lg font-bold text-gray-900">{statusEmoji}</p><p className="text-xs text-gray-500">{statusLabel}</p></div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 border border-gray-200 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-1">
                    <Phone size={14} />{isRTL ? "\u0627\u062a\u0635\u0627\u0644" : "Call"}
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center justify-center gap-1">
                    <ClipboardList size={14} />{isRTL ? "\u062a\u0639\u064a\u064a\u0646 \u0645\u0647\u0645\u0629" : "Assign"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  var renderReports = function() {
    var pendingCount = orders.filter(function(o) { return o.status === "pending"; }).length;
    var inProgCount = orders.filter(function(o) { return o.status === "inProgress"; }).length;
    var compCount = orders.filter(function(o) { return o.status === "completed"; }).length;
    var total = pendingCount + inProgCount + compCount;
    if (total === 0) total = 1;

    var sortedTechs = sampleTechnicians.slice().sort(function(a, b) { return b.rating - a.rating; }).slice(0, 3);

    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">{t.reports}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-800 mb-4">{isRTL ? "\u062a\u0648\u0632\u064a\u0639 \u0627\u0644\u062d\u0627\u0644\u0627\u062a" : "Status Distribution"}</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{t.pending}</span><span className="font-medium">{pendingCount}</span></div>
                <div className="w-full bg-gray-100 rounded-full h-3"><div className="h-3 rounded-full bg-yellow-500 transition-all" style={{ width: Math.round((pendingCount / total) * 100) + "%" }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{t.inProgress}</span><span className="font-medium">{inProgCount}</span></div>
                <div className="w-full bg-gray-100 rounded-full h-3"><div className="h-3 rounded-full bg-blue-500 transition-all" style={{ width: Math.round((inProgCount / total) * 100) + "%" }}></div></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1"><span className="text-gray-600">{t.completed}</span><span className="font-medium">{compCount}</span></div>
                <div className="w-full bg-gray-100 rounded-full h-3"><div className="h-3 rounded-full bg-green-500 transition-all" style={{ width: Math.round((compCount / total) * 100) + "%" }}></div></div>
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
              {sortedTechs.map(function(tech, i) {
                var badgeColor = "bg-amber-600";
                if (i === 0) badgeColor = "bg-yellow-500";
                else if (i === 1) badgeColor = "bg-gray-400";
                return (
                  <div key={tech.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className={"w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold " + badgeColor}>{i + 1}</span>
                    <div className="flex-1"><p className="font-medium text-sm">{lang === "ar" ? tech.name : tech.nameEn}</p><p className="text-xs text-gray-500">{tech.jobs + " " + t.jobsCompleted}</p></div>
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
                {[1, 2, 3, 4, 5].map(function(s) {
                  return <Star key={s} size={20} className="text-yellow-500" style={{ fill: s <= 4 ? "#eab308" : "#fef08a" }} />;
                })}
              </div>
              <p className="text-sm text-gray-500 mt-2">{isRTL ? "\u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 847 \u062a\u0642\u064a\u064a\u0645" : "Based on 847 reviews"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  var renderSettings = function() {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">{t.settings}</h1>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Globe size={20} className="text-gray-500" />
              <div><p className="font-medium">{t.language}</p><p className="text-sm text-gray-500">{lang === "ar" ? "\u0627\u0644\u0639\u0631\u0628\u064a\u0629" : "English"}</p></div>
            </div>
            <button onClick={function() { setLang(lang === "ar" ? "en" : "ar"); }} className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">
              {lang === "ar" ? "English" : "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"}
            </button>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <Bell size={20} className="text-gray-500" />
              <div><p className="font-medium">{t.notifications}</p><p className="text-sm text-gray-500">{isRTL ? "\u0625\u062f\u0627\u0631\u0629 \u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a" : "Manage notification alerts"}</p></div>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-gray-50">{isRTL ? "\u062a\u0639\u062f\u064a\u0644" : "Configure"}</button>
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
  };

  var renderPlaceholder = function(title) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <Layers size={64} className="mb-4 opacity-30" />
        <h2 className="text-xl font-semibold text-gray-600">{title}</h2>
        <p className="text-sm mt-2">{isRTL ? "\u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629 \u0642\u064a\u062f \u0627\u0644\u062a\u0637\u0648\u064a\u0631" : "This page is under development"}</p>
      </div>
    );
  };

  var renderPage = function() {
    if (page === "dashboard") return renderDashboard();
    if (page === "workOrders") return renderWorkOrders();
    if (page === "technicians") return renderTechnicians();
    if (page === "reports") return renderReports();
    if (page === "settings") return renderSettings();
    return renderPlaceholder(t[page] || page);
  };

  return (
    <div dir={dir} className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: fontFamily }}>
      <div className="hidden lg:block">{renderSidebar()}</div>
      {showMobileMenu && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-30" onClick={function() { setShowMobileMenu(false); }}></div>
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
