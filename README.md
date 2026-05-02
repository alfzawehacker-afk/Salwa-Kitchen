
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الطبخ مع سلوى | تجربة فاخرة</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="menu-trigger" id="menuBtn">المزيد</div>

    <nav class="oval-menu" id="sideMenu">
        <div class="menu-links">
            <a href="index.html">الرئيسية</a>
            <a href="food healthy/healthy-food.html">أكل صحي</a>
            <a href="drinkhealthy/healthy-drinks.html">مشروبات صحية</a>
        </div>
    </nav>

    <main>
        <header class="hero-section reveal">
            <h1 class="main-title">الطبخ مع سلوى</h1>
            <div class="slogan-container">
                <p class="slogan">نمزج المحبة مع الغذاء بلمسة إبداع</p>
            </div>
        </header>

        <section class="main-courses-grid">
            
            <div class="oval-card reveal">
                <div class="image-wrapper">
                    <img src="https://i.ytimg.com/vi/5OnbW2UZAew/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCM4zhfqkWkNmKvTiJ2f9ib21iaFA" alt="مجبوس اللحم">
                </div>
                <div class="course-info-center">
                    <h3>مجبوس اللحم الفاخر</h3>
                    <p>بلمسات سلوى الخاصة ومزيج المحبة، سر النكهة الخليجية الأصلية.</p>
                    <span class="calories-badge">850 سعرة</span>
                </div>
            </div>

            <div class="oval-card reveal">
                <div class="image-wrapper">
                    <img src="https://i.ytimg.com/vi/oogTme6TXyk/maxresdefault.jpg" alt="صينية دجاج">
                </div>
                <div class="course-info-center">
                    <h3>صينية الدجاج بالخضار</h3>
                    <p>غذاء صحي يغمر القلب بالدفء، خضروات طازجة مطهوة بعناية.</p>
                    <span class="calories-badge">420 سعرة</span>
                </div>
            </div>

        </section>
    </main>

    <footer class="footer">
        <p>جميع الحقوق محفوظة لمطبخ سلوى &copy; 2026</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
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
:root {
    --soft-orange-bg: #fffaf5;
    --main-orange: #e67e22;
    --dark-orange: #d35400;
    --dark-text: #1d1d1f;
    --transition-smooth: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

body {
    margin: 0;
    font-family: 'Cairo', -apple-system, sans-serif;
    background-color: var(--soft-orange-bg);
    color: var(--dark-text);
    overflow-x: hidden;
}

/* زر القائمة العائم */
.menu-trigger {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 1001;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    color: var(--dark-orange);
    padding: 12px 35px;
    border-radius: 50px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    cursor: pointer;
    font-weight: 700;
    transition: var(--transition-smooth);
    border: 1px solid rgba(230, 126, 34, 0.1);
}

.menu-trigger:hover { 
    transform: scale(1.05);
    background: var(--main-orange);
    color: white;
}

/* القائمة البيضاوية الجانبية */
.oval-menu {
    position: fixed;
    top: 50%;
    right: -100%;
    transform: translateY(-50%);
    width: 350px;
    height: 85vh;
    background: white;
    border-radius: 200px 0 0 200px;
    box-shadow: -20px 0 80px rgba(211, 84, 0, 0.15);
    transition: var(--transition-smooth);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.oval-menu.active { right: 0; }

.menu-links {
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding-right: 40px;
}

.menu-links a {
    text-decoration: none;
    color: var(--dark-text);
    font-size: 1.5rem;
    transition: 0.3s;
}

.menu-links a:hover { 
    color: var(--main-orange);
    transform: translateX(-10px);
}

/* قسم الهيرو بتدرج Apple المشمشي */
.hero-section {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle at top, #ffecd2, #ffffff);
}

.main-title {
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 700;
    background: linear-gradient(135deg, var(--main-orange), var(--dark-orange));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* نظام الكروت البيضاوية الاحترافي */
.main-courses-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 50px;
    padding: 60px 10%;
}

.oval-card {
    background: #fff;
    border-radius: 70px; /* شكل بيضاوي كامل */
    padding: 30px;
    text-align: center;
    transition: var(--transition-smooth);
    box-shadow: 0 20px 50px rgba(0,0,0,0.03);
}

.oval-card:hover {
    transform: translateY(-20px);
    box-shadow: 0 40px 80px rgba(230, 126, 34, 0.15);
}

.image-wrapper {
    width: 100%;
    height: 300px;
    border-radius: 50px;
    overflow: hidden;
    margin-bottom: 25px;
}

.image-wrapper img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 1.5s ease;
}

.oval-card:hover img { transform: scale(1.15); }

/* تأثيرات الظهور */
.reveal { opacity: 0; transform: translateY(40px); transition: var(--transition-smooth); }
.reveal.active { opacity: 1; transform: translateY(0); }
