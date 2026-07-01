const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');

// تفعيل القائمة الجانبية
menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    menuBtn.textContent = sideMenu.classList.contains('active') ? 'إغلاق' : 'المزيد';
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        sideMenu.classList.remove('active');
        menuBtn.textContent = 'المزيد';
    }
});

// ✅ إصلاح: دالة revealOnScroll مصححة بدون أقواس خاطئة
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // تشغيل أولي

// قاموس الترجمة الشامل لجميع صفحات مطبخ سلوى
const translations = {
    ar: {
        // القائمة العلوية والتنقل
        nav_main: "الرئيسية",
        nav_login: "تسجيل الدخول",
        nav_healthy: "أكل صحي",
        nav_drinks: "مشروبات صحية",

        // الصفحة الرئيسية
        main_title: "الطبخ مع سلوى | تجربة فاخرة",
        main_ttle: "الطبخ مع سلوى",
        hero_subtitle: "نمزج المحبة مع الغذاء بلمسة إبداع",
        more_btn: "المزيد",

        // الوجبات والمحتوى
        dish_1_title: "مجبوس اللحم الفاخر",
        dish_1_desc: "بلمسات سلوى الخاصة ومزيج المحبة، سر النكهة الخليجية الأصلية.",
        dish_1_calories: "850 سعرة",

        dish_2_title: "صينية الدجاج بالخضار",
        dish_2_desc: "غذاء صحي يغمر القلب بالدفء، خضروات طازجة مطهوة بعناية.",
        dish_2_calories: "420 سعرة",

        // الفوتر والتواصل
        contact_title: "تواصل وتوصيل",
        whatsapp: "واتساب",
        facebook: "فيسبوك",
        call_phone: "اتصال هاتف",
        landline: "الخط الأرضي",
        rights: "جميع الحقوق محفوظة لمطبخ سلوى © 2026",

        // صفحة تسجيل الدخول
        login_title: "تسجيل الدخول",
        username_label: "اسم المستخدم:",
        password_label: "كلمة المرور:",
        login_btn: "دخول",

        // صفحة الأكل الصحي والمشروبات
        healthy_title: "أكل صحي ولذيذ",
        drinks_title: "مشروبات صحية ومنعشة"
    },
    en: {
        // Navigation
        nav_main: "Home",
        nav_login: "Login",
        nav_healthy: "Healthy Food",
        nav_drinks: "Healthy Drinks",

        // Main Page
        main_title: "Cooking with Salwa | Luxury Experience",
        main_ttle: "Cooking with Salwa",
        hero_subtitle: "Blending love with food with a touch of creativity",
        more_btn: "More",

        // Dishes & Content
        dish_1_title: "Luxury Meat Majboos",
        dish_1_desc: "With Salwa's special touches and a blend of love, the secret of the authentic Gulf flavor.",
        dish_1_calories: "850 Calories",

        dish_2_title: "Chicken Tray with Vegetables",
        dish_2_desc: "Healthy food that warms the heart, fresh vegetables cooked with care.",
        dish_2_calories: "420 Calories",

        // Footer & Contact
        contact_title: "Contact & Delivery",
        whatsapp: "WhatsApp",
        facebook: "Facebook",
        call_phone: "Call Phone",
        landline: "Landline",
        rights: "All rights reserved to Salwa's Kitchen © 2026",

        // Login Page
        login_title: "Login",
        username_label: "Username:",
        password_label: "Password:",
        login_btn: "Login",

        // Healthy Food & Drinks pages
        healthy_title: "Healthy & Delicious Food",
        drinks_title: "Healthy & Refreshing Drinks"
    }
};

// دالة تطبيق اللغة وتغيير اتجاه الصفحة تلقائياً
function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === "INPUT" && element.type === "submit") {
                element.value = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // ضبط اتجاه الصفحة
   

    // حفظ الاختيار في المتصفح
    localStorage.setItem("salwaKitchenLang", lang);
}

// تشغيل اللغة المختارة تلقائياً عند تحميل أي صفحة
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("salwaKitchenLang") || "ar";
    setLanguage(savedLang);
});
