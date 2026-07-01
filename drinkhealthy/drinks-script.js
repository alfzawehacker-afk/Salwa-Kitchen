document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');

    // تفعيل التحكم في فتح وإغلاق القائمة البيضاوية
    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        updateMenuButtonText();
    });

    // مراقبة النقر خارج القائمة لإغلاقها فوراً لحفظ تجربة الاستخدام
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            sideMenu.classList.remove('active');
            updateMenuButtonText();
        }
    });

    // دالة ديناميكية لتحديث نص زر القائمة حسب حالة فتح القائمة واللغة المختارة
    function updateMenuButtonText() {
        const currentLang = localStorage.getItem("salwaKitchenLang") || "ar";
        if (sideMenu.classList.contains('active')) {
            menuBtn.textContent = currentLang === 'ar' ? 'إغلاق' : 'Close';
        } else {
            menuBtn.textContent = currentLang === 'ar' ? 'المزيد' : 'More';
        }
    }

    // تأثير الظهور التفاعلي الراقي للمشروبات باستخدام Intersection Observer عند التحريك لأسفل
    const observerOptions = { threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // استدعاء اللغة وتطبيقها تلقائياً عند الدخول للصفحة لضمان بقاء المستخدم على اختياره السابق
    const savedLang = localStorage.getItem("salwaKitchenLang") || "ar";
    setLanguage(savedLang);
});

// قاموس الترجمة الفوري المكتمل لجميع مكونات صفحة المشروبات الصحية الستة
const translations = {
    ar: {
        drinks_page_title: "المشروبات الصحية | مطبخ سلوى",
        more_btn: "المزيد",
        nav_main: "الرئيسية",
        nav_login: "تسجيل الدخول",
        nav_healthy: "أكل صحي",
        nav_drinks: "مشروبات صحية",
        drinks_main_title: "مشروبات سلوى",
        drinks_subtitle: "عصائر طازجة وخلطات عشبية تعيد لك الحيوية",
        
        drink_1_title: "ديتوكس الأخضر",
        drink_1_desc: "تفاح أخضر وكرفس لتعزيز المناعة وتطهير الجسم.",
        drink_1_cal: "90 سعرة",
        
        drink_2_title: "سموذي التوت المشكل",
        drink_2_desc: "مزيج غني بمضادات الأكسدة يمنحك انتعاشاً يدوم طويلاً.",
        drink_2_cal: "120 سعرة",
        
        drink_3_title: "لاتيه الكركم الذهبي",
        drink_3_desc: "مشروب دافئ مهدئ للأعصاب ومقاوم طبيعي للالتهابات.",
        drink_3_cal: "110 سعرة",
        
        drink_4_title: "عصير الأناناس والزنجبيل",
        drink_4_desc: "مشروب منعش يساعد في حرق الدهون وتحسين الهضم بشكل ملموس.",
        drink_4_cal: "105 سعرة",
        
        drink_5_title: "شاي الماتشا البارد",
        drink_5_desc: "طاقة يابانية مستدامة وتركيز عالي ونشاط مستمر طوال اليوم.",
        drink_5_cal: "40 سعرة",
        
        drink_6_title: "عصير الشمندر والبرتقال",
        drink_6_desc: "منشط طبيعي قوي للدورة الدموية وغني بعنصر الحديد الأساسي.",
        drink_6_cal: "130 سعرة",
        
        rights: "جميع الحقوق محفوظة لمطبخ سلوى © 2026"
    },
    en: {
        drinks_page_title: "Healthy Drinks | Salwa's Kitchen",
        more_btn: "More",
        nav_main: "Home",
        nav_login: "Login",
        nav_healthy: "Healthy Food",
        nav_drinks: "Healthy Drinks",
        drinks_main_title: "Salwa's Drinks",
        drinks_subtitle: "Fresh juices and herbal blends that restore your vitality",
        
        drink_1_title: "Green Detox",
        drink_1_desc: "Green apple and celery to boost immunity and cleanse the body.",
        drink_1_cal: "90 Calories",
        
        drink_2_title: "Mixed Berry Smoothie",
        drink_2_desc: "A rich blend of antioxidants providing long-lasting freshness.",
        drink_2_cal: "120 Calories",
        
        drink_3_title: "Golden Turmeric Latte",
        drink_3_desc: "A warm, soothing drink that serves as a natural anti-inflammatory.",
        drink_3_cal: "110 Calories",
        
        drink_4_title: "Pineapple Ginger Juice",
        drink_4_desc: "A refreshing blend that boosts fat burning and noticeably improves digestion.",
        drink_4_cal: "105 Calories",
        
        drink_5_title: "Iced Matcha Tea",
        drink_5_desc: "Sustainable Japanese energy, sharp focus, and all-day vitality.",
        drink_5_cal: "40 Calories",
        
        drink_6_title: "Beetroot Orange Juice",
        drink_6_desc: "A powerful natural booster for blood circulation, rich in essential iron.",
        drink_6_cal: "130 Calories",
        
        rights: "All rights reserved to Salwa's Kitchen © 2026"
    }
};

// دالة تفعيل وتحويل لغة الواجهة ديناميكياً مع قلب اتجاهات العرض (RTL / LTR)
function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

   
    localStorage.setItem("salwaKitchenLang", lang);

    // تكييف نص زر القائمة ليتناسب فورياً مع تغيير اللغة بدون تعليق
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    if (menuBtn && sideMenu) {
        if (sideMenu.classList.contains('active')) {
            menuBtn.textContent = lang === 'ar' ? 'إغلاق' : 'Close';
        } else {
            menuBtn.textContent = lang === 'ar' ? 'المزيد' : 'More';
        }
    }
}