// دالة لحساب تاريخ بداية رمضان
function getRamadanStartDate() {
    const currentYear = new Date().getFullYear();
    // تواريخ بداية رمضان للسنوات القادمة
    const ramadanDates = {
        2024: '2024-03-10',
        2025: '2025-02-28',
        2026: '2026-02-17',
        2027: '2027-02-07',
        2028: '2028-01-27'
    };

    // البحث عن أقرب تاريخ رمضان
    for (let year = currentYear; year <= 2028; year++) {
        if (ramadanDates[year]) {
            const date = new Date(ramadanDates[year]);
            if (date > new Date()) {
                return date;
            }
        }
    }

    // إذا لم يتم العثور على تاريخ، نستخدم تاريخ رمضان 2025 كقيمة افتراضية
    return new Date('2025-02-28');
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
    const ramadanStart = getRamadanStartDate();
    const year = ramadanStart.getFullYear();
    const title = document.querySelector('.countdown-container h2');
    if (title) {
        title.textContent = `العد التنازلي لرمضان ${year}`;
    }
}

function updateCountdown() {
    const ramadanStart = getRamadanStartDate();
    const now = new Date();
    const timeLeft = ramadanStart - now;

    // حساب الأيام والساعات والدقائق والثواني
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // تحديث الأرقام في الصفحة
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
    if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');

    // تحديث التواريخ
    const hijriDateElement = document.getElementById('hijri-date');
    const gregorianDateElement = document.getElementById('gregorian-date');

    if (hijriDateElement) {
        hijriDateElement.textContent = getHijriDate(ramadanStart);
    }
    if (gregorianDateElement) {
        gregorianDateElement.textContent = getGregorianDate(ramadanStart);
    }

    // تحديث حالة العد التنازلي
    const countdownContainer = document.querySelector('.countdown-container');
    if (timeLeft < 0 && countdownContainer) {
        countdownContainer.innerHTML = '<h2>رمضان كريم!</h2>';
        clearInterval(countdownInterval);
    }
}

// تحديث العنوان عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateCountdownTitle();
    updateCountdown();
});

// تحديث العد التنازلي كل ثانية
const countdownInterval = setInterval(updateCountdown, 1000); 