// ══════════════════════════════════════
// قاموس ترجمة صفحة تسجيل الدخول
// ══════════════════════════════════════
const translations = {
    ar: {
        nav_main:       "الرئيسية",
        nav_login:      "تسجيل الدخول",
        nav_healthy:    "أكل صحي",
        nav_drinks:     "مشروبات صحية",
        login_brand:    "مطبخ سلوى",
        login_welcome:  "أهلاً بك يا بطل.. سجل دخولك",
        login_email:    "البريد الإلكتروني",
        login_password: "كلمة المرور",
        login_btn:      "دخول",
        login_error:    "تأكد من صحة البيانات!"
    },
    en: {
        nav_main:       "Home",
        nav_login:      "Login",
        nav_healthy:    "Healthy Food",
        nav_drinks:     "Healthy Drinks",
        login_brand:    "Salwa's Kitchen",
        login_welcome:  "Welcome back! Please sign in.",
        login_email:    "Email address",
        login_password: "Password",
        login_btn:      "Sign In",
        login_error:    "Please check your credentials!"
    }
};

// ══════════════════════════════════════
// ✅ إصلاح 7: دالة setLanguage المفقودة
// ══════════════════════════════════════
function setLanguage(lang) {
    // ترجمة النصوص
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang]?.[key]) {
            el.textContent = translations[lang][key];
        }
    });

    // ترجمة الـ placeholder في حقول الإدخال
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang]?.[key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // اتجاه الصفحة
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    // حفظ الاختيار
    localStorage.setItem("salwaKitchenLang", lang);
}

// ══════════════════════════════════════
// تهيئة الصفحة عند التحميل
// ══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

    // ── القائمة الجانبية ──
    const menuBtn  = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');

    menuBtn.addEventListener('click', () => {
        const isActive = sideMenu.classList.toggle('active');
        menuBtn.textContent = isActive ? "إغلاق" : "المزيد";
    });

    document.addEventListener('click', (e) => {
        if (
            sideMenu.classList.contains('active') &&
            !sideMenu.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            sideMenu.classList.remove('active');
            menuBtn.textContent = "المزيد";
        }
    });

    // ✅ إصلاح 4: تفعيل تأثير الظهور بعد لحظة
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    }, 100);

    // تطبيق اللغة المحفوظة
    const savedLang = localStorage.getItem("salwaKitchenLang") || "ar";
    setLanguage(savedLang);
});
