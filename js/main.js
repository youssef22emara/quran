// التحكم في القائمة المتجاوبة
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // فتح/إغلاق القائمة عند النقر على الزر
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navLinks.classList.toggle('show');
            menuToggle.classList.toggle('active');
        });

        // إغلاق القائمة عند النقر على أي رابط
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('show');
                menuToggle.classList.remove('active');
            });
        });
    }

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        const header = document.querySelector('.header');
        if (header && !header.contains(e.target)) {
            if (navLinks && navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
            }
        }
    });
});

// التمرير السلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// إضافة تأثير Parallax البسيط
let lastScroll = 0;
const sidebar = document.querySelector('.scholars-sidebar');
if (sidebar) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
            sidebar.classList.add('hide-sidebar');
        } else {
            sidebar.classList.remove('hide-sidebar');
        }
        lastScroll = currentScroll;
    });
}

