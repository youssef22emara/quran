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

let currentReciterServer = null;
let currentSurahNumber = null;

const audio = document.getElementById("quranAudio");
const playIcon = document.getElementById("playIcon");

// ===============================
// toggle dropdown menu
// ===============================
const reciterSelectorBtn = document.getElementById("reciterSelectorBtn");
const scholarsDropdown = document.getElementById("scholarsDropdown");

reciterSelectorBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (scholarsDropdown.style.display === "none") {
        scholarsDropdown.style.display = "block";
        scholarsDropdown.classList.add("active");
    } else {
        scholarsDropdown.style.display = "none";
        scholarsDropdown.classList.remove("active");
    }
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
    if (!e.target.closest(".audio-player") && !e.target.closest(".scholars-dropdown")) {
        scholarsDropdown.style.display = "none";
        scholarsDropdown.classList.remove("active");
    }
});

// ===============================
// اختيار القارئ
// ===============================
document.querySelectorAll(".scholar-profile").forEach(el => {
    el.addEventListener("click", function (e) {
        e.preventDefault();

        currentReciterServer = this.dataset.server;

        // Update the reciter label in the button
        document.querySelector(".reciter-label").innerText =
            this.querySelector(".scholar-name").innerText;

        document.getElementById("reciterImage").src =
            this.querySelector("img").src;

        // Close dropdown
        scholarsDropdown.style.display = "none";
        scholarsDropdown.classList.remove("active");

        if (currentSurahNumber) playCurrentSurah();
    });
});

function getAudioLink(server, number) {
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

    const input = document.getElementById('searchInput').value.trim();
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
    const input = document.getElementById("searchInput");

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
            document.getElementById("searchInput").value = surahName;
            box.style.display = "none";
            document.getElementById("dropdownToggle").classList.remove("active");
            isDropdownOpen = false;
            searchSurah();
        };

        box.appendChild(div);
    });
}

function showSuggestions() {
    const input = document.getElementById("searchInput").value.trim();
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
            document.getElementById("searchInput").value = surahName;
            box.style.display = "none";
            toggleBtn.classList.remove("active");
            isDropdownOpen = false;
            searchSurah();
        };

        box.appendChild(div);
    });

    box.style.display = "block";
}

document.getElementById("searchInput").addEventListener("input", showSuggestions);

// إضافة event listeners للقائمة المنسدلة
document.getElementById("dropdownToggle").addEventListener("click", function(e) {
    e.stopPropagation();
    toggleSurahDropdown();
});

document.getElementById("searchInput").addEventListener("click", function() {
    if (!isDropdownOpen) {
        toggleSurahDropdown();
    }
});

// ===== قائمة الهامبرغر =====
document.getElementById("menuToggle").addEventListener("click", function() {
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.getElementById("menuToggle");

    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("active");
});

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        const navLinks = document.querySelector(".nav-links");
        const menuToggle = document.getElementById("menuToggle");

        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
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
        scholarsDropdown.style.display = "none";
        scholarsDropdown.classList.remove("active");
        navLinks.classList.remove("show");
        menuToggle.classList.remove("active");
    }
});
