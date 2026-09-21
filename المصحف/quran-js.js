// ===============================
// قائمة السور
// ===============================
const surahs = [
"الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة",
"يونس","هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه",
"الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم",
"لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر",
"فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق",
"الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة",
"الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج",
"نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس",
"التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد",
"الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات",
"القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر",
"المسد","الإخلاص","الفلق","الناس"
];

// ===============================
// أسماء سور محمد عبادة (كما هي في الملفات)
// ===============================
const abadaSurahNames = [
"الفاتحة","البقرة","آل عمران","النساء","المائدة","الأنعام","الأعراف","الأنفال","التوبة",
"يونس","هود","يوسف","الرعد","إبراهيم","الحجر","النحل","الإسراء","الكهف","مريم","طه",
"الأنبياء","الحج","المؤمنون","النور","الفرقان","الشعراء","النمل","القصص","العنكبوت","الروم",
"لقمان","السجدة","الأحزاب","سبأ","فاطر","يس","الصافات","ص","الزمر","غافر",
"فصلت","الشورى","الزخرف","الدخان","الجاثية","الأحقاف","محمد","الفتح","الحجرات","ق",
"الذاريات","الطور","النجم","القمر","الرحمن","الواقعة","الحديد","المجادلة","الحشر","الممتحنة",
"الصف","الجمعة","المنافقون","التغابن","الطلاق","التحريم","الملك","القلم","الحاقة","المعارج",
"نوح","الجن","المزمل","المدثر","القيامة","الإنسان","المرسلات","النبأ","النازعات","عبس",
"التكوير","الانفطار","المطففين","الانشقاق","البروج","الطارق","الأعلى","الغاشية","الفجر","البلد",
"الشمس","الليل","الضحى","الشرح","التين","العلق","القدر","البينة","الزلزلة","العاديات",
"القارعة","التكاثر","العصر","الهمزة","الفيل","قريش","الماعون","الكوثر","الكافرون","النصر",
"المسد","الإخلاص","الفلق","الناس"
];

let currentReciterServer = "https://server10.mp3quran.net/minsh/"; // خادم افتراضي للشيخ المنشاوي
let currentReciterType = "mp3quran"; // "mp3quran" أو "abada"
let currentSurahNumber = null;

const audio = document.getElementById("quranAudio");
const playIcon = document.getElementById("playIcon");

// ===============================
// توسيع / تصغير مشغل الصوت الثابت
// ===============================
const audioPlayer = document.getElementById("audioPlayer");
const expandPlayerBtn = document.getElementById("expandPlayerBtn");
const playerHeader = document.querySelector(".player-header");

if (expandPlayerBtn && audioPlayer) {
    expandPlayerBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        togglePlayerExpand();
    });
}

if (playerHeader && audioPlayer) {
    playerHeader.addEventListener("click", function (e) {
        // توسيع المشغل عند النقر على الهيدر بشرط عدم النقر على زر التحكم أو زر السهم
        if (!e.target.closest("button") && !e.target.closest(".player-controls")) {
            togglePlayerExpand();
        }
    });
}

function togglePlayerExpand() {
    audioPlayer.classList.toggle("expanded");
    const icon = expandPlayerBtn.querySelector("i");
    if (audioPlayer.classList.contains("expanded")) {
        icon.className = "fas fa-chevron-down";
    } else {
        icon.className = "fas fa-chevron-up";
    }
}

// ===============================
// درج القراء الدوار (Picker Wheel)
// ===============================
const reciterSelectorBtn = document.getElementById("reciterSelectorBtn");
const scholarsDropdown = document.getElementById("scholarsDropdown");
const recitersBar = document.getElementById("recitersBar");

// فتح الدرج وتوسيط القارئ المختار حالياً
reciterSelectorBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    scholarsDropdown.classList.add("active");

    setTimeout(() => {
        const activeReciterName = document.getElementById("reciterName").innerText;
        const items = recitersBar.querySelectorAll(".scholar-profile");
        let activeItem = null;

        items.forEach(item => {
            if (item.querySelector(".scholar-name").innerText === activeReciterName) {
                activeItem = item;
            }
        });

        if (activeItem) {
            activeItem.scrollIntoView({ block: 'center', inline: 'nearest' });
            updateActivePickerItem();
        } else {
            updateActivePickerItem();
        }
    }, 150);
});

// إغلاق الدرج عند النقر على الخلفية المظلمة
scholarsDropdown.addEventListener("click", function (e) {
    if (e.target === scholarsDropdown) {
        scholarsDropdown.classList.remove("active");
    }
});

// دالة لتحديث العنصر النشط في المنتصف أثناء التمرير
function updateActivePickerItem() {
    if (!recitersBar) return;

    const containerCenter = recitersBar.getBoundingClientRect().top + recitersBar.clientHeight / 2;
    let closestElement = null;
    let minDistance = Infinity;

    const items = recitersBar.querySelectorAll(".scholar-profile");
    items.forEach(item => {
        const itemCenter = item.getBoundingClientRect().top + item.clientHeight / 2;
        const distance = Math.abs(itemCenter - containerCenter);

        if (distance < minDistance) {
            minDistance = distance;
            closestElement = item;
        }
    });

    items.forEach(item => {
        if (item === closestElement) {
            item.classList.add("active-picker-item");
        } else {
            item.classList.remove("active-picker-item");
        }
    });
}

if (recitersBar) {
    recitersBar.addEventListener("scroll", updateActivePickerItem);
}

// ===============================
// اختيار القارئ وتحديث البيانات
// ===============================
document.querySelectorAll(".scholar-profile").forEach(el => {
    el.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        // التمرير للمنتصف أولاً إذا لم يكن نشطاً
        if (!this.classList.contains("active-picker-item")) {
            this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            recitersBar.querySelectorAll(".scholar-profile").forEach(item => {
                item.classList.remove("active-picker-item");
            });
            this.classList.add("active-picker-item");
        }

        // إتمام الاختيار وإغلاق الدرج بعد تأخير بسيط للحركة
        setTimeout(() => {
            currentReciterServer = this.dataset.server;
            currentReciterType = this.dataset.type || "mp3quran";

            const reciterNameText = this.querySelector(".scholar-name").innerText;
            const reciterImgSrc = this.querySelector("img").src;

            // تحديث التسميات
            const reciterLabel = document.querySelector(".reciter-label");
            if (reciterLabel) reciterLabel.innerText = "قارئ آخر: " + reciterNameText;

            const reciterNameEl = document.getElementById("reciterName");
            if (reciterNameEl) {
                reciterNameEl.innerText = reciterNameText;
                reciterNameEl.style.display = "block";
            }

            const miniReciterNameEl = document.getElementById("miniReciterName");
            if (miniReciterNameEl) miniReciterNameEl.innerText = reciterNameText;

            // تحديث الصور
            const reciterImageEl = document.getElementById("reciterImage");
            if (reciterImageEl) reciterImageEl.src = reciterImgSrc;

            const miniReciterImageEl = document.getElementById("miniReciterImage");
            if (miniReciterImageEl) miniReciterImageEl.src = reciterImgSrc;

            // إغلاق الدرج
            scholarsDropdown.classList.remove("active");

            if (currentSurahNumber) playCurrentSurah();
        }, 250);
    });
});

function getAudioLink(server, number) {
    if (currentReciterType === "abada") {
        const surahName = abadaSurahNames[number - 1];
        const num = String(number).padStart(3, '0');
        const fileName = `تلاوة محمد عبادة سورة ${num}  ${surahName}  mp3.mp3`;
        return server + encodeURIComponent(fileName);
    }
    return server + String(number).padStart(3, '0') + ".mp3";
}

function playCurrentSurah() {

    if (!currentReciterServer || !currentSurahNumber) return;

    audio.pause();
    audio.currentTime = 0;

    audio.src = getAudioLink(currentReciterServer, currentSurahNumber);
    audio.play();

    playIcon.classList.replace("fa-play", "fa-pause");

    document.getElementById("currentSurahName").innerText =
        "سورة " + surahs[currentSurahNumber - 1];
}

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playIcon.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        playIcon.classList.replace("fa-pause", "fa-play");
    }
}

function rewindAudio() {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
}

function forwardAudio() {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
}

// ===============================
// تحميل السورة
// ===============================
async function searchSurah() {

    const input = document.getElementById('quranSearchInput').value.trim();
    const displayArea = document.getElementById('quranContent');

    let surahNumber = null;

    // البحث بالرقم
    if (!isNaN(input)) {
        surahNumber = parseInt(input);
    } else {
        const cleanInput = input.replace(/\s+/g, "");
        const index = surahs.findIndex(s =>
            s.replace(/\s+/g, "") === cleanInput
        );
        if (index !== -1) surahNumber = index + 1;
    }

    if (!surahNumber || surahNumber < 1 || surahNumber > 114) {
        displayArea.innerHTML = "<p>السورة غير موجودة</p>";
        return;
    }

    currentSurahNumber = surahNumber;
    displayArea.innerHTML = "جاري التحميل...";

    try {

        const response = await fetch(
            `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahNumber}&per_page=300`
        );

        const data = await response.json();
        const verses = data.verses;

        let html = `
            <div class="surah-header">
                <h2>سورة ${surahs[surahNumber - 1]}</h2>
                <p>عدد الآيات: ${verses.length}</p>
            </div>
        `;

        if (surahNumber !== 9) {
            html += `
                <div class="basmala">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </div>
            `;
        }

        html += `<div class="surah-body">`;

        verses.forEach((v) => {

    const ayahNumber = v.verse_number
        ? v.verse_number
        : v.verse_key.split(":")[1];

    html += `
        <span class="ayah">
            ${v.text_uthmani}
            <span class="ayah-number">${ayahNumber}</span>
        </span>
    `;
});


        html += `</div>`;

        displayArea.innerHTML = html;

        if (currentReciterServer) {
            playCurrentSurah();
        }

    } catch (error) {
        displayArea.innerHTML = "<p>حدث خطأ أثناء تحميل السورة</p>";
        console.error(error);
    }
}

// ===============================
// البحث التلقائي
// ===============================
let isDropdownOpen = false;

function toggleSurahDropdown() {
    const box = document.getElementById("suggestionsBox");
    const toggleBtn = document.getElementById("dropdownToggle");
    const input = document.getElementById("quranSearchInput");

    if (isDropdownOpen) {
        box.style.display = "none";
        toggleBtn.classList.remove("active");
        isDropdownOpen = false;
    } else {
        showAllSurahs();
        box.style.display = "block";
        toggleBtn.classList.add("active");
        isDropdownOpen = true;
        input.focus();
    }
}

function showAllSurahs() {
    const box = document.getElementById("suggestionsBox");
    box.innerHTML = "";

    surahs.forEach((surahName, index) => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.innerText = `${index + 1}. ${surahName}`;

        div.onclick = function () {
            document.getElementById("quranSearchInput").value = surahName;
            box.style.display = "none";
            document.getElementById("dropdownToggle").classList.remove("active");
            isDropdownOpen = false;
            searchSurah();
        };

        box.appendChild(div);
    });
}

function showSuggestions() {
    const input = document.getElementById("quranSearchInput").value.trim();
    const box = document.getElementById("suggestionsBox");
    const toggleBtn = document.getElementById("dropdownToggle");

    box.innerHTML = "";

    if (!input) {
        if (isDropdownOpen) {
            showAllSurahs();
        } else {
            box.style.display = "none";
        }
        return;
    }

    const filtered = surahs.filter(surah =>
        surah.startsWith(input)
    );

    if (!filtered.length) {
        box.style.display = "none";
        return;
    }

    filtered.forEach((surahName, index) => {
        const originalIndex = surahs.indexOf(surahName);
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.innerText = `${originalIndex + 1}. ${surahName}`;

        div.onclick = function () {
            document.getElementById("quranSearchInput").value = surahName;
            box.style.display = "none";
            toggleBtn.classList.remove("active");
            isDropdownOpen = false;
            searchSurah();
        };

        box.appendChild(div);
    });

    box.style.display = "block";
}

document.getElementById("quranSearchInput").addEventListener("input", showSuggestions);

// إضافة event listeners للقائمة المنسدلة
document.getElementById("dropdownToggle").addEventListener("click", function(e) {
    e.stopPropagation();
    toggleSurahDropdown();
});

document.getElementById("quranSearchInput").addEventListener("click", function() {
    if (!isDropdownOpen) {
        toggleSurahDropdown();
    }
});

// ===== قائمة الهامبرغر =====
const menuToggleButton = document.getElementById("menuToggle");
if (menuToggleButton) {
    menuToggleButton.addEventListener("click", function() {
        const navLinks = document.querySelector(".nav-links");
        const menuToggle = document.getElementById("menuToggle");

        navLinks?.classList.toggle("show");
        menuToggle?.classList.toggle("active");
    });
}

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        const navLinks = document.querySelector(".nav-links");
        const menuToggle = document.getElementById("menuToggle");

        navLinks?.classList.remove("show");
        menuToggle?.classList.remove("active");
    });
});

document.addEventListener("click", function (e) {
    const searchContainer = document.querySelector(".search-container");
    const scholarsDropdown = document.getElementById("scholarsDropdown");
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.getElementById("menuToggle");

    if (!e.target.closest(".search-container") && !e.target.closest(".scholars-dropdown") && !e.target.closest(".menu-toggle") && !e.target.closest(".nav-links")) {
        document.getElementById("suggestionsBox").style.display = "none";
        document.getElementById("dropdownToggle").classList.remove("active");
        isDropdownOpen = false;
        scholarsDropdown.classList.remove("active");
        navLinks?.classList.remove("show");
        menuToggle?.classList.remove("active");
    }
});
