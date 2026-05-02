document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');

    // تفعيل القائمة الجانبية
    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        menuBtn.textContent = sideMenu.classList.contains('active') ? 'إغلاق' : 'المزيد';
    });

    // إغلاق القائمة عند الضغط بالخارج
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            sideMenu.classList.remove('active');
            menuBtn.textContent = 'المزيد';
        }
    });

    // تأثير الظهور التدريجي
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) { el.classList.add('active'); }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // تشغيل التأثير عند التحميل لأول مرة
});