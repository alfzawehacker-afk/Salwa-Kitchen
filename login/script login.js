document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');

    menuBtn.addEventListener('click', () => {
        const isActive = sideMenu.classList.toggle('active');
        // تغيير النص حسب الحالة
        menuBtn.textContent = isActive ? "إغلاق" : "المزيد";
    });

    // إغلاق عند الضغط خارج المنيو
    document.addEventListener('click', (e) => {
        if (sideMenu.classList.contains('active') && !sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            sideMenu.classList.remove('active');
            menuBtn.textContent = "المزيد";
        }
    });
});