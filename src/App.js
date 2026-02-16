import React, { useState, useEffect, createContext, useContext } from 'react';
import { Calendar, Users, FileText, Settings, Clock, MapPin, Phone, Camera, Download, Filter, Search, Plus, Edit, Save, X, CheckCircle, AlertCircle, XCircle, Upload, Eye, MessageCircle, ExternalLink, LogOut, UserPlus, Lock, User, Shield, Globe } from 'lucide-react';

// LANGUAGE CONTEXT AND TRANSLATIONS
const LanguageContext = createContext();

const translations = {
  ar: {
    // Navigation & Header
    systemTitle: 'نظام إدارة الخدمات الميدانية',
    version: 'الإصدار 2.1',
    dashboard: 'لوحة التحكم',
    appointments: 'المواعيد',
    tickets: 'التذاكر',
    reports: 'التقارير',
    users: 'المستخدمين',
    logout: 'خروج',
    online: 'متصل',
    admin: 'مدير النظام',
    technician: 'تقني',

    // Authentication
    login: 'تسجيل دخول',
    register: 'إنشاء حساب',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    email: 'البريد الإلكتروني',
    fullName: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    accountType: 'نوع الحساب',
    zone: 'المنطقة',
    demoCredentials: 'بيانات تجريبية للدخول:',
    adminCredentials: 'مدير: admin / admin123',
    techCredentials: 'تقني: ahmed / tech123',
    enterUsername: 'أدخل اسم المستخدم',
    enterPassword: 'أدخل كلمة المرور',
    enterFullName: 'أدخل اسمك الكامل',
    chooseUsername: 'اختر اسم مستخدم',
    enterStrongPassword: 'أدخل كلمة مرور قوية',
    welcomeToSystem: 'مرحباً بك في النظام',

    // Dashboard
    dashboardOverview: 'نظرة عامة على أنشطة الخدمات الميدانية',
    adminDashboard: 'لوحة تحكم المدير',
    systemOverview: 'نظرة عامة على جميع أنشطة النظام',
    openTickets: 'تذاكر مفتوحة',
    pendingTickets: 'تذاكر معلقة',
    todayAppointments: 'مواعيد اليوم',
    weeklyTickets: 'التذاكر الأسبوعية',
    totalUsers: 'إجمالي المستخدمين',
    activeTechnicians: 'التقنيين النشطين',
    totalTickets: 'إجمالي التذاكر',
    systemStatus: 'حالة النظام',
    systemReady: 'جاهزية النظام',
    weeklyTicketLimit: 'حد التذاكر الأسبوعية',
    dailyAppointmentLimit: 'حد المواعيد اليومية',
    approachingLimit: 'اقتراب من الحد الأقصى للتذاكر الأسبوعية',
    manyOpenTickets: 'عدد كبير من التذاكر المفتوحة',

    // Tickets
    ticketsManagement: 'إدارة تذاكر الخدمة والمشاكل',
    allSystemTickets: 'جميع تذاكر الخدمة في النظام',
    newTicket: 'تذكرة جديدة',
    createNewTicket: 'إنشاء تذكرة جديدة',
    deviceSerial: 'رقم الجهاز التسلسلي',
    clientPhone: 'رقم هاتف العميل',
    problemDescription: 'وصف المشكلة',
    enterDeviceSerial: 'أدخل رقم الجهاز التسلسلي',
    enterClientPhone: '+966xxxxxxxxx',
    describeProblem: 'وصف المشكلة...',
    whatsappAutoSent: 'سيتم إرسال رسالة واتساب تلقائياً للعميل',
    createTicket: 'إنشاء التذكرة',
    cancel: 'إلغاء',
    createdDate: 'تاريخ الإنشاء',
    deviceNumber: 'رقم الجهاز',
    clientPhoneNumber: 'هاتف العميل',
    description: 'الوصف',
    images: 'الصور',
    addImages: 'إضافة صور',
    whatsapp: 'واتساب',
    pending: 'معلق',
    close: 'إغلاق',
    reopen: 'إعادة فتح',
    closed: 'مغلق',
    open: 'مفتوحة',
    noTickets: 'لا توجد تذاكر',
    createFirstTicket: 'أنشئ تذكرتك الأولى للبدء',
    noSystemTickets: 'لا توجد تذاكر في النظام',

    // Appointments
    appointmentsManagement: 'إدارة مواعيدك المجدولة',
    allSystemAppointments: 'جميع المواعيد في النظام',
    newAppointment: 'موعد جديد',
    dateAndTime: 'التاريخ والوقت',
    client: 'العميل',
    type: 'النوع',
    status: 'الحالة',
    technician: 'التقني',
    deviceSerialNumber: 'رقم الجهاز',
    installation: 'تركيب',
    maintenance: 'صيانة',
    repair: 'إصلاح',
    inspection: 'فحص',
    completed: 'مكتمل',
    scheduled: 'مجدول',
    cancelled: 'ملغي',
    unknown: 'غير معروف',
    notSpecified: 'غير محدد',
    noAppointments: 'لا توجد مواعيد',

    // Reports
    weeklyReports: 'التقارير الأسبوعية',
    generateReports: 'إنشاء وتصدير التقارير الأسبوعية للمواعيد',
    adminReports: 'إنشاء تقارير لجميع التقنيين',
    generateWeeklyReport: 'إنشاء تقرير أسبوعي',
    weekStarting: 'الأسبوع الذي يبدأ (الاثنين)',
    selectTechnician: 'التقني (اختياري - اتركه فارغ للتقرير الشامل)',
    allTechnicians: 'جميع التقنيين',
    generateReport: 'إنشاء التقرير',
    generating: 'جاري الإنشاء...',
    weeklyReportTitle: 'التقرير الأسبوعي',
    to: 'إلى',
    generatedOn: 'تم الإنشاء في',
    total: 'المجموع',
    completedCount: 'المكتمل',
    completionRate: 'معدل الإنجاز',
    exportExcel: 'تصدير Excel',
    date: 'التاريخ',
    appointmentType: 'نوع الموعد',
    appointmentStatus: 'حالة الموعد',
    technicianName: 'اسم التقني',
    notes: 'ملاحظات',
    noAppointmentsForWeek: 'لا توجد مواعيد للأسبوع المحدد',
    other: 'أخرى',

    // User Management
    userManagement: 'إدارة المستخدمين',
    manageAccounts: 'إدارة حسابات التقنيين والمديرين',
    addUser: 'إضافة مستخدم',
    addNewUser: 'إضافة مستخدم جديد',
    user: 'المستخدم',
    role: 'الدور',
    region: 'المنطقة',
    active: 'نشط',
    inactive: 'غير نشط',
    manager: 'مدير',
    north: 'الشمال',
    south: 'الجنوب',
    east: 'الشرق',
    west: 'الغرب',
    central: 'الوسط',

    // Common
    save: 'حفظ',
    edit: 'تعديل',
    delete: 'حذف',
    search: 'بحث',
    filter: 'تصفية',
    export: 'تصدير',
    import: 'استيراد',
    settings: 'إعدادات',
    loading: 'جاري التحميل...',
    error: 'خطأ',
    success: 'نجح',
    warning: 'تحذير',
    info: 'معلومات',
    required: 'مطلوب',

    // Messages
    loginSuccessful: 'تم تسجيل الدخول بنجاح',
    accountCreated: 'تم إنشاء الحساب بنجاح. يمكنك تسجيل الدخول الآن',
    logoutSuccessful: 'تم تسجيل الخروج بنجاح',
    logoutError: 'حدث خطأ أثناء تسجيل الخروج',
    ticketCreatedWhatsapp: 'تم إنشاء التذكرة وإرسال رسالة واتساب للعميل',
    ticketStatusUpdated: 'تم تحديث حالة التذكرة إلى',
    imagesUploaded: 'تم رفع الصور بنجاح',
    reportGenerated: 'تم إنشاء التقرير بنجاح',
    reportExported: 'تم تصدير التقرير بنجاح',
    userCreated: 'تم إنشاء المستخدم بنجاح',
    dataLoadError: 'خطأ في تحميل البيانات',
    appointmentsLoadError: 'خطأ في تحميل المواعيد',
    ticketsLoadError: 'خطأ في تحميل التذاكر',
    reportGenerationError: 'فشل في إنشاء التقرير',
    reportExportError: 'فشل في تصدير التقرير',
    selectWeek: 'يرجى اختيار أسبوع',
    selectTechnicianOrLeaveEmpty: 'يرجى اختيار تقني أو ترك الحقل فارغ لتقرير شامل',
    noReportToExport: 'لا يوجد تقرير للتصدير',
    featureInDevelopment: 'ميزة إضافة موعد جديد قيد التطوير',
    
    // Validation Messages
    usernameRequired: 'اسم المستخدم مطلوب',
    passwordRequired: 'كلمة المرور مطلوبة',
    allDataRequired: 'يرجى إدخال جميع البيانات المطلوبة',
    invalidUsername: 'اسم المستخدم غير صحيح',
    invalidPassword: 'كلمة المرور غير صحيحة',
    accountInactive: 'الحساب غير نشط',
    usernameMinLength: 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل',
    passwordMinLength: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
    usernameExists: 'اسم المستخدم موجود بالفعل',
    emailExists: 'البريد الإلكتروني موجود بالفعل',
    deviceSerialRequired: 'رقم الجهاز مطلوب',
    phoneRequired: 'رقم الهاتف مطلوب',
    validSaudiPhone: 'يرجى إدخال رقم هاتف سعودي صحيح',
    weeklyTicketLimitReached: 'تم الوصول للحد الأقصى من التذاكر الأسبوعية (30 تذكرة)',
    ticketNotFound: 'التذكرة غير موجودة',
    unauthorizedEdit: 'غير مخول: لا يمكن تعديل تذكرة تقني آخر',
    unauthorized: 'غير مخول',
    invalidStatusTransition: 'انتقال حالة غير صالح من',
    imageFilesOnly: 'يُسمح بملفات الصور فقط',
    imageSizeLimit: 'حجم الصورة يجب أن يكون أقل من 5 ميجابايت'
  },
  
  en: {
    // Navigation & Header
    systemTitle: 'Field Service Management System',
    version: 'Version 2.1',
    dashboard: 'Dashboard',
    appointments: 'Appointments',
    tickets: 'Tickets',
    reports: 'Reports',
    users: 'Users',
    logout: 'Logout',
    online: 'Online',
    admin: 'System Admin',
    technician: 'Technician',

    // Authentication
    login: 'Login',
    register: 'Register',
    username: 'Username',
    password: 'Password',
    email: 'Email',
    fullName: 'Full Name',
    phone: 'Phone Number',
    accountType: 'Account Type',
    zone: 'Zone',
    demoCredentials: 'Demo Login Credentials:',
    adminCredentials: 'Admin: admin / admin123',
    techCredentials: 'Tech: ahmed / tech123',
    enterUsername: 'Enter username',
    enterPassword: 'Enter password',
    enterFullName: 'Enter your full name',
    chooseUsername: 'Choose a username',
    enterStrongPassword: 'Enter a strong password',
    welcomeToSystem: 'Welcome to the System',

    // Dashboard
    dashboardOverview: 'Overview of field service activities',
    adminDashboard: 'Admin Dashboard',
    systemOverview: 'Overview of all system activities',
    openTickets: 'Open Tickets',
    pendingTickets: 'Pending Tickets',
    todayAppointments: 'Today\'s Appointments',
    weeklyTickets: 'Weekly Tickets',
    totalUsers: 'Total Users',
    activeTechnicians: 'Active Technicians',
    totalTickets: 'Total Tickets',
    systemStatus: 'System Status',
    systemReady: 'System Ready',
    weeklyTicketLimit: 'Weekly Ticket Limit',
    dailyAppointmentLimit: 'Daily Appointment Limit',
    approachingLimit: 'Approaching weekly ticket limit',
    manyOpenTickets: 'Many open tickets',

    // Tickets
    ticketsManagement: 'Manage service tickets and issues',
    allSystemTickets: 'All service tickets in the system',
    newTicket: 'New Ticket',
    createNewTicket: 'Create New Ticket',
    deviceSerial: 'Device Serial Number',
    clientPhone: 'Client Phone Number',
    problemDescription: 'Problem Description',
    enterDeviceSerial: 'Enter device serial number',
    enterClientPhone: '+966xxxxxxxxx',
    describeProblem: 'Describe the problem...',
    whatsappAutoSent: 'WhatsApp message will be sent automatically to client',
    createTicket: 'Create Ticket',
    cancel: 'Cancel',
    createdDate: 'Created Date',
    deviceNumber: 'Device Number',
    clientPhoneNumber: 'Client Phone',
    description: 'Description',
    images: 'Images',
    addImages: 'Add Images',
    whatsapp: 'WhatsApp',
    pending: 'Pending',
    close: 'Close',
    reopen: 'Reopen',
    closed: 'Closed',
    open: 'Open',
    noTickets: 'No tickets found',
    createFirstTicket: 'Create your first ticket to get started',
    noSystemTickets: 'No tickets in the system',

    // Appointments
    appointmentsManagement: 'Manage your scheduled appointments',
    allSystemAppointments: 'All appointments in the system',
    newAppointment: 'New Appointment',
    dateAndTime: 'Date & Time',
    client: 'Client',
    type: 'Type',
    status: 'Status',
    technician: 'Technician',
    deviceSerialNumber: 'Device Serial',
    installation: 'Installation',
    maintenance: 'Maintenance',
    repair: 'Repair',
    inspection: 'Inspection',
    completed: 'Completed',
    scheduled: 'Scheduled',
    cancelled: 'Cancelled',
    unknown: 'Unknown',
    notSpecified: 'Not Specified',
    noAppointments: 'No appointments found',

    // Reports
    weeklyReports: 'Weekly Reports',
    generateReports: 'Generate and export weekly appointment reports',
    adminReports: 'Generate reports for all technicians',
    generateWeeklyReport: 'Generate Weekly Report',
    weekStarting: 'Week Starting (Monday)',
    selectTechnician: 'Technician (optional - leave empty for comprehensive report)',
    allTechnicians: 'All Technicians',
    generateReport: 'Generate Report',
    generating: 'Generating...',
    weeklyReportTitle: 'Weekly Report',
    to: 'to',
    generatedOn: 'Generated on',
    total: 'Total',
    completedCount: 'Completed',
    completionRate: 'Completion Rate',
    exportExcel: 'Export Excel',
    date: 'Date',
    appointmentType: 'Type',
    appointmentStatus: 'Status',
    technicianName: 'Technician',
    notes: 'Notes',
    noAppointmentsForWeek: 'No appointments for the selected week',
    other: 'Other',

    // User Management
    userManagement: 'User Management',
    manageAccounts: 'Manage technician and admin accounts',
    addUser: 'Add User',
    addNewUser: 'Add New User',
    user: 'User',
    role: 'Role',
    region: 'Region',
    active: 'Active',
    inactive: 'Inactive',
    manager: 'Manager',
    north: 'North',
    south: 'South',
    east: 'East',
    west: 'West',
    central: 'Central',

    // Common
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    search: 'Search',
    filter: 'Filter',
    export: 'Export',
    import: 'Import',
    settings: 'Settings',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
    required: 'Required',

    // Messages
    loginSuccessful: 'Login successful',
    accountCreated: 'Account created successfully. You can now login',
    logoutSuccessful: 'Logout successful',
    logoutError: 'Error during logout',
    ticketCreatedWhatsapp: 'Ticket created and WhatsApp message sent to client',
    ticketStatusUpdated: 'Ticket status updated to',
    imagesUploaded: 'Images uploaded successfully',
    reportGenerated: 'Report generated successfully',
    reportExported: 'Report exported successfully',
    userCreated: 'User created successfully',
    dataLoadError: 'Error loading data',
    appointmentsLoadError: 'Error loading appointments',
    ticketsLoadError: 'Error loading tickets',
    reportGenerationError: 'Failed to generate report',
    reportExportError: 'Failed to export report',
    selectWeek: 'Please select a week',
    selectTechnicianOrLeaveEmpty: 'Please select a technician or leave empty for comprehensive report',
    noReportToExport: 'No report to export',
    featureInDevelopment: 'New appointment feature is under development',
    
    // Validation Messages
    usernameRequired: 'Username is required',
    passwordRequired: 'Password is required',
    allDataRequired: 'Please enter all required data',
    invalidUsername: 'Invalid username',
    invalidPassword: 'Invalid password',
    accountInactive: 'Account is inactive',
    usernameMinLength: 'Username must be at least 3 characters',
    passwordMinLength: 'Password must be at least 6 characters',
    usernameExists: 'Username already exists',
    emailExists: 'Email already exists',
    deviceSerialRequired: 'Device serial is required',
    phoneRequired: 'Phone number is required',
    validSaudiPhone: 'Please enter a valid Saudi phone number',
    weeklyTicketLimitReached: 'Weekly ticket limit reached (30 tickets)',
    ticketNotFound: 'Ticket not found',
    unauthorizedEdit: 'Unauthorized: Cannot edit another technician\'s ticket',
    unauthorized: 'Unauthorized',
    invalidStatusTransition: 'Invalid status transition from',
    imageFilesOnly: 'Only image files are allowed',
    imageSizeLimit: 'Image size must be less than 5MB'
  }
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('fsm_language');
    return saved || 'ar';
  });
  
  const [direction, setDirection] = useState(() => {
    const saved = localStorage.getItem('fsm_language');
    return (saved === 'en') ? 'ltr' : 'rtl';
  });

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    setDirection(newLang === 'en' ? 'ltr' : 'rtl');
    localStorage.setItem('fsm_language', newLang);
    
    // Update document direction and font
    document.documentElement.dir = newLang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = newLang;
    document.body.style.fontFamily = newLang === 'en' ? 
      'Calibri, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' : 
      '"Noto Sans Arabic", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    // Set initial direction and font
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    document.body.style.fontFamily = language === 'en' ? 
      'Calibri, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif' : 
      '"Noto Sans Arabic", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// PRODUCTION DATA STORE WITH AUTHENTICATION
class ProductionDataStore {
  constructor() {
    this.users = new Map();
    this.sessions = new Map();
    this.technicians = new Map();
    this.appointments = new Map();
    this.tickets = new Map();
    this.weeklyReports = new Map();
    this.imageStorage = new Map();
    this.conflictLog = new Map();
    this.auditLog = [];
    this.initialize();
  }

  initialize() {
    // Initialize users with login credentials
    const userData = [
      // ADMIN USER - Full Access
      { 
        id: 'ADMIN001', 
        username: 'admin', 
        password: 'admin123', 
        email: 'admin@company.com', 
        role: 'admin',
        name: 'مدير النظام',
        phone: '+966555000001',
        status: 'active'
      },
      // TECHNICIAN USERS
      { 
        id: 'TECH001', 
        username: 'ahmed', 
        password: 'tech123', 
        email: 'ahmed@company.com', 
        role: 'technician',
        name: 'أحمد محمد', 
        phone: '+966555001001', 
        status: 'active', 
        zone: 'north'
      },
      { 
        id: 'TECH002', 
        username: 'sara', 
        password: 'tech123', 
        email: 'sara@company.com', 
        role: 'technician',
        name: 'سارة أحمد', 
        phone: '+966555001002', 
        status: 'active', 
        zone: 'south'
      },
      { 
        id: 'TECH003', 
        username: 'mohammed', 
        password: 'tech123', 
        email: 'mohammed@company.com', 
        role: 'technician',
        name: 'محمد علي', 
        phone: '+966555001003', 
        status: 'active', 
        zone: 'east'
      }
    ];
    userData.forEach(user => this.users.set(user.id, user));

    // Copy technician data for compatibility
    userData.filter(user => user.role === 'technician').forEach(tech => {
      this.technicians.set(tech.id, {
        id: tech.id,
        name: tech.name,
        email: tech.email,
        phone: tech.phone,
        status: tech.status,
        zone: tech.zone
      });
    });

    // Sample appointments with Saudi data
    const sampleAppointments = [
      {
        id: 'APT001', technicianId: 'TECH001', date: '2026-02-17', time: '09:00',
        type: 'installation', status: 'scheduled', clientName: 'شركة الرياض للتقنية',
        clientPhone: '+966555200001', address: 'الرياض - حي النخيل',
        deviceSerial: 'SAU-2026-001', notes: 'تركيب نظام جديد',
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        id: 'APT002', technicianId: 'TECH002', date: '2026-02-18', time: '14:00',
        type: 'maintenance', status: 'completed', clientName: 'مؤسسة جدة التجارية',
        clientPhone: '+966555200002', address: 'جدة - حي الصفا',
        deviceSerial: 'SAU-2025-089', notes: 'صيانة دورية',
        maintenanceStatus: 'completed', maintenanceReason: 'scheduled_maintenance',
        maintenanceResult: 'all_systems_operational', createdAt: new Date(), updatedAt: new Date()
      }
    ];
    sampleAppointments.forEach(apt => this.appointments.set(apt.id, apt));

    // Sample tickets
    const sampleTickets = [
      {
        id: 'TKT001', technicianId: 'TECH001', deviceSerial: 'SAU-2025-089',
        clientPhone: '+966555200002', ticketDate: '2026-02-16', status: 'open',
        description: 'النظام يظهر رسالة خطأ 404', images: ['img_001.jpg', 'img_002.jpg'],
        whatsappSent: true, whatsappUrl: 'https://wa.me/966555200002?text=تم إنشاء تذكرة صيانة رقم TKT001',
        createdAt: new Date(), updatedAt: new Date()
      }
    ];
    sampleTickets.forEach(ticket => this.tickets.set(ticket.id, ticket));

    // Initialize image storage
    this.imageStorage.set('img_001.jpg', { filename: 'error_display.jpg', size: 1024576, uploadedAt: new Date() });
    this.imageStorage.set('img_002.jpg', { filename: 'system_panel.jpg', size: 892341, uploadedAt: new Date() });
  }

  // AUTHENTICATION METHODS
  login(username, password) {
    try {
      const user = Array.from(this.users.values()).find(u => u.username === username);
      if (!user) {
        throw new Error('اسم المستخدم غير صحيح');
      }
      
      if (user.password !== password) {
        throw new Error('كلمة المرور غير صحيحة');
      }
      
      if (user.status !== 'active') {
        throw new Error('الحساب غير نشط');
      }

      // Create session
      const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const session = {
        sessionId,
        userId: user.id,
        username: user.username,
        role: user.role,
        name: user.name,
        loginTime: new Date(),
        lastActivity: new Date()
      };
      
      this.sessions.set(sessionId, session);
      
      // Update last login
      user.lastLogin = new Date();
      this.users.set(user.id, user);
      
      // Audit log
      this.auditLog.push({
        action: 'user_login',
        userId: user.id,
        username: user.username,
        timestamp: new Date()
      });

      return { success: true, session, user: { ...user, password: undefined } };
    } catch (error) {
      this.auditLog.push({
        action: 'login_failed',
        username,
        error: error.message,
        timestamp: new Date()
      });
      throw error;
    }
  }

  register(userData) {
    try {
      // Validation
      if (!userData.username || userData.username.length < 3) {
        throw new Error('اسم المستخدم يجب أن يكون 3 أحرف على الأقل');
      }
      
      if (!userData.password || userData.password.length < 6) {
        throw new Error('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
      }
      
      if (!userData.name || !userData.email || !userData.phone) {
        throw new Error('جميع البيانات مطلوبة');
      }

      // Check if username exists
      const existingUser = Array.from(this.users.values()).find(u => u.username === userData.username);
      if (existingUser) {
        throw new Error('اسم المستخدم موجود بالفعل');
      }

      // Check if email exists
      const existingEmail = Array.from(this.users.values()).find(u => u.email === userData.email);
      if (existingEmail) {
        throw new Error('البريد الإلكتروني موجود بالفعل');
      }

      // Create new user
      const userId = userData.role === 'admin' ? 
        `ADMIN${String(this.users.size + 1).padStart(3, '0')}` : 
        `TECH${String(this.users.size + 1).padStart(3, '0')}`;
      
      const newUser = {
        id: userId,
        username: userData.username,
        password: userData.password,
        email: userData.email,
        role: userData.role || 'technician',
        name: userData.name,
        phone: userData.phone,
        status: 'active',
        zone: userData.zone || 'central',
        createdAt: new Date(),
        lastLogin: null
      };

      this.users.set(userId, newUser);
      
      // If technician, add to technicians map
      if (newUser.role === 'technician') {
        this.technicians.set(userId, {
          id: userId,
          name: newUser.name,
          email: newUser.email,
          phone: newUser.phone,
          status: newUser.status,
          zone: newUser.zone
        });
      }

      // Audit log
      this.auditLog.push({
        action: 'user_registered',
        userId,
        username: userData.username,
        role: newUser.role,
        timestamp: new Date()
      });

      return { success: true, user: { ...newUser, password: undefined } };
    } catch (error) {
      throw error;
    }
  }

  logout(sessionId) {
    try {
      const session = this.sessions.get(sessionId);
      if (session) {
        this.auditLog.push({
          action: 'user_logout',
          userId: session.userId,
          username: session.username,
          timestamp: new Date()
        });
        this.sessions.delete(sessionId);
      }
      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  validateSession(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) return null;
    
    // Update last activity
    session.lastActivity = new Date();
    this.sessions.set(sessionId, session);
    
    return session;
  }

  // EXISTING METHODS (Updated for compatibility)
  getTechnician(id) {
    return this.technicians.get(id);
  }

  getAllTechnicians() {
    return Array.from(this.technicians.values());
  }

  getAllUsers() {
    return Array.from(this.users.values()).map(user => ({ ...user, password: undefined }));
  }

  getTicketsByTechnician(technicianId) {
    return Array.from(this.tickets.values()).filter(ticket => ticket.technicianId === technicianId);
  }

  getAllTickets() {
    return Array.from(this.tickets.values());
  }

  getAllAppointments() {
    return Array.from(this.appointments.values());
  }

  // CONFLICT PREVENTION SYSTEM
  checkAppointmentConflicts(technicianId, date, time, excludeId = null) {
    const conflicts = [];
    const existingAppointments = Array.from(this.appointments.values())
      .filter(apt => apt.id !== excludeId && apt.technicianId === technicianId && apt.date === date);

    // Time slot conflicts (1-hour buffer)
    const requestedTime = new Date(`2000-01-01 ${time}`);
    existingAppointments.forEach(apt => {
      const existingTime = new Date(`2000-01-01 ${apt.time}`);
      const timeDiff = Math.abs(requestedTime - existingTime) / (1000 * 60); // minutes
      
      if (timeDiff < 60) {
        conflicts.push({
          type: 'time_conflict',
          conflictingAppointment: apt.id,
          suggestedTimes: this.suggestAlternativeTimes(technicianId, date, time)
        });
      }
    });

    // Daily capacity check (max 8 appointments per day)
    if (existingAppointments.length >= 8) {
      conflicts.push({
        type: 'capacity_exceeded',
        currentCount: existingAppointments.length,
        maxCapacity: 8
      });
    }

    return conflicts;
  }

  suggestAlternativeTimes(technicianId, date, preferredTime) {
    const workingHours = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
    const existingTimes = Array.from(this.appointments.values())
      .filter(apt => apt.technicianId === technicianId && apt.date === date)
      .map(apt => apt.time);

    return workingHours.filter(time => !existingTimes.includes(time)).slice(0, 3);
  }

  // WHATSAPP INTEGRATION
  sendWhatsAppNotification(clientPhone, ticketId, message = null) {
    try {
      const cleanPhone = clientPhone.replace(/[^0-9]/g, '');
      const defaultMessage = `تم إنشاء تذكرة صيانة رقم ${ticketId}. سيتم التواصل معكم قريباً لتحديد موعد الزيارة.`;
      const finalMessage = message || defaultMessage;
      const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(finalMessage)}`;
      
      // Auto-open WhatsApp (simulated)
      if (typeof window !== 'undefined') {
        window.open(whatsappUrl, '_blank');
      }
      
      return whatsappUrl;
    } catch (error) {
      console.error('WhatsApp notification error:', error);
      return null;
    }
  }

  // TICKET OPERATIONS WITH WHATSAPP
  createTicket(ticketData, technicianId) {
    try {
      // Validation
      if (!ticketData.deviceSerial || !ticketData.deviceSerial.trim()) {
        throw new Error('رقم الجهاز مطلوب');
      }
      if (!ticketData.clientPhone || !ticketData.clientPhone.trim()) {
        throw new Error('رقم الهاتف مطلوب');
      }

      // Phone validation (Saudi format)
      const phoneRegex = /^(\+966|966|0)?[5][0-9]{8}$/;
      const cleanPhone = ticketData.clientPhone.replace(/[^0-9+]/g, '');
      if (!phoneRegex.test(cleanPhone)) {
        throw new Error('يرجى إدخال رقم هاتف سعودي صحيح');
      }

      // Weekly ticket limit check (30 per technician)
      const weekStart = this.getWeekStart(new Date());
      const weeklyTickets = Array.from(this.tickets.values()).filter(ticket => 
        ticket.technicianId === technicianId && 
        new Date(ticket.ticketDate) >= weekStart
      );

      if (weeklyTickets.length >= 30) {
        throw new Error('تم الوصول للحد الأقصى من التذاكر الأسبوعية (30 تذكرة)');
      }

      const ticketId = `TKT${String(this.tickets.size + 1).padStart(3, '0')}`;
      const whatsappUrl = this.sendWhatsAppNotification(cleanPhone, ticketId);
      
      const ticket = {
        id: ticketId,
        technicianId,
        deviceSerial: ticketData.deviceSerial.trim(),
        clientPhone: cleanPhone,
        ticketDate: new Date().toISOString().split('T')[0],
        status: 'open',
        description: ticketData.description ? ticketData.description.trim() : '',
        images: [],
        whatsappSent: !!whatsappUrl,
        whatsappUrl: whatsappUrl || '',
        createdAt: new Date(),
        updatedAt: new Date()
      };

      this.tickets.set(ticketId, ticket);
      this.auditLog.push({
        action: 'ticket_created',
        ticketId,
        technicianId,
        timestamp: new Date(),
        details: { whatsappSent: !!whatsappUrl }
      });

      return ticket;
    } catch (error) {
      throw error;
    }
  }

  updateTicketStatus(ticketId, newStatus, technicianId) {
    try {
      const ticket = this.tickets.get(ticketId);
      if (!ticket) throw new Error('التذكرة غير موجودة');
      if (ticket.technicianId !== technicianId) throw new Error('غير مخول: لا يمكن تعديل تذكرة تقني آخر');

      // Status workflow validation
      const validTransitions = {
        'open': ['pending', 'closed'],
        'pending': ['open', 'closed'],
        'closed': []
      };

      if (!validTransitions[ticket.status] || !validTransitions[ticket.status].includes(newStatus)) {
        throw new Error(`انتقال حالة غير صالح من ${ticket.status} إلى ${newStatus}`);
      }

      const oldStatus = ticket.status;
      ticket.status = newStatus;
      ticket.updatedAt = new Date();
      this.tickets.set(ticketId, ticket);
      
      // Add to audit log
      this.auditLog.push({
        action: 'status_changed',
        ticketId,
        technicianId,
        oldStatus,
        newStatus,
        timestamp: new Date()
      });

      return ticket;
    } catch (error) {
      throw error;
    }
  }

  addImageToTicket(ticketId, imageFile, technicianId) {
    try {
      const ticket = this.tickets.get(ticketId);
      if (!ticket) throw new Error('التذكرة غير موجودة');
      if (ticket.technicianId !== technicianId) throw new Error('غير مخول');

      const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Simulate file storage (not base64 in database)
      this.imageStorage.set(imageId, {
        filename: imageFile.name,
        size: imageFile.size,
        uploadedAt: new Date(),
        ticketId: ticketId
      });

      ticket.images.push(imageId);
      ticket.updatedAt = new Date();
      this.tickets.set(ticketId, ticket);
      
      // Add to audit log
      this.auditLog.push({
        action: 'image_added',
        ticketId,
        technicianId,
        imageId,
        timestamp: new Date()
      });

      return imageId;
    } catch (error) {
      throw error;
    }
  }

  // WEEKLY REPORTING SYSTEM
  generateWeeklyReport(weekStart, technicianId = null) {
    try {
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekEnd.getDate() + 6);

      let appointments = Array.from(this.appointments.values())
        .filter(apt => {
          const aptDate = new Date(apt.date);
          return aptDate >= weekStart && aptDate <= weekEnd;
        });

      // Filter by technician if specified
      if (technicianId) {
        appointments = appointments.filter(apt => apt.technicianId === technicianId);
      }

      const reportData = appointments.map(apt => ({
        date: apt.date,
        appointmentType: apt.type,
        appointmentStatus: apt.status,
        technicianName: this.technicians.get(apt.technicianId)?.name || 'غير معروف',
        maintenanceStatus: apt.maintenanceStatus || 'غير محدد',
        maintenanceReason: apt.maintenanceReason || 'غير محدد',
        maintenanceResult: apt.maintenanceResult || 'غير محدد',
        notes: apt.notes || ''
      }));

      const reportId = `RPT_${weekStart.toISOString().split('T')[0]}${technicianId ? '_' + technicianId : ''}`;
      const report = {
        id: reportId,
        weekStart: weekStart.toISOString().split('T')[0],
        weekEnd: weekEnd.toISOString().split('T')[0],
        technicianId,
        totalAppointments: reportData.length,
        completedAppointments: reportData.filter(a => a.appointmentStatus === 'completed').length,
        data: reportData,
        generatedAt: new Date()
      };

      this.weeklyReports.set(reportId, report);
      return report;
    } catch (error) {
      throw error;
    }
  }

  // EXCEL EXPORT FUNCTIONALITY
  exportToExcel(reportData) {
    try {
      const headers = [
        'التاريخ', 'نوع الموعد', 'حالة الموعد', 'اسم التقني', 
        'حالة الصيانة', 'سبب الصيانة', 'نتيجة الصيانة', 'ملاحظات'
      ];

      const csvContent = [
        headers.join(','),
        ...reportData.data.map(row => [
          row.date,
          row.appointmentType,
          row.appointmentStatus,
          `"${row.technicianName}"`,
          row.maintenanceStatus,
          row.maintenanceReason,
          row.maintenanceResult,
          `"${row.notes.replace(/"/g, '""')}"`
        ].join(','))
      ].join('\n');

      // Add BOM for Arabic text support
      const BOM = '\uFEFF';
      const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `تقرير_أسبوعي_${reportData.weekStart}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      return true;
    } catch (error) {
      throw error;
    }
  }

  getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    return new Date(d.setDate(diff));
  }

  getTechnicianWorkload(technicianId, weekStart = null) {
    try {
      const week = weekStart || this.getWeekStart(new Date());
      const weekEnd = new Date(week);
      weekEnd.setDate(week.getDate() + 6);

      const tickets = Array.from(this.tickets.values()).filter(t => 
        t.technicianId === technicianId &&
        new Date(t.ticketDate) >= week &&
        new Date(t.ticketDate) <= weekEnd
      );

      const appointments = Array.from(this.appointments.values()).filter(a =>
        a.technicianId === technicianId &&
        new Date(a.date) >= week &&
        new Date(a.date) <= weekEnd
      );

      return {
        tickets: tickets.length,
        appointments: appointments.length,
        openTickets: tickets.filter(t => t.status === 'open').length,
        pendingTickets: tickets.filter(t => t.status === 'pending').length
      };
    } catch (error) {
      return {
        tickets: 0,
        appointments: 0,
        openTickets: 0,
        pendingTickets: 0
      };
    }
  }
}

// Initialize production data store
const dataStore = new ProductionDataStore();

// Language Switcher Component
const LanguageSwitcher = () => {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Globe className="h-4 w-4 text-gray-600" />
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="text-sm border-none bg-transparent focus:ring-0 focus:outline-none text-gray-600 cursor-pointer"
      >
        <option value="ar">العربية</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

// Main Application Component with Language Support
const FieldServicePlatform = () => {
  const { t, direction } = useLanguage();
  const [currentUser, setCurrentUser] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);
  const [systemStatus] = useState({
    totalTechnicians: 4,
    activeTechnicians: 4,
    weeklyTicketLimit: 30,
    dailyAppointmentLimit: 8
  });

  // Check for existing session on mount
  useEffect(() => {
    const savedSessionId = localStorage.getItem('fsm_session');
    if (savedSessionId) {
      const session = dataStore.validateSession(savedSessionId);
      if (session) {
        setSessionId(savedSessionId);
        setCurrentUser(session.userId);
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('fsm_session');
      }
    }
  }, []);

  const addNotification = (message, type = 'info', duration = 5000) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, duration);
  };

  const handleLogin = (username, password) => {
    try {
      const result = dataStore.login(username, password);
      if (result.success) {
        setSessionId(result.session.sessionId);
        setCurrentUser(result.session.userId);
        setIsAuthenticated(true);
        localStorage.setItem('fsm_session', result.session.sessionId);
        addNotification(t('loginSuccessful'), 'success');
      }
    } catch (error) {
      addNotification(error.message, 'error');
    }
  };

  const handleRegister = (userData) => {
    try {
      const result = dataStore.register(userData);
      if (result.success) {
        addNotification(t('accountCreated'), 'success');
        return true;
      }
    } catch (error) {
      addNotification(error.message, 'error');
      return false;
    }
  };

  const handleLogout = () => {
    try {
      if (sessionId) {
        dataStore.logout(sessionId);
        localStorage.removeItem('fsm_session');
      }
      setSessionId(null);
      setCurrentUser(null);
      setIsAuthenticated(false);
      addNotification(t('logoutSuccessful'), 'success');
    } catch (error) {
      addNotification(t('logoutError'), 'error');
    }
  };

  // If not authenticated, show login/register
  if (!isAuthenticated) {
    return <AuthenticationScreen onLogin={handleLogin} onRegister={handleRegister} />;
  }

  const currentUserData = dataStore.users.get(currentUser);
  const isAdmin = currentUserData?.role === 'admin';

  const sectionComponents = {
    dashboard: <DashboardSection currentUser={currentUser} addNotification={addNotification} systemStatus={systemStatus} isAdmin={isAdmin} />,
    appointments: <AppointmentsSection currentUser={currentUser} addNotification={addNotification} isAdmin={isAdmin} />,
    tickets: <TicketsSection currentUser={currentUser} addNotification={addNotification} isAdmin={isAdmin} />,
    reports: <ReportsSection currentUser={currentUser} addNotification={addNotification} isAdmin={isAdmin} />,
    users: isAdmin ? <UserManagementSection addNotification={addNotification} /> : null
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={direction}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Settings className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">{t('systemTitle')}</span>
              </div>
              <span className="text-sm text-gray-500">{t('version')}</span>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <LanguageSwitcher />
              <div className="text-sm text-gray-600">
                <div className="flex items-center space-x-2 space-x-reverse">
                  {isAdmin && <Shield className="h-4 w-4 text-blue-600" />}
                  <span>{currentUserData?.name || t('user')}</span>
                </div>
                <div className="text-xs text-gray-500">{isAdmin ? t('admin') : t('technician')}</div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 space-x-reverse px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-lg"
              >
                <LogOut className="h-4 w-4" />
                <span>{t('logout')}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Notifications */}
      <div className={`fixed top-20 ${direction === 'rtl' ? 'left-4' : 'right-4'} z-50 space-y-2`}>
        {notifications.map(notification => (
          <div key={notification.id} className={`p-4 rounded-lg shadow-lg max-w-sm ${
            notification.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' :
            notification.type === 'error' ? 'bg-red-50 text-red-800 border border-red-200' :
            notification.type === 'whatsapp' ? 'bg-green-50 text-green-800 border border-green-200' :
            'bg-blue-50 text-blue-800 border border-blue-200'
          }`}>
            <div className="flex items-center space-x-2 space-x-reverse">
              {notification.type === 'whatsapp' && <MessageCircle className="h-4 w-4" />}
              <span>{notification.message}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8 space-x-reverse">
          {/* Navigation */}
          <nav className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-2">
                {[
                  { id: 'dashboard', label: t('dashboard'), icon: Calendar },
                  { id: 'appointments', label: t('appointments'), icon: Clock },
                  { id: 'tickets', label: t('tickets'), icon: FileText },
                  { id: 'reports', label: t('reports'), icon: Download },
                  ...(isAdmin ? [{ id: 'users', label: t('users'), icon: Users }] : [])
                ].map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={`w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-colors ${
                      activeSection === id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {sectionComponents[activeSection]}
          </main>
        </div>
      </div>
    </div>
  );
};

// Authentication Screen Component with Language Support
const AuthenticationScreen = ({ onLogin, onRegister }) => {
  const { t, direction } = useLanguage();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '', password: '', email: '', name: '', phone: '', role: 'technician'
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      alert(t('allDataRequired'));
      return;
    }
    onLogin(loginData.username, loginData.password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!registerData.username || !registerData.password || !registerData.name || !registerData.email) {
      alert(t('allDataRequired'));
      return;
    }
    if (onRegister(registerData)) {
      setIsLoginMode(true);
      setRegisterData({ username: '', password: '', email: '', name: '', phone: '', role: 'technician' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center" dir={direction}>
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Settings className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">{t('systemTitle')}</h1>
            <p className="text-gray-600 mt-2">{t('welcomeToSystem')}</p>
            
            {/* Language Switcher */}
            <div className="flex justify-center mt-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">{t('demoCredentials')}</h3>
            <div className="text-sm text-blue-700 space-y-1">
              <div><strong>{t('adminCredentials')}</strong></div>
              <div><strong>{t('techCredentials')}</strong></div>
            </div>
          </div>

          {/* Toggle Buttons */}
          <div className="flex space-x-2 space-x-reverse mb-6">
            <button
              onClick={() => setIsLoginMode(true)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                isLoginMode ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('login')}
            </button>
            <button
              onClick={() => setIsLoginMode(false)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                !isLoginMode ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t('register')}
            </button>
          </div>

          {/* Login Form */}
          {isLoginMode ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('username')}</label>
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t('enterUsername')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('password')}</label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t('enterPassword')}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <User className="h-4 w-4" />
                <span>{t('login')}</span>
              </button>
            </form>
          ) : (
            /* Register Form */
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('username')}</label>
                <input
                  type="text"
                  value={registerData.username}
                  onChange={(e) => setRegisterData(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t('chooseUsername')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('password')}</label>
                <input
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t('enterStrongPassword')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('fullName')}</label>
                <input
                  type="text"
                  value={registerData.name}
                  onChange={(e) => setRegisterData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t('enterFullName')}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('email')}</label>
                <input
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('phone')}</label>
                <input
                  type="tel"
                  value={registerData.phone}
                  onChange={(e) => setRegisterData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+966xxxxxxxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('accountType')}</label>
                <select
                  value={registerData.role}
                  onChange={(e) => setRegisterData(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="technician">{t('technician')}</option>
                  <option value="admin">{t('manager')}</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2 space-x-reverse"
              >
                <UserPlus className="h-4 w-4" />
                <span>{t('register')}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced Dashboard Section with Language Support
const DashboardSection = ({ currentUser, addNotification, systemStatus, isAdmin }) => {
  const { t } = useLanguage();
  const [stats, setStats] = useState({});
  const [workloadAlert, setWorkloadAlert] = useState(null);
  const [adminStats, setAdminStats] = useState({});

  useEffect(() => {
    try {
      if (isAdmin) {
        // Admin dashboard - system-wide statistics
        const allTickets = dataStore.getAllTickets();
        const allAppointments = dataStore.getAllAppointments();
        const allUsers = dataStore.getAllUsers();
        
        setAdminStats({
          totalUsers: allUsers.length,
          totalTechnicians: allUsers.filter(u => u.role === 'technician').length,
          totalTickets: allTickets.length,
          openTickets: allTickets.filter(t => t.status === 'open').length,
          totalAppointments: allAppointments.length,
          todayAppointments: allAppointments.filter(apt => 
            apt.date === new Date().toISOString().split('T')[0]
          ).length
        });
      } else {
        // Technician dashboard
        const workload = dataStore.getTechnicianWorkload(currentUser);
        const userTickets = dataStore.getTicketsByTechnician(currentUser);
        const userAppointments = Array.from(dataStore.appointments.values())
          .filter(apt => apt.technicianId === currentUser);

        // Check workload alerts
        if (workload.tickets >= 25) {
          setWorkloadAlert(t('approachingLimit'));
        } else if (workload.openTickets >= 10) {
          setWorkloadAlert(t('manyOpenTickets'));
        } else {
          setWorkloadAlert(null);
        }

        setStats({
          openTickets: workload.openTickets,
          pendingTickets: workload.pendingTickets,
          weeklyTickets: workload.tickets,
          todayAppointments: userAppointments.filter(apt => 
            apt.date === new Date().toISOString().split('T')[0]
          ).length,
          totalTickets: userTickets.length,
          weeklyLimit: systemStatus.weeklyTicketLimit
        });
      }
    } catch (error) {
      console.error('Dashboard error:', error);
      addNotification(t('dataLoadError'), 'error');
    }
  }, [currentUser, systemStatus, addNotification, isAdmin, t]);

  if (isAdmin) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t('adminDashboard')}</h1>
          <p className="text-gray-600">{t('systemOverview')}</p>
        </div>

        {/* Admin Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: t('totalUsers'), value: adminStats.totalUsers || 0, color: 'blue', icon: Users },
            { label: t('activeTechnicians'), value: adminStats.totalTechnicians || 0, color: 'green', icon: User },
            { label: t('totalTickets'), value: adminStats.totalTickets || 0, color: 'purple', icon: FileText },
            { label: t('openTickets'), value: adminStats.openTickets || 0, color: 'red', icon: AlertCircle }
          ].map(({ label, value, color, icon: Icon }) => (
            <div key={label} className="bg-white rounded-lg shadow-sm p-6 border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
                </div>
                <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${
                  color === 'red' ? 'bg-red-100' :
                  color === 'yellow' ? 'bg-yellow-100' :
                  color === 'blue' ? 'bg-blue-100' :
                  color === 'purple' ? 'bg-purple-100' : 'bg-green-100'
                }`}>
                  <Icon className={`h-6 w-6 ${
                    color === 'red' ? 'text-red-600' :
                    color === 'yellow' ? 'text-yellow-600' :
                    color === 'blue' ? 'text-blue-600' :
                    color === 'purple' ? 'text-purple-600' : 'text-green-600'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Status */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('systemStatus')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{systemStatus.activeTechnicians}</div>
              <div className="text-sm text-gray-500">{t('activeTechnicians')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{systemStatus.weeklyTicketLimit}</div>
              <div className="text-sm text-gray-500">{t('weeklyTicketLimit')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{systemStatus.dailyAppointmentLimit}</div>
              <div className="text-sm text-gray-500">{t('dailyAppointmentLimit')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-500">{t('systemReady')}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Technician Dashboard
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{t('dashboard')}</h1>
        <p className="text-gray-600">{t('dashboardOverview')}</p>
      </div>

      {/* Workload Alert */}
      {workloadAlert && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <span className="text-yellow-800 font-medium">{workloadAlert}</span>
          </div>
        </div>
      )}

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-