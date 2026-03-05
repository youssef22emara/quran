// تحسين الأداء والتفاعل على الهواتف
document.addEventListener('DOMContentLoaded', function() {
    // منع التمرير المزدوج للتصغير
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // تحسين التفاعل مع البطاقات على الشاشات اللمسية
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
});
