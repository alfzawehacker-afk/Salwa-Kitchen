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
    revealOnScroll(); // تشغيل أولي
});
// 1. قاموس النصوص: أضف هنا كل الـ IDs والنصوص التي تريد ترجمتها في موقعك
const translations = {
    ar: {
        langBtn: "EN",
        partner: "انضم كشريك",
        company: "شركتنا",
        title: "الطبخ مع سلوى",
        desc: "نمزج المحبة مع الغذاء بلمسة إبداع"
    },
    en: {
        langBtn: "العربية",
        partner: "Become a Partner",
        company: "Our Company",
        title: "Cooking with Salwa",
        desc: "We mix love with food with a touch of creativity"
    }
};

// 2. دالة التحويل بين اللغتين والاتجاهين
function toggleLanguage() {
    const htmlTag = document.documentElement;
    const currentLang = htmlTag.getAttribute('lang');
    
    // تحديد اللغة والاتجاه القادم
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    const nextDir = currentLang === 'ar' ? 'ltr' : 'rtl';
    
    // تطبيق اللغة والاتجاه على وسم الـ HTML الرئيسي
    htmlTag.setAttribute('lang', nextLang);
    htmlTag.setAttribute('dir', nextDir);
    
    // تحديث النصوص داخل عناصر الصفحة بناءً على الـ ID والقاموس أعلاه
    document.getElementById('langText').innerText = translations[nextLang].langBtn;
    document.getElementById('link-partner').innerText = translations[nextLang].partner;
    document.getElementById('link-company').innerText = translations[nextLang].company;
    document.getElementById('main-title').innerText = translations[nextLang].title;
    document.getElementById('main-desc').innerText = translations[nextLang].desc;
    
    // حفظ خيار المستخدم في متصفحه لكي لا يعود للغة الافتراضية عند تحديث الصفحة
    localStorage.setItem('preferredLanguage', nextLang);
}

// 3. كود لتذكر لغة المستخدم وتشغيلها تلقائياً عند فتح الموقع مجدداً
window.onload = function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    // إذا كانت هناك لغة محفوظة وتختلف عن الحالية، قم بالتحويل فوراً
    if (savedLang && savedLang !== document.documentElement.getAttribute('lang')) {
        toggleLanguage();
    }
}
