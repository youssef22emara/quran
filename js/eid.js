// دالة لحساب تاريخ عيد الأضحى
function getEidDate() {
    const currentYear = new Date().getFullYear();
    // تواريخ عيد الأضحى للسنوات القادمة
    const eidDates = {
        2024: '2024-06-17',
        2025: '2025-06-07',
        2026: '2026-05-27',
        2027: '2027-05-16',
        2028: '2028-05-05'
    };

    // البحث عن أقرب تاريخ عيد
    for (let year = currentYear; year <= 2028; year++) {
        if (eidDates[year]) {
            const date = new Date(eidDates[year]);
            if (date > new Date()) {
                return date;
            }
        }
    }

    // إذا لم يتم العثور على تاريخ، نستخدم تاريخ عيد 2025 كقيمة افتراضية
    return new Date('2025-06-07');
}

// دالة لتحويل التاريخ الميلادي إلى هجري
function getHijriDate(date) {
    const hijriMonths = [
        'محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني',
        'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان',
        'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
    ];
    
    const hijriDays = [
        'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء',
        'الخميس', 'الجمعة', 'السبت'
    ];

    // حساب تقريبي للتاريخ الهجري
    const hijriYear = Math.floor((date.getFullYear() - 622) * (33/32));
    const hijriMonth = hijriMonths[date.getMonth()];
    const hijriDay = hijriDays[date.getDay()];

    return `${hijriDay} ${date.getDate()} ${hijriMonth} ${hijriYear} هـ`;
}

// دالة لتنسيق التاريخ الميلادي
function getGregorianDate(date) {
    const gregorianMonths = [
        'يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو',
        'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    
    const gregorianDays = [
        'الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء',
        'الخميس', 'الجمعة', 'السبت'
    ];

    return `${gregorianDays[date.getDay()]} ${date.getDate()} ${gregorianMonths[date.getMonth()]} ${date.getFullYear()} م`;
}

// تحديث عنوان العد التنازلي
function updateCountdownTitle() {
    const eidDate = getEidDate();
    const year = eidDate.getFullYear();
    const title = document.querySelector('.countdown-container h2');
    if (title) {
        title.textContent = `العد التنازلي لعيد الأضحى ${year}`;
    }
}

function updateCountdown() {
    const eidDate = getEidDate();
    const now = new Date();
    const timeLeft = eidDate - now;

    // حساب الأيام والساعات والدقائق والثواني
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // تحديث الأرقام في الصفحة
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // تحديث التواريخ
    document.getElementById('hijri-date').textContent = getHijriDate(eidDate);
    document.getElementById('gregorian-date').textContent = getGregorianDate(eidDate);

    // تحديث حالة العد التنازلي
    if (timeLeft < 0) {
        const countdownContainer = document.querySelector('.countdown-container');
        if (countdownContainer) {
            countdownContainer.innerHTML = '<h2>عيد سعيد!</h2>';
        }
        clearInterval(countdownInterval);
    }
}

// تحديث العنوان والعد التنازلي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateCountdownTitle();
    updateCountdown();
    // تحديث العد التنازلي كل ثانية
    setInterval(updateCountdown, 1000);
}); 