const DEFAULT_LOCATION = {
    latitude: 30.0444,
    longitude: 31.2357,
    label: 'القاهرة'
};

let activeLocation = DEFAULT_LOCATION;

function getUserLocation() {
    return new Promise(resolve => {
        if (!navigator.geolocation) {
            resolve(DEFAULT_LOCATION);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            position => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    label: 'موقعك الحالي'
                });
            },
            () => resolve(DEFAULT_LOCATION),
            {
                enableHighAccuracy: true,
                timeout: 6000,
                maximumAge: 10 * 60 * 1000
            }
        );
    });
}

function updateLocationLabel(meta) {
    const city = meta?.timezone || activeLocation.label;
    const readableCity = city.includes('/') ? city.split('/').pop().replace(/_/g, ' ') : city;
    const title = document.querySelector('.page-hero .prayer-name');
    const innerTitle = document.querySelector('.prayer-times-header h1');
    const label = `أوقات الصلاة - ${readableCity}`;

    if (title) title.textContent = label;
    if (innerTitle) innerTitle.textContent = label;
}

// دالة لجلب مواعيد الصلاة حسب موقع المستخدم
async function fetchPrayerTimes() {
    const url = `https://api.aladhan.com/v1/timings?latitude=${activeLocation.latitude}&longitude=${activeLocation.longitude}&method=5`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        updateLocationLabel(data.data?.meta);
        return data.data.timings;
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        return null;
    }
}

// دالة لتحويل الوقت من 24 ساعة إلى 12 ساعة مع إضافة صباحاً/مساءً
function convertTo12Hour(time24) {
    const [hours, minutes] = time24.split(':').map(Number);
    let hours12 = hours % 12;
    if (hours12 === 0) hours12 = 12;
    const period = hours < 12 ? 'صباحاً' : 'مساءً';
    const timeString = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return { time: timeString, period: period };
}

// دالة لتحديث مواعيد الصلاة في الصفحة
function updatePrayerTimes(timings) {
    const prayerMapping = {
        'fajr': 'Fajr',
        'sunrise': 'Sunrise',
        'dhuhr': 'Dhuhr',
        'asr': 'Asr',
        'maghrib': 'Maghrib',
        'isha': 'Isha'
    };

    const prayerCards = document.querySelectorAll('.prayer-time-card');
    prayerCards.forEach(card => {
        const prayer = card.dataset.prayer;
        const timeElement = card.querySelector('.prayer-time');
        const apiPrayerName = prayerMapping[prayer];
        
        if (timings[apiPrayerName]) {
            const time12 = convertTo12Hour(timings[apiPrayerName]);
            
            // إنشاء عناصر الوقت إذا لم تكن موجودة
            let timeValue = timeElement.querySelector('.time-value');
            let timePeriod = timeElement.querySelector('.time-period');
            
            if (!timeValue) {
                timeElement.innerHTML = '';
                timeValue = document.createElement('span');
                timeValue.className = 'time-value';
                timePeriod = document.createElement('span');
                timePeriod.className = 'time-period';
                timeElement.appendChild(timeValue);
                timeElement.appendChild(timePeriod);
            }
            
            timeValue.textContent = time12.time;
            timePeriod.textContent = time12.period;
        }
    });
}

// دالة لحساب الوقت المتبقي حتى الصلاة القادمة
function calculateNextPrayer(timings) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const prayers = [
        { name: 'الفجر', apiName: 'Fajr', time: timings.Fajr },
        { name: 'الشروق', apiName: 'Sunrise', time: timings.Sunrise },
        { name: 'الظهر', apiName: 'Dhuhr', time: timings.Dhuhr },
        { name: 'العصر', apiName: 'Asr', time: timings.Asr },
        { name: 'المغرب', apiName: 'Maghrib', time: timings.Maghrib },
        { name: 'العشاء', apiName: 'Isha', time: timings.Isha }
    ];

    // تحويل أوقات الصلاة إلى دقائق
    const prayerTimes = prayers.map(prayer => {
        const [hours, minutes] = prayer.time.split(':').map(Number);
        return {
            name: prayer.name,
            apiName: prayer.apiName,
            time: hours * 60 + minutes
        };
    });

    // إيجاد الصلاة القادمة
    let nextPrayer = prayerTimes.find(prayer => prayer.time > currentTime);
    if (!nextPrayer) {
        nextPrayer = prayerTimes[0]; // إذا لم نجد صلاة قادمة، نستخدم صلاة الفجر
    }

    // حساب الوقت المتبقي
    let timeLeft = nextPrayer.time - currentTime;
    if (timeLeft < 0) {
        timeLeft += 24 * 60; // إضافة 24 ساعة إذا كانت الصلاة في اليوم التالي
    }

    const hours = Math.floor(timeLeft / 60);
    const minutes = timeLeft % 60;

    // تحديث العرض
    const nextPrayerName = document.querySelector('.next-prayer-name');
    const countdown = document.querySelector('.countdown');
    
    if (nextPrayerName && countdown) {
        nextPrayerName.textContent = nextPrayer.name;
        countdown.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
    }

    // تحديث البطاقة النشطة
    const prayerCards = document.querySelectorAll('.prayer-time-card');
    prayerCards.forEach(card => {
        card.classList.remove('active');
        if (card.dataset.prayer === nextPrayer.apiName.toLowerCase()) {
            card.classList.add('active');
        }
    });
}

// دالة لتحديث العد التنازلي
function updateCountdown() {
    const countdown = document.querySelector('.countdown');
    if (countdown) {
        const [hours, minutes, seconds] = countdown.textContent.split(':').map(Number);
        let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
        
        if (totalSeconds < 0) {
            fetchAndUpdatePrayerTimes(); // تحديث مواعيد الصلاة عند انتهاء العد التنازلي
            return;
        }

        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;

        countdown.textContent = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
    }
}

// دالة لجلب وتحديث مواعيد الصلاة
async function fetchAndUpdatePrayerTimes() {
    const timings = await fetchPrayerTimes();
    if (timings) {
        updatePrayerTimes(timings);
        calculateNextPrayer(timings);
    }
}

// تحديث مواعيد الصلاة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', async () => {
    activeLocation = await getUserLocation();
    await fetchAndUpdatePrayerTimes();
    // تحديث العد التنازلي كل ثانية
    setInterval(updateCountdown, 1000);
});
