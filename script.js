
document.addEventListener('DOMContentLoaded', () => {
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

    // تأثير الظهور التدريجي عند التمرير
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
    revealOnScroll();

    // ✅ تشغيل اللغة المفضلة تلقائيًا عند تحميل الصفحة
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== document.documentElement.getAttribute('lang')) {
        toggleLanguage();
    }
});

// قاموس النصوص
const translations = {
    ar: {
        "langText": "EN",
        "menuBtn": "المزيد",
        "nav-home": "الرئيسية",
        "nav-login": "تسجيل الدخول",
        "nav-healthy-food": "أكل صحي",
        "nav-healthy-drinks": "مشروبات صحية",
        "main-title": "الطبخ مع سلوى",
        "slogan": "نمزج المحبة مع الغذاء بلمسة إبداع",
        "dish1-title": "مجبوس اللحم الفاخر",
        "dish1-desc": "بلمسات سلوى الخاصة ومزيج المحبة، سر النكهة الخليجية الأصلية.",
        "dish1-cal": "850 سعرة",
        "dish2-title": "صينية الدجاج بالخضار",
        "dish2-desc": "غذاء صحي يغمر القلب بالدفء، خضروات طازجة مطهوة بعناية.",
        "dish2-cal": "420 سعرة",
        "contact-title": "تواصل وتوصيل",
        "contact-whatsapp": "واتساب",
        "contact-facebook": "فيسبوك",
        "contact-phone": "اتصال هاتف",
        "contact-landline": "الخط الأرضي",
        "footer-text": "جميع الحقوق محفوظة لمطبخ سلوى ©️ 2026"
    },
    en: {
        "langText": "العربية",
        "menuBtn": "More",
        "nav-home": "Home",
        "nav-login": "Login",
        "nav-healthy-food": "Healthy Food",
        "nav-healthy-drinks": "Healthy Drinks",
        "main-title": "Cooking with Salwa",
        "slogan": "We mix love with food with a touch of creativity",
        "dish1-title": "Luxury Meat Majboos",
        "dish1-desc": "With Salwa's special touches and a mix of love, the secret of the authentic Gulf flavor.",
        "dish1-cal": "850 Calories",
        "dish2-title": "Chicken Tray with Vegetables",
        "dish2-desc": "Healthy food that warms the heart, fresh vegetables cooked with care.",
        "dish2-cal": "420 Calories",
        "contact-title": "Contact & Delivery",
        "contact-whatsapp": "WhatsApp",
        "contact-facebook": "Facebook",
        "contact-phone": "Phone Call",
        "contact-landline": "Landline",
        "footer-text": "All rights reserved to Salwa Kitchen ©️ 2026"
    }
};

// دالة تحويل اللغة
function toggleLanguage() {
    const htmlTag = document.documentElement;
    const currentLang = htmlTag.getAttribute('lang') || 'ar';
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    const nextDir = currentLang === 'ar' ? 'ltr' : 'rtl';

    htmlTag.setAttribute('lang', nextLang);
    htmlTag.setAttribute('dir', nextDir);

    Object.keys(translations[nextLang]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[nextLang][id];
        }
    });

    localStorage.setItem('preferredLanguage', nextLang);
}
```

---

انسخه كامل والصقه في الـ `script.js` بدل القديم. لما تخلص قولي ✅
