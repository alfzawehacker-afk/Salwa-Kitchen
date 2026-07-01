const translations = {
    ar: {
        more_btn:       "المزيد",
        nav_main:       "الرئيسية",
        nav_login:      "تسجيل الدخول",
        nav_healthy:    "أكل صحي",
        nav_drinks:     "مشروبات صحية",
        healthy_title:  "غذاء للروح والبدن",
        healthy_slogan: "أطباق صحية بلمسة احترافية",
        dish_1_title:   "سلمون مشوي",
        dish_1_desc:    "سلمون فاخر مع خضار سوتيه.",
        dish_1_cal:     "350 سعرة",
        dish_2_title:   "سلمون مشوي",
        dish_2_desc:    "سلمون فاخر مع خضار سوتيه.",
        dish_2_cal:     "350 سعرة",
        rights: "جميع الحقوق محفوظة لمطبخ سلوى © 2026"
    },
    en: {
        more_btn:       "More",
        nav_main:       "Home",
        nav_login:      "Login",
        nav_healthy:    "Healthy Food",
        nav_drinks:     "Healthy Drinks",
        healthy_title:  "Food for the Soul & Body",
        healthy_slogan: "Healthy dishes with a professional touch",
        dish_1_title:   "Grilled Salmon",
        dish_1_desc:    "Premium salmon with sautéed vegetables.",
        dish_1_cal:     "350 Cal",
        dish_2_title:   "Grilled Salmon",
        dish_2_desc:    "Premium salmon with sautéed vegetables.",
        dish_2_cal:     "350 Cal",
        rights: "All rights reserved to Salwa's Kitchen © 2026"
    }
};

function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang]?.[key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("salwaKitchenLang", lang);

    updateMenuButtonText(lang);
}

function updateMenuButtonText(lang) {
    const sideMenu = document.getElementById('sideMenu');
    const menuBtn  = document.getElementById('menuBtn');
    if(sideMenu && menuBtn) {
        if (sideMenu.classList.contains('active')) {
            menuBtn.textContent = lang === 'ar' ? 'إغلاق' : 'Close';
        } else {
            menuBtn.textContent = lang === 'ar' ? 'المزيد' : 'More';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn  = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const languageToggle = document.getElementById('languageToggle');

    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            const currentLang = localStorage.getItem("salwaKitchenLang") || "ar";
            const newLang = currentLang === "ar" ? "en" : "ar";
            setLanguage(newLang);
        });
    }

    if(menuBtn && sideMenu) {
        menuBtn.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            const currentLang = localStorage.getItem("salwaKitchenLang") || "ar";
            updateMenuButtonText(currentLang);
        });

        document.addEventListener('click', (e) => {
            if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
                sideMenu.classList.remove('active');
                const currentLang = localStorage.getItem("salwaKitchenLang") || "ar";
                updateMenuButtonText(currentLang);
            }
        });
    }

    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop   = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const savedLang = localStorage.getItem("salwaKitchenLang") || "ar";
    setLanguage(savedLang);
});