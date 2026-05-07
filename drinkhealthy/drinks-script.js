document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');

    // تفعيل القائمة البيضاوية
    menuBtn.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
        menuBtn.textContent = sideMenu.classList.contains('active') ? 'إغلاق' : 'المزيد';
    });

    // تأثير الظهور التدريجي للمشروبات عند التمرير
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});