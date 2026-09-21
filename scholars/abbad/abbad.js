// روابط السور من موقع MP3Quran.net
const surahLinks = {
    'سورة الفاتحة': 'https://server8.mp3quran.net/download/frs_a/001.mp3',
    'سورة البقرة': 'https://server8.mp3quran.net/download/frs_a/002.mp3',
    'سورة آل عمران': 'https://server8.mp3quran.net/download/frs_a/003.mp3',
    'سورة النساء': 'https://server8.mp3quran.net/download/frs_a/004.mp3',
    'سورة المائدة': 'https://server8.mp3quran.net/download/frs_a/005.mp3',
    'سورة الأنعام': 'https://server8.mp3quran.net/download/frs_a/006.mp3',
    'سورة الأعراف': 'https://server8.mp3quran.net/download/frs_a/007.mp3',
    'سورة الأنفال': 'https://server8.mp3quran.net/download/frs_a/008.mp3',
    'سورة التوبة': 'https://server8.mp3quran.net/download/frs_a/009.mp3',
    'سورة يونس': 'https://server8.mp3quran.net/download/frs_a/010.mp3',
    'سورة هود': 'https://server8.mp3quran.net/download/frs_a/011.mp3',
    'سورة يوسف': 'https://server8.mp3quran.net/download/frs_a/012.mp3',
    'سورة الرعد': 'https://server8.mp3quran.net/download/frs_a/013.mp3',
    'سورة إبراهيم': 'https://server8.mp3quran.net/download/frs_a/014.mp3',
    'سورة الحجر': 'https://server8.mp3quran.net/download/frs_a/015.mp3',
    'سورة النحل': 'https://server8.mp3quran.net/download/frs_a/016.mp3',
    'سورة الإسراء': 'https://server8.mp3quran.net/download/frs_a/017.mp3',
    'سورة الكهف': 'https://server8.mp3quran.net/download/frs_a/018.mp3',
    'سورة مريم': 'https://server8.mp3quran.net/download/frs_a/019.mp3',
    'سورة طه': 'https://server8.mp3quran.net/download/frs_a/020.mp3',
    'سورة الأنبياء': 'https://server8.mp3quran.net/download/frs_a/021.mp3',
    'سورة الحج': 'https://server8.mp3quran.net/download/frs_a/022.mp3',
    'سورة المؤمنون': 'https://server8.mp3quran.net/download/frs_a/023.mp3',
    'سورة النور': 'https://server8.mp3quran.net/download/frs_a/024.mp3',
    'سورة الفرقان': 'https://server8.mp3quran.net/download/frs_a/025.mp3',
    'سورة الشعراء': 'https://server8.mp3quran.net/download/frs_a/026.mp3',
    'سورة النمل': 'https://server8.mp3quran.net/download/frs_a/027.mp3',
    'سورة القصص': 'https://server8.mp3quran.net/download/frs_a/028.mp3',
    'سورة العنكبوت': 'https://server8.mp3quran.net/download/frs_a/029.mp3',
    'سورة الروم': 'https://server8.mp3quran.net/download/frs_a/030.mp3',
    'سورة لقمان': 'https://server8.mp3quran.net/download/frs_a/031.mp3',
    'سورة السجدة': 'https://server8.mp3quran.net/download/frs_a/032.mp3',
    'سورة الأحزاب': 'https://server8.mp3quran.net/download/frs_a/033.mp3',
    'سورة سبأ': 'https://server8.mp3quran.net/download/frs_a/034.mp3',
    'سورة فاطر': 'https://server8.mp3quran.net/download/frs_a/035.mp3',
    'سورة يس': 'https://server8.mp3quran.net/download/frs_a/036.mp3',
    'سورة الصافات': 'https://server8.mp3quran.net/download/frs_a/037.mp3',
    'سورة ص': 'https://server8.mp3quran.net/download/frs_a/038.mp3',
    'سورة الزمر': 'https://server8.mp3quran.net/download/frs_a/039.mp3',
    'سورة غافر': 'https://server8.mp3quran.net/download/frs_a/040.mp3',
    'سورة فصلت': 'https://server8.mp3quran.net/download/frs_a/041.mp3',
    'سورة الشورى': 'https://server8.mp3quran.net/download/frs_a/042.mp3',
    'سورة الزخرف': 'https://server8.mp3quran.net/download/frs_a/043.mp3',
    'سورة الدخان': 'https://server8.mp3quran.net/download/frs_a/044.mp3',
    'سورة الجاثية': 'https://server8.mp3quran.net/download/frs_a/045.mp3',
    'سورة الأحقاف': 'https://server8.mp3quran.net/download/frs_a/046.mp3',
    'سورة محمد': 'https://server8.mp3quran.net/download/frs_a/047.mp3',
    'سورة الفتح': 'https://server8.mp3quran.net/download/frs_a/048.mp3',
    'سورة الحجرات': 'https://server8.mp3quran.net/download/frs_a/049.mp3',
    'سورة ق': 'https://server8.mp3quran.net/download/frs_a/050.mp3',
    'سورة الذاريات': 'https://server8.mp3quran.net/download/frs_a/051.mp3',
    'سورة الطور': 'https://server8.mp3quran.net/download/frs_a/052.mp3',
    'سورة النجم': 'https://server8.mp3quran.net/download/frs_a/053.mp3',
    'سورة القمر': 'https://server8.mp3quran.net/download/frs_a/054.mp3',
    'سورة الرحمن': 'https://server8.mp3quran.net/download/frs_a/055.mp3',
    'سورة الواقعة': 'https://server8.mp3quran.net/download/frs_a/056.mp3',
    'سورة الحديد': 'https://server8.mp3quran.net/download/frs_a/057.mp3',
    'سورة المجادلة': 'https://server8.mp3quran.net/download/frs_a/058.mp3',
    'سورة الحشر': 'https://server8.mp3quran.net/download/frs_a/059.mp3',
    'سورة الممتحنة': 'https://server8.mp3quran.net/download/frs_a/060.mp3',
    'سورة الصف': 'https://server8.mp3quran.net/download/frs_a/061.mp3',
    'سورة الجمعة': 'https://server8.mp3quran.net/download/frs_a/062.mp3',
    'سورة المنافقون': 'https://server8.mp3quran.net/download/frs_a/063.mp3',
    'سورة التغابن': 'https://server8.mp3quran.net/download/frs_a/064.mp3',
    'سورة الطلاق': 'https://server8.mp3quran.net/download/frs_a/065.mp3',
    'سورة التحريم': 'https://server8.mp3quran.net/download/frs_a/066.mp3',
    'سورة الملك': 'https://server8.mp3quran.net/download/frs_a/067.mp3',
    'سورة القلم': 'https://server8.mp3quran.net/download/frs_a/068.mp3',
    'سورة الحاقة': 'https://server8.mp3quran.net/download/frs_a/069.mp3',
    'سورة المعارج': 'https://server8.mp3quran.net/download/frs_a/070.mp3',
    'سورة نوح': 'https://server8.mp3quran.net/download/frs_a/071.mp3',
    'سورة الجن': 'https://server8.mp3quran.net/download/frs_a/072.mp3',
    'سورة المزمل': 'https://server8.mp3quran.net/download/frs_a/073.mp3',
    'سورة المدثر': 'https://server8.mp3quran.net/download/frs_a/074.mp3',
    'سورة القيامة': 'https://server8.mp3quran.net/download/frs_a/075.mp3',
    'سورة الإنسان': 'https://server8.mp3quran.net/download/frs_a/076.mp3',
    'سورة المرسلات': 'https://server8.mp3quran.net/download/frs_a/077.mp3',
    'سورة النبأ': 'https://server8.mp3quran.net/download/frs_a/078.mp3',
    'سورة النازعات': 'https://server8.mp3quran.net/download/frs_a/079.mp3',
    'سورة عبس': 'https://server8.mp3quran.net/download/frs_a/080.mp3',
    'سورة التكوير': 'https://server8.mp3quran.net/download/frs_a/081.mp3',
    'سورة الانفطار': 'https://server8.mp3quran.net/download/frs_a/082.mp3',
    'سورة المطففين': 'https://server8.mp3quran.net/download/frs_a/083.mp3',
    'سورة الانشقاق': 'https://server8.mp3quran.net/download/frs_a/084.mp3',
    'سورة البروج': 'https://server8.mp3quran.net/download/frs_a/085.mp3',
    'سورة الطارق': 'https://server8.mp3quran.net/download/frs_a/086.mp3',
    'سورة الأعلى': 'https://server8.mp3quran.net/download/frs_a/087.mp3',
    'سورة الغاشية': 'https://server8.mp3quran.net/download/frs_a/088.mp3',
    'سورة الفجر': 'https://server8.mp3quran.net/download/frs_a/089.mp3',
    'سورة البلد': 'https://server8.mp3quran.net/download/frs_a/090.mp3',
    'سورة الشمس': 'https://server8.mp3quran.net/download/frs_a/091.mp3',
    'سورة الليل': 'https://server8.mp3quran.net/download/frs_a/092.mp3',
    'سورة الضحى': 'https://server8.mp3quran.net/download/frs_a/093.mp3',
    'سورة الشرح': 'https://server8.mp3quran.net/download/frs_a/094.mp3',
    'سورة التين': 'https://server8.mp3quran.net/download/frs_a/095.mp3',
    'سورة العلق': 'https://server8.mp3quran.net/download/frs_a/096.mp3',
    'سورة القدر': 'https://server8.mp3quran.net/download/frs_a/097.mp3',
    'سورة البينة': 'https://server8.mp3quran.net/download/frs_a/098.mp3',
    'سورة الزلزلة': 'https://server8.mp3quran.net/download/frs_a/099.mp3',
    'سورة العاديات': 'https://server8.mp3quran.net/download/frs_a/100.mp3',
    'سورة القارعة': 'https://server8.mp3quran.net/download/frs_a/101.mp3',
    'سورة التكاثر': 'https://server8.mp3quran.net/download/frs_a/102.mp3',
    'سورة العصر': 'https://server8.mp3quran.net/download/frs_a/103.mp3',
    'سورة الهمزة': 'https://server8.mp3quran.net/download/frs_a/104.mp3',
    'سورة الفيل': 'https://server8.mp3quran.net/download/frs_a/105.mp3',
    'سورة قريش': 'https://server8.mp3quran.net/download/frs_a/106.mp3',
    'سورة الماعون': 'https://server8.mp3quran.net/download/frs_a/107.mp3',
    'سورة الكوثر': 'https://server8.mp3quran.net/download/frs_a/108.mp3',
    'سورة الكافرون': 'https://server8.mp3quran.net/download/frs_a/109.mp3',
    'سورة النصر': 'https://server8.mp3quran.net/download/frs_a/110.mp3',
    'سورة المسد': 'https://server8.mp3quran.net/download/frs_a/111.mp3',
    'سورة الإخلاص': 'https://server8.mp3quran.net/download/frs_a/112.mp3',
    'سورة الفلق': 'https://server8.mp3quran.net/download/frs_a/113.mp3',
    'سورة الناس': 'https://server8.mp3quran.net/download/frs_a/114.mp3'
};

// تحديث عنوان السورة في واجهة المستخدم
function updateSurahTitle(title) {
    const surahTitle = document.getElementById('current-surah');
    surahTitle.textContent = title;
}

// تحديث مصدر الصوت
function updateAudioSource(source) {
    const audioPlayer = document.getElementById('quran-audio');
    audioPlayer.src = source;
    audioPlayer.load();
    audioPlayer.play();
}

// إضافة مستمعي الأحداث للسور
document.addEventListener('DOMContentLoaded', function() {
    const surahList = document.querySelectorAll('.surah-list li');
    
    surahList.forEach(surah => {
        surah.addEventListener('click', function() {
            const surahName = this.textContent;
            const audioSource = surahLinks[surahName];
            
            if (audioSource) {
                updateSurahTitle(surahName);
                updateAudioSource(audioSource);
                
                // إزالة التحديد من جميع السور
                surahList.forEach(item => item.classList.remove('active'));
                // إضافة التحديد للسورة المختارة
                this.classList.add('active');
            }
        });
    });
    
    // === Player controls augmentation ===
    const audioPlayer = document.getElementById('quran-audio');
    const playBtn = document.getElementById('play-pause');
    const downloadBtn = document.getElementById('download-btn');
    const repeatBtn = document.getElementById('repeat-btn');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const disc = document.querySelector('.disc');
    const discImage = document.querySelector('.disc-image');

    function formatTime(s) {
        const m = Math.floor(s/60).toString().padStart(2,'0');
        const sec = Math.floor(s%60).toString().padStart(2,'0');
        return `${m}:${sec}`;
    }

    // Override updateAudioSource to update download link and UI
    function updateAudioSource(source) {
        if (!audioPlayer) return;
        audioPlayer.src = source;
        if (downloadBtn) downloadBtn.href = source;
        audioPlayer.load();
        audioPlayer.play().catch(()=>{});
        if (playBtn) playBtn.querySelector('i').classList.replace('fa-play','fa-pause');
        if (disc) disc.classList.add('playing');
        if (discImage) discImage.classList.add('playing');
    }

    if (playBtn && audioPlayer) {
        playBtn.addEventListener('click', function() {
            if (audioPlayer.paused) audioPlayer.play(); else audioPlayer.pause();
        });
    }

    if (repeatBtn && audioPlayer) {
        const syncRepeatState = () => {
            repeatBtn.classList.toggle('active', audioPlayer.loop);
            repeatBtn.setAttribute('aria-pressed', audioPlayer.loop ? 'true' : 'false');
            repeatBtn.title = audioPlayer.loop ? 'إيقاف التكرار' : 'تكرار السورة';
        };

        syncRepeatState();

        repeatBtn.addEventListener('click', function() {
            audioPlayer.loop = !audioPlayer.loop;
            syncRepeatState();
        });
    }

    if (audioPlayer) {
        audioPlayer.addEventListener('loadedmetadata', function() {
            if (durationEl) durationEl.textContent = formatTime(audioPlayer.duration || 0);
        });

        audioPlayer.addEventListener('timeupdate', function() {
            if (!progress) return;
            const pct = (audioPlayer.currentTime / (audioPlayer.duration || 1)) * 100;
            progress.value = pct || 0;
            if (currentTimeEl) currentTimeEl.textContent = formatTime(audioPlayer.currentTime || 0);
        });

        progress && progress.addEventListener('input', function() {
            if (!audioPlayer.duration) return;
            const seekTime = (progress.value/100) * audioPlayer.duration;
            audioPlayer.currentTime = seekTime;
        });

        audioPlayer.addEventListener('play', function() {
            if (playBtn) playBtn.querySelector('i').classList.replace('fa-play','fa-pause');
            if (disc) disc.classList.add('playing');
            if (discImage) discImage.classList.add('playing');
        });

        audioPlayer.addEventListener('pause', function() {
            if (playBtn) playBtn.querySelector('i').classList.replace('fa-pause','fa-play');
            if (disc) disc.classList.remove('playing');
            if (discImage) discImage.classList.remove('playing');
        });

        audioPlayer.addEventListener('ended', function() {
            if (!audioPlayer.loop) {
                if (playBtn) playBtn.querySelector('i').classList.replace('fa-pause','fa-play');
                if (disc) disc.classList.remove('playing');
                if (discImage) discImage.classList.remove('playing');
            }
        });
    }
}); 
