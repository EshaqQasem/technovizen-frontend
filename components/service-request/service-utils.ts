export function formatServiceType(type: string): string {
  // Service type translations (Arabic only)
  const serviceTypes: Record<string, string> = {
    "web-development": "تطوير المواقع",
    "mobile-development": "تطوير تطبيقات الجوال",
    "ui-ux-design": "تصميم واجهة المستخدم",
    ecommerce: "متجر إلكتروني",
    seo: "تحسين محركات البحث",
    other: "أخرى",
  }

  return serviceTypes[type] || type
}

interface ServiceFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  description: string;
}
export function prepareWhatsAppMessage(formData: ServiceFormData): string {
  const serviceType = formatServiceType(formData.serviceType);

  return `مرحباً، أنا ${formData.name}.

طلب خدمة جديد:
نوع الخدمة: ${serviceType}
الوصف: ${formData.description}

معلومات التواصل:
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone}`;
}

